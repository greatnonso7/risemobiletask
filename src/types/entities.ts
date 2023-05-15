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
  PlanAmount: undefined;
  PlanDate: undefined;
  ReviewPlan: undefined;
  PlanComplete: undefined;
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
