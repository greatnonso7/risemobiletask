import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Header } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import { DashboardStackParamList } from 'types';
import { styles } from './style';
import theme from 'theme';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'FundWallet'>;

const ChoosePlan = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  return (
    <Screen>
      <Header
        hasBackButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Choose from plans"
        tintColor={theme.colors.PRIMARY}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.mainText}>Tap on any of the plans to select</Text>
      </View>
    </Screen>
  );
};

export default ChoosePlan;
