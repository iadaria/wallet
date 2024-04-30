import moment from 'moment';

export const getLastDayOfMonth = (date: Date): Date =>
  moment(date).add(1, 'month').add(0, 'day').toDate();

export const getNextDay = (date: Date): Date =>
  moment(date).add(1, 'day').toDate();

export const isEqualDates = (one: Date | number, two: Date | number): boolean =>
  moment(one).format('DD MM YYYY') === moment(two).format('DD MM YYYY');
