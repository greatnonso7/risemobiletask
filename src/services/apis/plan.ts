import Axios from 'services/Axios';
import { CreatePlanParams } from 'types';

export const getPlans = () => Axios.get('plans').then(({ data }) => data);

export const getPlanProjection = (req: any) =>
  Axios.get(
    `plans/projection?monthly_investment=${req?.queryKey[0]}&target_amount=${req?.queryKey[0]}`,
    req,
  ).then(({ data }) => data);

export const getPlan = (req: any) => {
  console.log(req?.queryKey, 'plans');
  return Axios.get(`plans/${req?.queryKey[0]}`, req).then(({ data }) => data);
};

export const createPlan = (req: CreatePlanParams) =>
  Axios.post('plans', req).then(({ data }) => data);
