import { Currency } from '@constants/funds';
import { Rates, YearInMonths } from '@store/stables/rates/types';
import { CalculationData } from '@store/stables/types';
import BigNumber from 'bignumber.js';
import { addMonths, format } from 'date-fns';
import { bn } from './numbers/bn';
import { fixToUsdt } from './numbers/fix';

// [0, 1, ..., term]
const range = (to: number) => Array(to).keys();

// dateAfterMonths(01-01-2000, 2) => 01-03-2000
const dateAfterMonths = (fromDate: Date | number, months: number) =>
  format(addMonths(fromDate, months), 'DD-MM-YYYY');

export const calcMonthIncome = ({
  term,
  amount,
  currency,
  is_capitalization,
  rates,
}: CalculationData) => {
  const percent = rates[is_capitalization][currency][term];
  const monthIncome = amount.multipliedBy(percent);

  return monthIncome;
};

/*************** Calculate with is_capitalization ****************/

// common

export const calcNetIncome = ({
  term,
  amount,
  currency,
  is_capitalization,
  rates
}: CalculationData) => {
  const percent = rates[is_capitalization][currency][term];
  const monthIncome = amount.multipliedBy(percent);
  const income = monthIncome.multipliedBy(term);

  return income;
};
export const calcIncome = (data: CalculationData) => {
  const netIncome = calcNetIncome(data);
  const income = netIncome.plus(data.amount);

  return income;
};

// with is_capitalization

export const calcNetIncomeWithCap = (data: CalculationData) => {
  const { term, amount } = data;
  const months = [...range(term)];

  return months.reduce((totalNetIncome) => {
    const accumulatedAmount = totalNetIncome.plus(amount);
    const monthIncome = calcMonthIncome({ ...data, amount: accumulatedAmount });

    return totalNetIncome.plus(monthIncome);
  }, bn(0));
};

export const calcFinalAmountWithCap = (data: CalculationData) => {
  const incomeWithCap = calcNetIncomeWithCap(data);
  return incomeWithCap.plus(data.amount);
};

export const calcMonthIncomesWithCap = (
  amount: BigNumber,
  term: YearInMonths,
  currency: Currency,
  rates: Rates,
): BigNumber[] => {
  const months = [...range(term)];
  return months.reduce((incomes: BigNumber[], currentMonth: number) => {
    const isFirstMonth = currentMonth === 0;
    const incomesSum = isFirstMonth
      ? bn(0)
      : incomes.reduce((sum, income) => sum.plus(income));
    const accumulatedAmount = incomesSum.plus(amount);
    const monthIncome = calcMonthIncome({
      term,
      amount: accumulatedAmount,
      currency,
      is_capitalization: 1,
      rates,
    });
    return [...incomes, monthIncome];
  }, []);
};

export const calcSheduleWithCap = (
  amount: BigNumber,
  term: YearInMonths,
  fromDate: number | Date = new Date(),
  currency: Currency,
  rates: Rates
) => {
  const incomes = calcMonthIncomesWithCap(amount, term, currency, rates);
  const rest = bn(0);
  return incomes.map((income: BigNumber, currentMonth: number) => ({
    date: dateAfterMonths(fromDate, currentMonth),
    monthIncome: fixToUsdt(income),
    rest: rest.plus(income),
  }));
};

/*************** Calculate without is_capitalization ****************/

export const calcMonthIncomesWithoutCap = (
  amount: BigNumber,
  term: YearInMonths,
  currency: Currency,
  rates: Rates,
): BigNumber[] => {
  const months = [...range(term + 1)];
  return months.map((currentMonth: number) => {
    const isFirstMonth = currentMonth === 0;
    const isLastMonth = currentMonth === term;
    const monthIncome = calcMonthIncome({
      term,
      amount,
      currency,
      is_capitalization: 0,
      rates,
    });
    const incomeIsFirstMonth = isFirstMonth ? bn(0) : null;
    const incomeIsLastMonth = isLastMonth ? monthIncome.plus(amount) : null;

    return incomeIsFirstMonth || incomeIsLastMonth || monthIncome;
  });
};

export const calcSheduleWithoutCap = (
  amount: BigNumber,
  term: YearInMonths,
  fromDate: number | Date = new Date(),
  currency: Currency,
  rates: Rates,
) => {
  const incomes = calcMonthIncomesWithoutCap(amount, term, currency, rates);
  const rest = calcIncome({ term, amount, currency, is_capitalization: 0, rates });

  return incomes.map((thisMonthIncome: BigNumber, currentMonth: number) => {
    const isLastMonth = currentMonth === term;

    const accumulatedIncomes = thisMonthIncome.multipliedBy(currentMonth);
    const monthRest = isLastMonth ? bn(0) : rest.minus(accumulatedIncomes);

    return {
      date: dateAfterMonths(fromDate, currentMonth),
      monthIncome: fixToUsdt(thisMonthIncome),
      rest: fixToUsdt(monthRest),
    };
  });
};
