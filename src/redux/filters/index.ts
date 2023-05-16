import { createFilter } from 'redux-persist-transform-filter';

const AuthFilter = createFilter('Auth', ['isLoggedIn', 'userData', 'token']);

export const AllFilters = [AuthFilter];
