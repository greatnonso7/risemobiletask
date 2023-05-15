import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
  DashboardStack: NavigatorScreenParams<DashboardStackParamList>;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  SetupPin: undefined;
  CompleteRegister: { email: string; password: string };
  CompleteOnboarding: undefined;
  ConfirmPin: { pin: string };
  CompletePinSetup: undefined;
};

export type DashboardStackParamList = {
  DashboardSection: BottomTabParamsList;
  CreatePlan: undefined;
  PlanGoal: undefined;
  PlanAmount: { plan_name: string };
  PlanDate: { plan_name: string; target_amount: string };
  ReviewPlan: {
    plan_name: string;
    target_amount: string;
    maturity_date: any;
    total_months: any;
  };
  PlanComplete: { plan_id: string };
  ViewPlan: undefined;
  FundWallet: undefined;
  ChoosePlan: undefined;
};

export type BottomTabParamsList = {
  Home: undefined;
  Plans: undefined;
  Wallet: undefined;
  Feeds: undefined;
  Account: undefined;
};

export type LoginParams = {
  email_address: string;
  password: string;
};

export type RegisterParams = {
  first_name: string;
  last_name: string;
  email_address?: string;
  password?: string;
  date_of_birth: any;
  username?: string;
  phone_number?: string;
};

export type CreatePlanParams = {
  plan_name: string;
  target_amount: number;
  maturity_date: Date;
};

export type UserData = {
  email_address: string;
  first_name: string;
  last_name: string;
  token: string;
  total_balance: number;
  total_returns: number | null;
  username: string;
};

export type RateData = {
  sell_rate: number;
  buy_rate: number;
};
