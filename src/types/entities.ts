import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  Auth: NavigatorScreenParams<AuthStackParamList>;
};

export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  CompleteRegister: { email: string; password: string };
  CompleteOnboarding: undefined;
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
  date_of_birth: Date;
  username?: string;
  phone_number?: string;
};
