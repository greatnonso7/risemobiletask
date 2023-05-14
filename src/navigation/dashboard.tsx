import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardStackParamList } from 'types';
import BottomTabBar from './bottom-tab';

const Stack = createStackNavigator<DashboardStackParamList>();

const DashboardNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'DashboardSection'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={BottomTabBar} name="DashboardSection" />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;
