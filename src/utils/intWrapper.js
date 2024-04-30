import { BigNumber } from 'bignumber.js';

export default int => new BigNumber(int || '0', 10);
