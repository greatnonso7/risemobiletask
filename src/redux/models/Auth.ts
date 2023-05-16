import * as API from 'services/apis';
import { reducerActions as reducers } from './reducer';
import { showMessage } from 'react-native-flash-message';
import { LoginParams, RegisterParams } from 'types';

const IsState = {
  token: null,
  userData: null,
  isLoggedIn: false,
};

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
            token: api?.data?.token,
            userData: api?.data,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async getLogin() {
      dispatch.Auth.setError(false);
      try {
        const api: any = await API.getLogin();
        if (api) {
          dispatch.Auth.setState({
            userData: api?.data,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async setRegister(data: RegisterParams) {
      dispatch.Auth.setError(false);
      try {
        const api: any = await API.setRegister(data);
        if (api) {
          dispatch.Auth.setState({
            userDate: api?.data,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },

    async handleError(error: any) {
      dispatch.Auth.setError(true);
      if (error || error?.data?.errors || error?.data?.status === 'error') {
        var message =
          error?.message ||
          error?.data?.message ||
          'An error occured. Please try again.';

        return showMessage({
          message,
          type: 'danger',
          duration: 2500,
        });
      }
    },
  }),
};
