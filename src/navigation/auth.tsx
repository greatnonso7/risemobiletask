import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from 'screens/auth/onboarding';
import { AuthStackParamList } from 'types';
import Login from 'screens/auth/login';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Onboarding'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Onboarding} name="Onboarding" />
      <Stack.Screen component={Login} name="Login" />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
