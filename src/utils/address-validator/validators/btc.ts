import BitcoinAddressValidation from 'bitcoin-address-validation';

export default {
  isValidAddress: function (address: string) {
    return BitcoinAddressValidation(address);
  },
};
