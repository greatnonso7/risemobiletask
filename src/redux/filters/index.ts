import { createFilter } from 'redux-persist-transform-filter';

const AuthFilter = createFilter('Auth', [
  'isLoggedIn',
  'access_token',
  'dashboardData',
  'userProfile',
]);

export const AllFilters = [AuthFilter];
