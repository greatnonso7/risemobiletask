import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './utils';
import AuthNavigation from './auth';
import { RootStackParamList } from 'types';
import DashboardNavigation from './dashboard';
import { useToken } from 'hooks/useToken';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const { token } = useToken();
  // const userData = queryClient.getQueryData<any>('user');
  console.log(token);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={token ? 'DashboardStack' : 'Auth'}
        screenOptions={{ headerShown: false }}>
        <Stack.Screen component={AuthNavigation} name="Auth" />
        <Stack.Screen component={DashboardNavigation} name="DashboardStack" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const RootNavigation = AppNavigation;
