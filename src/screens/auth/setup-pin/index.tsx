import Screen from 'components/Screen';
import { Header } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import theme from 'theme';
import { styles } from './style';
import KeyPad from 'components/KeyPad';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';

type ScreenProps = StackScreenProps<AuthStackParamList, 'SetupPin'>;

const SetupPin = ({ navigation: { navigate } }: ScreenProps) => {
  const onCompletePin = async (completePin: string) => {
    setTimeout(() => {
      navigate('ConfirmPin', { pin: completePin });
    }, 500);
  };
  return (
    <Screen>
      <Header hasBackButton tintColor={theme.colors.PRIMARY} />
      <View style={styles.bodyContainer}>
        <Text style={styles.headerText}>Create a 6-digit PIN</Text>
        <Text style={styles.subHeaderText}>
          You'll use this PIN to sign in and confirm transactions
        </Text>
        <KeyPad onComplete={onCompletePin} />
      </View>
    </Screen>
  );
};

export default SetupPin;
