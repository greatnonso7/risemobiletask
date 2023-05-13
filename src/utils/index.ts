import dayjs from 'dayjs';

export const formatDOB = (val: string | Date) =>
  dayjs(val).format('YYYY-MM-DD');
