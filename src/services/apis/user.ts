import Axios from 'services/Axios';

export const getQuotes = () => Axios.get('quotes').then(({ data }) => data);
export const getBanks = () => Axios.get('banks').then(({ data }) => data);
export const getRates = () => Axios.get('rates').then(({ data }) => data);
