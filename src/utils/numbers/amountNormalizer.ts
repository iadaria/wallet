export const amountNormalizer = (number: string): string =>
  number.replace(/,/g, '.').replace(/[^0-9.]+/g, '');
