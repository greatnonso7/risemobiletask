import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';

const CompleteOnboarding = () => {
  return (
    <Screen>
      <View style={[styles.bodyContainer, styles.completeOnboardingContainer]}>
        <View>
          <Icon name="goodTick" />
        </View>
      </View>

      <Button title="Okay" />
    </Screen>
  );
};

export default CompleteOnboarding;
