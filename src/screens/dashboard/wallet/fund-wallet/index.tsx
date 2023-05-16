import Screen from 'components/Screen';
import { fundOptions } from 'data';
import { Header } from 'design-system';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import AboutRate from './modals/AboutRate';
import { DashboardStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'FundWallet'>;

const FundWallet = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  const [showRateModal, setShowRateModal] = useState(false);

  const ratesData = useSelector((state: RootState) => state.User.rates);

  const onSelectFundingOption = async () => {
    setShowRateModal(false);
    setTimeout(() => {
      navigate('ChoosePlan');
    }, 500);
  };

  return (
    <Screen>
      <Header
        hasCloseButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Fund Wallet"
      />
      <View style={styles.bodyContainer}>
        {fundOptions.map(option => {
          return (
            <TouchableOpacity
              activeOpacity={0.6}
              key={option.id}
              onPress={() => setShowRateModal(true)}
              style={styles.fundOptionContainer}>
              <View style={styles.fundOptionBodyContainer}>
                <View style={styles.fundIconContainer}>
                  <Image source={option.icon} style={styles.fundIcon} />
                </View>
                <View style={styles.fundTextContainer}>
                  <Text style={styles.fundMainText}>{option.title}</Text>
                  <Text style={styles.fundSubText}>{option.timeline}</Text>
                </View>
              </View>
              <View style={styles.fundRateContainer}>
                <Text style={styles.fundSubText}>
                  Rate - $1 = ₦{ratesData?.buy_rate}
                </Text>
                <Text style={styles.fundSubText}>{option.fee}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <AboutRate
        isVisible={showRateModal}
        onClose={() => setShowRateModal(false)}
        onComplete={onSelectFundingOption}
      />
    </Screen>
  );
};

export default FundWallet;
