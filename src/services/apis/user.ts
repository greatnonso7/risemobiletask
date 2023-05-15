import Axios from 'services/Axios';

export const getQuotes = () => Axios.get('quotes').then(({ data }) => data);
