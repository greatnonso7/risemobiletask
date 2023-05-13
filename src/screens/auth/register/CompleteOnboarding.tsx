import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';

const CompleteOnboarding = () => {
  return (
    <Screen>
      <View style={[styles.bodyContainer, styles.completeOnboardingContainer]}>
        <View style={styles.goodTickContainer}>
          <Icon name="goodTick" />
        </View>
        <Text style={styles.welcomeMainText}>
          You just created your Rise account
        </Text>
        <Text style={styles.welcomeSubText}>
          Welcome to Rise, let's take you home
        </Text>
      </View>

      <Button title="Okay" />
    </Screen>
  );
};

export default CompleteOnboarding;
