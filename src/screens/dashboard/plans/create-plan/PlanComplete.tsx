import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';

const PlanComplete = () => {
  return (
    <Screen>
      <View style={[styles.bodyContainer, styles.completeOnboardingContainer]}>
        <View style={styles.goodTickContainer}>
          <Icon name="goodTick" />
        </View>
        <Text style={styles.welcomeMainText}>You just created your plan.</Text>
        <Text style={styles.welcomeSubText}>Well done, Deborah</Text>
      </View>

      <Button title="View plan" />
    </Screen>
  );
};

export default PlanComplete;
