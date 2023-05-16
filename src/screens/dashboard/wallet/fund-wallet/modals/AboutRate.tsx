import { BaseModal, Button, Header } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import * as API from 'services/apis';
import { useQuery } from 'react-query';

interface AboutRateProps {
  isVisible: boolean;
  onClose: () => void;
  onComplete: () => void;
}

const AboutRate = ({ isVisible, onClose, onComplete }: AboutRateProps) => {
  const { data: userRates } = useQuery('rates', API.getRates);

  return (
    <BaseModal visible={isVisible} onClose={() => onClose()} hideButton>
      <View style={styles.container}>
        <Header
          hasCloseButton
          onPressLeftIcon={onClose}
          headerTitle="About Exchange Rates"
          headerTitleStyle={styles.headerTitleStyle}
        />
        <View style={styles.bodyContainer}>
          <View style={styles.rateInfoContainer}>
            <View>
              <Text style={styles.rateMainText}>USD Buy Rate</Text>
              <Text style={styles.rateSubText}>
                We buy US dollars at this rate
              </Text>
            </View>
            <View>
              <Text style={styles.rateMainText}>₦{userRates?.buy_rate}</Text>
            </View>
          </View>
          <View style={styles.rateInfoContainer}>
            <View>
              <Text style={styles.rateMainText}>USD Buy Rate</Text>
              <Text style={styles.rateSubText}>
                The current value of your investments in Naira
              </Text>
            </View>
            <View>
              <Text style={styles.rateMainText}>₦{userRates?.sell_rate}</Text>
            </View>
          </View>

          <Text style={styles.infoText}>
            These exchange rates are provided by independent third parties who
            handle fund conversions at the prevailing parallel rates and are not
            set, or controlled or by Rise. They are subject to change based on
            market trends.
          </Text>

          <Button
            isNotBottom
            onPress={onComplete}
            title="Accept & Continue"
            titleStyle={styles.buttonTitleStyle}
          />
        </View>
      </View>
    </BaseModal>
  );
};

export default AboutRate;
