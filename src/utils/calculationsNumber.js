import { BigNumber } from 'bignumber.js';

export const intWrapper = (int = '0') => new BigNumber(int || '0', 10);

export const formatNumber = (num, fixed) =>
  fixed
    ? new BigNumber(num || '0', 10).toFixed(fixed).toString()
    : new BigNumber(num || '0', 10).toString();
