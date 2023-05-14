import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { DashboardStackParamList } from 'types';
import BottomTabBar from './bottom-tab';
import CreatePlan from 'screens/dashboard/plans/create-plan';
import PlanGoal from 'screens/dashboard/plans/create-plan/PlanGoal';
import PlanAmount from 'screens/dashboard/plans/create-plan/PlanAmount';
import PlanDate from 'screens/dashboard/plans/create-plan/PlanDate';
import ReviewPlan from 'screens/dashboard/plans/create-plan/ReviewPlan';

const Stack = createStackNavigator<DashboardStackParamList>();

const DashboardNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={'DashboardSection'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen component={BottomTabBar} name="DashboardSection" />
      <Stack.Screen component={CreatePlan} name="CreatePlan" />
      <Stack.Screen component={PlanGoal} name="PlanGoal" />
      <Stack.Screen component={PlanAmount} name="PlanAmount" />
      <Stack.Screen component={PlanDate} name="PlanDate" />
      <Stack.Screen component={ReviewPlan} name="ReviewPlan" />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;
