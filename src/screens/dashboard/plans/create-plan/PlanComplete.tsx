import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';
import { DashboardStackParamList, UserData } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { useQueryClient } from 'react-query';
import { RouteProp, useRoute } from '@react-navigation/native';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanComplete'>;

const PlanComplete = ({ navigation: { navigate } }: ScreenProps) => {
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData<UserData>('user');
  const { plan_id } =
    useRoute<RouteProp<DashboardStackParamList, 'PlanComplete'>>().params;

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
