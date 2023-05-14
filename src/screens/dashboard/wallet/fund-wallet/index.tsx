import Screen from 'components/Screen';
import { fundOptions } from 'data';
import { Header } from 'design-system';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import AboutRate from './modals/AboutRate';

const FundWallet = () => {
  const [showRateModal, setShowRateModal] = useState(false);

  return (
    <Screen>
      <Header hasCloseButton headerTitle="Fund Wallet" />
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
                <Text style={styles.fundSubText}>{option.rate}</Text>
                <Text style={styles.fundSubText}>{option.fee}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <AboutRate
        isVisible={showRateModal}
        onClose={() => setShowRateModal(false)}
      />
    </Screen>
  );
};

export default FundWallet;
