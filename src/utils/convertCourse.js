export const mappingFundType = {
  eth: 'ethereum',
  btc: 'bitcoin',
  usdt: 'tether',
  eth_wallet: 'ethereum',
  btc_wallet: 'bitcoin',
  usdt_wallet: 'tether',
};

const mappingsTypeFund = {
  ethereum: 'eth',
  bitcoin: 'btc',
  tether: 'usdt',
};

const mapFundToType = (fund) => {
  if (mappingFundType[fund]) return mappingFundType[fund];
  return fund;
};

const mapTypeToFund = (type) => {
  if (mappingsTypeFund[type]) return mappingsTypeFund[type];
  return type;
};

export default (course, fromFund, toFund) => {
  if (
    !(mappingFundType[fromFund] || mappingsTypeFund[fromFund]) ||
    !(mappingFundType[toFund] || mappingsTypeFund[toFund])
  ) {
    throw new Error('Invalid parameter values in the request');
  }

  if (fromFund === toFund) return '1.0';

  if (fromFund === 'usdt' || fromFund === 'usdt_wallet') {
    if (toFund.includes('usd')) return '1.0';
    const type = mapFundToType(toFund);
    if (course[`${type}_usdt`]) return (1 / course[`${type}_usdt`]).toString();
    return '0';
  }
  const type = mapFundToType(fromFund);
  const fund = mapTypeToFund(toFund);
  if (course[`${type}_${fund}`]) return course[`${type}_${fund}`];
  return '0';
};
