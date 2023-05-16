import * as API from 'services/apis';
import { reducerActions as reducers } from './reducer';
import { showMessage } from 'react-native-flash-message';
import { CreatePlanParams } from 'types';

const IsState = {
  plans: null,
};

export const Plan = {
  name: 'Plan',
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async getPlans() {
      dispatch.Auth.setError(false);
      try {
        const api: any = await API.getPlans();
        if (api) {
          dispatch.Plan.setState({
            plans: api?.data,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async createPlan(data: CreatePlanParams) {
      dispatch.Auth.setError(false);
      try {
        const api: any = await API.createPlan(data);
        if (api) {
          const plan_id = api.data?.plan_id;
          dispatch.Plan.getPlans();
          return plan_id;
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
