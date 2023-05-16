import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';
import { useDispatch } from 'react-redux';

const CompletePinSetup = () => {
  const {
    Auth: { accessDashboard },
  } = useDispatch();
  const loginAccount = async () => {
    accessDashboard();
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
