import { fixNumber } from '../numbers';
import { normlaizeMeasuremenent } from './convertationWithFee';
import i18n from '../i18n';

export const showCourse = course => {
  if (course < 1) {
    return fixNumber(1 / course, 'usdt');
  }
  return fixNumber(course, 'usdt');
};

export const renderCourseString = (from, to, course) => {
  if (course < 1) {
    return `1 ${normlaizeMeasuremenent(to).toUpperCase()} ${i18n.t(
      'renderCourseString:for'
    )} ${showCourse(course)} ${normlaizeMeasuremenent(from).toUpperCase()}`;
  }
  return `1 ${normlaizeMeasuremenent(from).toUpperCase()} ${i18n.t(
    'renderCourseString:for'
  )} ${showCourse(course)} ${normlaizeMeasuremenent(to).toUpperCase()}`;
};
