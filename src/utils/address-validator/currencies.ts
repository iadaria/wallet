import USDTValidator from './validators/usdt';
import BTCValidator from './validators/btc';
import ETHValidator from './validators/eth';

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
const CURRENCIES = [
  {
    name: 'Bitcoin',
    symbol: 'btc',
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4', '3c', '26'] },
    bech32Hrp: { prod: ['bc'], testnet: ['tb'] },
    validator: BTCValidator,
  },
  {
    name: 'Tether',
    symbol: 'usdt',
    addressTypes: { prod: ['00', '05', 0x41], testnet: ['6f', 'c4', 0xa0] },
    validator: USDTValidator,
  },
  {
    name: 'Ethereum',
    symbol: 'eth',
    validator: ETHValidator,
  },
  {
    name: 'AWT',
    symbol: 'awt',
    validator: ETHValidator,
  },
];

export default {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  getByNameOrSymbol: function (currencyNameOrSymbol: string) {
    const nameOrSymbol = currencyNameOrSymbol.toLowerCase();
    return CURRENCIES.find(function (currency) {
      return (
        currency.name.toLowerCase() === nameOrSymbol ||
        currency.symbol.toLowerCase() === nameOrSymbol
      );
    });
  },
  getAll: function () {
    return CURRENCIES;
  },
};
