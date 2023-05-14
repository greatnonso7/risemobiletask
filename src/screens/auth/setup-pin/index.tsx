import Screen from 'components/Screen';
import { Header } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import theme from 'theme';
import { styles } from './style';
import KeyPad from 'components/KeyPad';

const SetupPin = () => {
  return (
    <Screen>
      <Header hasBackButton tintColor={theme.colors.PRIMARY} />
      <View style={styles.bodyContainer}>
        <Text style={styles.headerText}>Create a 6-digit PIN</Text>
        <Text style={styles.subHeaderText}>
          You’ll use this PIN to sign in and confirm transactions
        </Text>

        <KeyPad />
      </View>
    </Screen>
  );
};

export default SetupPin;
