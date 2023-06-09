import dayjs from 'dayjs';
import { storage } from './storage';
import { store } from 'redux/store';

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

export const formatAmount = (value: string | number) =>
  Number(value)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

export const getToken = async () => {
  const token = await storage.getItem('user_token');
  return token;
};

export const getAllModels = () => {
  return store.getState();
};
