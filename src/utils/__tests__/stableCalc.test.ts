import { bn } from '@utils/numbers/bn';
import { fixToUsdt } from '@utils/numbers/fix';
import {
  calcIncomeWithCap,
  calcIncomeWithoutCap,
  calcMonthIncomesWithCap,
  calcMonthIncomesWithoutCap,
  calcRestWithoutCap,
  calcSheduleWithoutCap,
} from '@utils/stableCalc';

const testDate = Date.parse('20 Jun 2021');
const testSheduleWithoutCap = [
  {
    date: '20-06-2021',
    monthIncome: '0',
    rest: '1150',
  },
  {
    date: '20-07-2021',
    monthIncome: '25',
    rest: '1125',
  },
  {
    date: '20-08-2021',
    monthIncome: '25',
    rest: '1100',
  },
  {
    date: '20-09-2021',
    monthIncome: '25',
    rest: '1075',
  },
  {
    date: '20-10-2021',
    monthIncome: '25',
    rest: '1050',
  },
  {
    date: '20-11-2021',
    monthIncome: '25',
    rest: '1025',
  },
  {
    date: '20-12-2021',
    monthIncome: '1025',
    rest: '0',
  },
];
const testShedulesWithCap = [
  {
    date: '20-06-2021',
    monthIncome: '0',
    rest: '1000',
  },
  {
    date: '20-07-2021',
    monthIncome: '25',
    rest: '1025',
  },
  {
    date: '20-08-2021',
    monthIncome: '25.62',
    rest: '1050.62',
  },
  {
    date: '20-09-2021',
    monthIncome: '26.26',
    rest: '1076.89',
  },
  {
    date: '20-10-2021',
    monthIncome: '26.92',
    rest: '1131.40',
  },
  {
    date: '20-11-2021',
    monthIncome: '27.59',
    rest: '1131.40',
  },
  {
    date: '20-12-2021',
    monthIncome: '1025',
    rest: '0',
  },
];

const testIncomesWithCap = ['25', '25.63', '26.27', '26.92', '27.6', '28.29'];
const testIncomesWithoutCap = ['0', '25', '25', '25', '25', '25', '1025'];

describe('Without capitalization $term = 6 $amount = 1000', () => {
  const term = 6;
  const amount = '1000';
  it('Income is 150', () => {
    const income = calcIncomeWithoutCap(amount, term);
    const incomeUsdt = fixToUsdt(income);

    expect(incomeUsdt).toEqual('150');
  });
  it('Rest is 1150', () => {
    const income = calcRestWithoutCap(amount, term);
    const incomeUsdt = fixToUsdt(income);

    expect(incomeUsdt).toEqual('1150');
  });

  it('Shedule', () => {
    const shedules = calcSheduleWithoutCap(amount, term, testDate);

    expect(shedules).toEqual(testSheduleWithoutCap);
  });

  it('Incomes', () => {
    const incomes = calcMonthIncomesWithoutCap(amount, term);
    const fixedIncomes = incomes.map((income) => fixToUsdt(income));

    expect(fixedIncomes).toEqual(testIncomesWithoutCap);
  });

  it('Calc month incomes', () => {
    const monthIncomes = calcMonthIncomesWithoutCap(amount, term);
    const fixedMonthIncomes = monthIncomes.map((income) => fixToUsdt(income));

    expect(fixedMonthIncomes).toEqual(testIncomesWithoutCap);
  });
});

describe('With capitalization $term = 6 $amount = 1000', () => {
  const term = 6;
  const amount = bn('1000');

  it('Income is 159.69', () => {
    const income = calcIncomeWithCap(amount, term);
    const incomeUsdt = fixToUsdt(income);

    expect(incomeUsdt).toEqual('159.69');
  });

  it('Calc month incomes', () => {
    const monthIncomes = calcMonthIncomesWithCap(amount, term);
    const fixedMonthIncomes = monthIncomes.map((income) => fixToUsdt(income));

    expect(fixedMonthIncomes).toEqual(testIncomesWithCap);
  });
});
