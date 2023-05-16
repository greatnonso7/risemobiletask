import Screen from 'components/Screen';
import { Header } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import theme from 'theme';
import { styles } from './style';
import KeyPad from 'components/KeyPad';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { RouteProp, useRoute } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

type ScreenProps = StackScreenProps<AuthStackParamList, 'ConfirmPin'>;

const ConfirmPin = ({ navigation: { navigate } }: ScreenProps) => {
  const { pin } =
    useRoute<RouteProp<AuthStackParamList, 'ConfirmPin'>>().params;
  const onCompletePin = async (completePin: string) => {
    if (completePin) {
      if (pin === completePin) {
        setTimeout(() => {
          navigate('CompletePinSetup');
        }, 500);
      } else {
        return showMessage({
          message: 'Error',
          description: 'Transaction pins do not match',
          duration: 2000,
          type: 'danger',
          icon: 'danger',
        });
      }
    }
  };
  return (
    <Screen>
      <Header hasBackButton tintColor={theme.colors.PRIMARY} />
      <View style={styles.bodyContainer}>
        <Text style={styles.headerText}>Confirm 6-digit PIN</Text>
        <Text style={styles.subHeaderText}>
          You'll use this PIN to sign in and confirm transactions
        </Text>
        <KeyPad onComplete={onCompletePin} />
      </View>
    </Screen>
  );
};

export default ConfirmPin;
