import Screen from 'components/Screen';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { Button, Icon } from 'design-system';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';

type ScreenProps = StackScreenProps<AuthStackParamList, 'CompleteOnboarding'>;

const CompleteOnboarding = ({ navigation: { navigate } }: ScreenProps) => {
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

      <Button title="Okay" onPress={() => navigate('SetupPin')} />
    </Screen>
  );
};

export default CompleteOnboarding;
