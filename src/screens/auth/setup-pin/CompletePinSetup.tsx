import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';
import { StackScreenProps } from '@react-navigation/stack';
import {
  AuthStackParamList,
  BottomTabParamsList,
  RootStackParamList,
} from 'types';

type ScreenProps = StackScreenProps<
  AuthStackParamList & BottomTabParamsList & RootStackParamList,
  'CompletePinSetup'
>;

const CompletePinSetup = ({ navigation: { replace } }: ScreenProps) => {
  const loginAccount = async () => {
    //@ts-ignore
    replace('DashboardStack', { screen: 'DashboardSection' });
  };
  return (
    <Screen>
      <View style={[styles.bodyContainer, styles.completeOnboardingContainer]}>
        <View style={styles.goodTickContainer}>
          <Icon name="goodTick" />
        </View>
        <Text style={styles.welcomeMainText}>You've created your PIN</Text>
        <Text style={styles.welcomeSubText}>
          Keep your account safe with your secret PIN. Do not share this PIN
          with anyone.
        </Text>
      </View>

      <Button title="Okay" onPress={() => loginAccount()} />
    </Screen>
  );
};

export default CompletePinSetup;
