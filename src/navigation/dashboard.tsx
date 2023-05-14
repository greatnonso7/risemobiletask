import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardStackParamList } from 'types';
import BottomTabBar from './bottom-tab';

const Stack = createStackNavigator<DashboardStackParamList>();

const DashboardNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={BottomTabBar} name="Dashboard" />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;
