import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from 'screens/auth/onboarding';
import { AuthStackParamList } from 'types';
import Login from 'screens/auth/login';
import Register from 'screens/auth/register';
import CompleteRegister from 'screens/auth/register/CompleteRegister';
import CompleteOnboarding from 'screens/auth/register/CompleteOnboarding';
import SetupPin from 'screens/auth/setup-pin';
import ConfirmPin from 'screens/auth/setup-pin/ConfimPin';
import CompletePinSetup from 'screens/auth/setup-pin/CompletePinSetup';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Onboarding'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Onboarding} name="Onboarding" />
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      <Stack.Screen component={CompleteRegister} name="CompleteRegister" />
      <Stack.Screen component={CompleteOnboarding} name="CompleteOnboarding" />
      <Stack.Screen component={SetupPin} name="SetupPin" />
      <Stack.Screen component={ConfirmPin} name="ConfirmPin" />
      <Stack.Screen component={CompletePinSetup} name="CompletePinSetup" />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
