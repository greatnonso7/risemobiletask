import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Header } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import theme from 'theme';
import { DashboardStackParamList } from 'types';
import { styles } from './style';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'ReviewPlan'>;

const ReviewPlan = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  return (
    <Screen>
      <Header
        tintColor={theme.colors.PRIMARY}
        hasBackButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Review"
      />
      <View style={[styles.bodyContainer, styles.reviewPlanContainer]}>
        <Text>Kate Ventures</Text>
        <Text>$10,930.75</Text>
        <Text>by 20 June 2021</Text>
      </View>
    </Screen>
  );
};

export default ReviewPlan;
