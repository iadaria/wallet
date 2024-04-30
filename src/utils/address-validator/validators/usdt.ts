import { OPTS } from '../types/opts';

import BTCValidator from './btc';
import ETHValidator from './eth';

function validateTron(mainAddress: any) {
  const tronRegex = /^T[a-zA-Z0-9]{33}$/;
  return tronRegex.test(mainAddress);
}

function checkAllValidators(address: string) {
  const btc = BTCValidator.isValidAddress(address);
  const eth = ETHValidator.isValidAddress(address);
  const tron = validateTron(address);
  return btc || eth || tron;
}

export default {
  isValidAddress: function (
    address: string,
    _currency: any,
    opts?: OPTS | string
  ) {
    if (opts && typeof opts !== 'string') {
      if (opts.chainType === 'erc20') {
        return ETHValidator.isValidAddress(address);
      } else if (opts.chainType === 'omni') {
        return BTCValidator.isValidAddress(address);
      } else if (opts.chainType === 'trc20') {
        return validateTron(address);
      }
    }
    return checkAllValidators(address);
  },
};
