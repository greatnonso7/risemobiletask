import Axios from 'services/Axios';
import { LoginParams } from 'types';

export const setLogin = (req: LoginParams) =>
  Axios.post('sessions', req).then(({ data }) => data);

export const getLogin = () => Axios.get('sessions').then(({ data }) => data);
