import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';
import { DashboardStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanComplete'>;

const PlanComplete = ({ navigation: { navigate } }: ScreenProps) => {
  return (
    <Screen>
      <View style={[styles.bodyContainer, styles.completeOnboardingContainer]}>
        <View style={styles.goodTickContainer}>
          <Icon name="goodTick" />
        </View>
        <Text style={styles.welcomeMainText}>You just created your plan.</Text>
        <Text style={styles.welcomeSubText}>Well done, Deborah</Text>
      </View>

      <Button title="View plan" onPress={() => navigate('ViewPlan')} />
    </Screen>
  );
};

export default PlanComplete;
