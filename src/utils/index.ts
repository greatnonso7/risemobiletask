import dayjs from 'dayjs';

export const formatDOB = (val: string | Date) =>
  dayjs(val).format('YYYY-MM-DD');

export const formatPhone = (val: string | number) => {
  const stringVal = val.toString();
  if (stringVal.startsWith('0')) {
    return stringVal.slice(1);
  } else {
    return stringVal;
  }
};

export const formatAmount = (value: string) =>
  Number(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');
