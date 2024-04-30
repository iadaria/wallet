import BigNumber from 'bignumber.js';
import { bn } from '@utils/numbers/bn';
import { NormalizedCourses } from '@store/user/types';

const blockchainToTicker: Record<string, string> = {
  ethereum: 'eth',
  bitcoin: 'btc',
  tether: 'usdt',
};

export const normalizeMeasurement = (name: string): string => {
  const lowerCaseName = name.split('_')[0].toLowerCase();
  if (blockchainToTicker[lowerCaseName])
    return blockchainToTicker[lowerCaseName];
  return lowerCaseName;
};

type GetActualCourse = ({
  courses,
  from,
  to,
}: {
  courses: NormalizedCourses;
  from: string;
  to: string;
}) => string;

export const getActualCourse: GetActualCourse = ({ courses, from, to }) => {
  const normalizedFrom = normalizeMeasurement(from);
  const normalizedTo = normalizeMeasurement(to);

  if (normalizedFrom === normalizedTo) return '1';

  return courses[normalizedFrom][normalizedTo];
};

type ConvertWithFee = ({
  amount,
  from,
  to,
  courses,
  feeRate,
}: {
  amount: string | BigNumber;
  from: string;
  to: string;
  courses: NormalizedCourses;
  feeRate: string;
}) => string;

export const convertWithFee: ConvertWithFee = ({
  amount,
  from,
  to,
  courses,
  feeRate,
}) => {
  const actualCourse = getActualCourse({ courses, from, to });

  return bn(amount)
    .times(bn(actualCourse).times(bn(1).minus(feeRate)))
    .toString();
};

type Convert = ({
  amount,
  from,
  to,
  courses,
}: {
  amount: string | BigNumber;
  from: string;
  to: string;
  courses: NormalizedCourses;
}) => string;

export const convert: Convert = ({ amount, from, to, courses }) => {
  const actualCourse = getActualCourse({ courses, from, to });

  return bn(amount).times(actualCourse).toString();
};
