import currencies from './currencies';
import { OPTS } from './types/opts';

const DEFAULT_CURRENCY_NAME = 'bitcoin';

export default {
  validate: function (
    address: string,
    currencyNameOrSymbol: string,
    opts?: OPTS | string
  ) {
    const currency = currencies.getByNameOrSymbol(
      currencyNameOrSymbol || DEFAULT_CURRENCY_NAME
    );

    if (currency && currency.validator) {
      if (opts && typeof opts === 'string') {
        return currency.validator.isValidAddress(address, currency, {
          networkType: opts,
        });
      }
      return currency.validator.isValidAddress(address, currency, opts);
    }

    throw new Error('Missing validator for currency: ' + currencyNameOrSymbol);
  },
  getCurrencies: function () {
    return currencies.getAll();
  },
  findCurrency: function (symbol: string) {
    return currencies.getByNameOrSymbol(symbol) || null;
  },
};
