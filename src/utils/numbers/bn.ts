import { BigNumber } from 'bignumber.js';

export const bn = (number: number | string | BigNumber): BigNumber =>
  new BigNumber(number || '0', 10);
