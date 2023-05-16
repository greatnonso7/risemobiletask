import * as API from 'services/apis';
import { reducerActions as reducers } from './reducer';
import { showMessage } from 'react-native-flash-message';
import { LoginParams, RegisterParams, UserData } from 'types';

const IsState: Auth = {
  token: null,
  userData: {},
  isLoggedIn: false,
} as Auth;

interface Auth {
  userData: UserData;
  token: string | null;
  isLoggedIn: boolean;
}

export const Auth = {
  name: 'Auth',
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async setLogin(data: LoginParams) {
      dispatch.Auth.setError(false);
      try {
        const api: any = await API.setLogin(data);
        if (api) {
          dispatch.Auth.setState({
            token: api?.token,
            userData: api,
          });
          return true;
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async getLogin() {
      dispatch.Auth.setError(false);
      try {
        const api = await API.getLogin();
        if (api) {
          dispatch.Auth.setState({
            userData: api,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async accessDashboard() {
      dispatch.Auth.setState({
        isLoggedIn: true,
      });
    },
    async setRegister(data: RegisterParams) {
      dispatch.Auth.setError(false);
      try {
        const api: any = await API.setRegister(data);
        if (api) {
          dispatch.Auth.setState({
            userDate: api,
          });
          return true;
        }
      } catch (e) {
        this.handleError(e);
      }
    },

    async logout() {
      dispatch({ type: 'RESET_APP' });
    },

    async handleError(error: any) {
      dispatch.Auth.setError(true);
      if (error || error?.data?.errors || error?.data?.status === 'error') {
        var message =
          error?.message ||
          error?.data?.message ||
          'An error occured. Please try again.';

        return showMessage({
          message: 'Error',
          description: message,
          type: 'danger',
          duration: 2500,
          icon: 'danger',
        });
      }
    },
  }),
};
