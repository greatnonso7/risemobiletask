import * as API from 'services/apis';
import { reducerActions as reducers } from './reducer';
import { showMessage } from 'react-native-flash-message';
import { QuoteData, RateData } from 'types';

const IsState: UserData = {
  quotes: null,
  rates: null,
} as UserData;

interface UserData {
  rates: RateData | null;
  quotes: QuoteData | null;
}

export const User = {
  name: 'User',
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async getBanks() {
      dispatch.User.setError(false);
      try {
        const api: any = await API.getBanks();
        if (api) {
          dispatch.User.setState({
            banks: api?.data,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async getQuotes() {
      dispatch.User.setError(false);
      try {
        const api = await API.getQuotes();
        if (api) {
          dispatch.User.setState({
            quotes: api,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async getRates() {
      dispatch.User.setError(false);
      try {
        const api: any = await API.getRates();
        if (api) {
          dispatch.User.setState({
            rates: api,
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
