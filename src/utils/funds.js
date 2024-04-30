export const FUND = {
  BTC_SAVING: 'btc',
  ETH_SAVING: 'eth',
  USDT_SAVING: 'usdt',
  BTC_WALLET: 'btc_wallet',
  ETH_WALLET: 'eth_wallet',
  USDT_WALLET: 'usdt_wallet'
};

export const FUND_TYPE = {
  BITCOIN: 'bitcoin',
  ETHEREUM: 'ethereum',
  TETHER: 'usdt'
};

/**
 * Filter funds and return array of entries
 * @param {Array} wallets or savings
 * @param {String} fund id
 */
export const getFundEntries = (funds, fund) => {
  const entriesMap = {
    [FUND.BTC_WALLET]: [FUND_TYPE.BITCOIN],
    [FUND.ETH_WALLET]: [FUND_TYPE.ETHEREUM],
    [FUND.USDT_WALLET]: [FUND_TYPE.TETHER, FUND_TYPE.ETHEREUM],
    [FUND.BTC_SAVING]: [FUND_TYPE.BITCOIN],
    [FUND.ETH_SAVING]: [FUND_TYPE.ETHEREUM],
    [FUND.USDT_SAVING]: [FUND_TYPE.TETHER, FUND_TYPE.ETHEREUM]
  };

  return funds.reduce((acc, item) => {
    if (item.fund !== fund) return acc;

    return item.entries.filter(entry => entriesMap[fund].includes(entry.type));
  }, []);
};
