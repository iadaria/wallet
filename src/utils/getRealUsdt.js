import { intWrapper } from './calculationsNumber';
import convertCourse from './convertCourse';

export const getUsdtEquiavalent = ({ course, fund, value }) => {
  if (fund === 'usdt' || fund === 'usdt_wallet') {
    return value;
  }
  return intWrapper(value)
    .multipliedBy(convertCourse(course, fund, 'usdt'))
    .toString(10);
};
