import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';
import { DashboardStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanComplete'>;

const PlanComplete = ({ navigation: { navigate } }: ScreenProps) => {
  const userData = useSelector((state: RootState) => state.Auth.userData);
  const { plan_id } =
    useRoute<RouteProp<DashboardStackParamList, 'PlanComplete'>>().params;
  console.log(plan_id);

  return (
    <Screen>
      <View style={[styles.bodyContainer, styles.completeOnboardingContainer]}>
        <View style={styles.goodTickContainer}>
          <Icon name="goodTick" />
        </View>
        <Text style={styles.welcomeMainText}>You just created your plan.</Text>
        <Text style={styles.welcomeSubText}>
          Well done, {userData?.first_name}
        </Text>
      </View>

      <Button
        title="View plan"
        onPress={() => navigate('ViewPlan', { plan_id })}
      />
    </Screen>
  );
};

export default PlanComplete;
