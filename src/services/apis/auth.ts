import Axios from 'services/Axios';
import { LoginParams, RegisterParams } from 'types';

export const setLogin = (req: LoginParams) =>
  Axios.post('sessions', req).then(({ data }) => data);

export const getLogin = () => Axios.get('sessions').then(({ data }) => data);

export const setRegister = (req: RegisterParams) =>
  Axios.post('users', req).then(({ data }) => data);
