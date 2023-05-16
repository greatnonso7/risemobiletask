import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './utils';
import AuthNavigation from './auth';
import { RootStackParamList } from 'types';
import DashboardNavigation from './dashboard';
import { RootState } from 'redux/store';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state.Auth.isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? 'DashboardStack' : 'Auth'}
        screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen component={DashboardNavigation} name="DashboardStack" />
        ) : (
          <Stack.Screen component={AuthNavigation} name="Auth" />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const RootNavigation = AppNavigation;
