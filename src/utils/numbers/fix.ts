import BigNumber from 'bignumber.js';

import { bn } from './bn';

type FixOptions = {
  currency: 'btc' | 'eth' | 'usdt' | 'sol';
  limit?: number;
  maxCharsAfterDot?: number;
  trimTrailingZeros?: boolean;
};

type Fix = (
  number: string | BigNumber,
  { currency, limit, maxCharsAfterDot, trimTrailingZeros }: FixOptions
) => string;

export const fix: Fix = (
  number,
  { currency, limit, maxCharsAfterDot, trimTrailingZeros = true }
) => {
  const defaultLimits = { btc: 8, eth: 8, usdt: 2, sol: 2 };

  const big = BigNumber.isBigNumber(number) ? number : bn(number);
  const fixed = big
    .toFixed(limit || maxCharsAfterDot || defaultLimits[currency])
    .toString();

  /* console.log(
    `[utils/fix] ${number} ${currency}: big=${big} fixed=${fixed} palces=${big.decimalPlaces()}`
  ); */

  if (currency === 'sol' /* && bn(number).isZero() */) return fixed;

  if (trimTrailingZeros) return fixed.replace(/0+$/, '').replace(/\.+$/, '');

  return fixed;
};

export const fixToUsdt = (number: string | BigNumber): string =>
  fix(number, { currency: 'usdt' });

export const fixToSol = (number: string | BigNumber): string =>
  fix(number, { currency: 'sol' });

export const toBtc = (number: string | BigNumber): string =>
  fix(number, { currency: 'btc' });

export const toEth = (number: string | BigNumber): string =>
  fix(number, { currency: 'eth' });
