import bip21 from 'bip21';
import coinAddressValidator from 'coin-address-validator';
import { FUND } from './funds';

const URI_SCHEMAS = {
  TETHER: 'tether',
  BITCOIN: 'bitcoin',
  ETHEREUM: 'ethereum',
};

export const WALLET_URI_SCHEMA_MAP = {
  [FUND.USDT_WALLET]: URI_SCHEMAS.TETHER,
  [FUND.BTC_WALLET]: URI_SCHEMAS.BITCOIN,
  [FUND.ETH_WALLET]: URI_SCHEMAS.ETHEREUM,
};

export const URI_SCHEMA_WALLET_MAP = {
  [URI_SCHEMAS.TETHER]: FUND.USDT_WALLET,
  [URI_SCHEMAS.ETHEREUM]: FUND.ETH_WALLET,
  [URI_SCHEMAS.BITCOIN]: FUND.BTC_WALLET,
};

export const detectSchemaFromURI = (uri) => {
  const supportedSchemas = [
    URI_SCHEMAS.BITCOIN,
    URI_SCHEMAS.TETHER,
    URI_SCHEMAS.ETHEREUM,
  ];

  const schema = uri.split(':')[0];
  if (supportedSchemas.includes(schema)) return schema;

  throw new Error('Unsupported URI');
};

export const validateAddress = ({ address, schema }) => {
  if (!address) throw new Error('Invalid address');

  if (schema === URI_SCHEMAS.BITCOIN || schema === URI_SCHEMAS.ETHEREUM) {
    return coinAddressValidator.validate(address, schema);
  }

  return [URI_SCHEMAS.ETHEREUM, URI_SCHEMAS.BITCOIN].reduce((acc, curr) => {
    if (acc) return true;

    try {
      const result = coinAddressValidator.validate(address, curr);
      return result;
    } catch (e) {
      return acc;
    }
  }, false);
};

export const readURI = (string, { onSuccess, onFail }) => {
  if (!string) onFail();

  const isURI = string.includes(':');

  try {
    if (isURI) {
      const schema = detectSchemaFromURI(string);
      const decoded = bip21.decode(string, schema);

      validateAddress({ address: decoded.address, schema });
      onSuccess({
        address: decoded.address,
        amount: decoded.options.amount ? String(decoded.options.amount) : '',
        message: decoded.options.message,
        fund: URI_SCHEMA_WALLET_MAP[schema],
      });
    } else {
      validateAddress({ address: string });
      onSuccess({ address: string, amount: null, message: null, fund: null });
    }
  } catch (e) {
    console.log(e);
    onFail();
  }
};

export const createURI = ({ amount, message, entry }) => {
  const scheme = WALLET_URI_SCHEMA_MAP[entry.fund];
  const meta = { amount, message };

  return bip21.encode(entry.address, meta, scheme);
};
