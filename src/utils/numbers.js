import BigNumber from 'bignumber.js';

BigNumber.config({ ROUNDING_MODE: 1 });

export const fixNumber = (
  number,
  currency,
  limit,
  trimTrailingZeros = true
) => {
  const fix = (bn) => {
    if (currency?.includes('btc')) {
      return bn.toFixed(limit < 8 ? limit : 8).toString();
    }

    if (currency?.includes('eth')) {
      return bn.toFixed(limit < 18 ? limit : 18).toString();
    }

    if (currency?.includes('usdt')) {
      return bn.toFixed(limit < 2 ? limit : 2).toString();
    }

    if (currency?.includes('awt')) {
      return bn.toFixed(limit < 2 ? limit : 2).toString();
    }

    console.warn('Bad currency in fixNumber');
    return bn.toString();
  };

  const fixed = BigNumber.isBigNumber(number)
    ? fix(number)
    : fix(new BigNumber(number));

  if (trimTrailingZeros) return fixed.replace(/0+$/, '').replace(/\.+$/, '');

  return fixed;
};

export const getCurrency = (fund) => {
  if (fund.includes('eth')) return 'ETH';
  if (fund.includes('btc')) return 'BTC';
  if (fund.includes('usdt')) return 'USDT';

  console.warn('Bad fund in getCurrency');
  return fund;
};
