import { bn } from './numbers/bn';
import { format, addDays, addHours, startOfWeek, compareAsc } from 'date-fns';

export const calculateApproximateExecutionDate = ({
  amount,
  createdAt,
}: {
  amount: string | number;
  createdAt: string | Date;
}) => {
  if (!amount || !createdAt) return null;

  const amountBN = bn(amount);

  const getClosestNextMonday = (date: Date) => {
    const closestMonday = startOfWeek(date, { weekStartsOn: 1 });

    return compareAsc(closestMonday, date)
      ? addDays(closestMonday, 7)
      : closestMonday;
  };

  const getGap = () => {
    if (amountBN.lte(500)) return 48;
    if (amountBN.lte(5000)) return 96;
    if (amountBN.lte(50000)) return 144;
    if (amountBN.gt(50000)) return 336;
    return 0;
  };

  const date = new Date(createdAt);
  const closestNextMonday = getClosestNextMonday(date);
  const withGap = addHours(closestNextMonday, getGap());

  return format(withGap, 'DD.MM.YY');
};
