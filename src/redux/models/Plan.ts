import * as API from 'services/apis';
import { reducerActions as reducers } from './reducer';
import { showMessage } from 'react-native-flash-message';
import { CreatePlanParams, PlanData } from 'types';

const IsState: Plan = {
  plans: null,
  plan: {},
} as Plan;

interface Plan {
  plans: PlanDataResponse | null;
  plan: PlanData;
}

interface PlanDataResponse {
  item_count: number;
  items: PlanData[];
}

export const Plan = {
  name: 'Plan',
  state: IsState,
  reducers,
  effects: (dispatch: any) => ({
    async getPlans() {
      dispatch.Plan.setError(false);
      try {
        const api = await API.getPlans();
        if (api) {
          dispatch.Plan.setState({
            plans: api,
          });
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async createPlan(data: CreatePlanParams) {
      dispatch.Plan.setError(false);
      try {
        const api = await API.createPlan(data);
        if (api) {
          const plan_id = api.data?.plan_id;
          dispatch.Plan.getPlans();
          return plan_id;
        }
      } catch (e) {
        this.handleError(e);
      }
    },
    async getPlan(data: string) {
      dispatch.Plan.setError(false);
      try {
        const api = await API.getPlan(data);
        if (api) {
          dispatch.Plan.setState({
            plan: api,
          });
        }
      } catch (error) {
        this.handleError(error);
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
