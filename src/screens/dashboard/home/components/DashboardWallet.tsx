/* eslint-disable react-native/no-inline-styles */
import { hp, wp } from 'constants/layout';
import { walletDataInfo } from 'data';
import { Icon } from 'design-system';
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import theme from 'theme';

const DashboardWallet = () => {
  const [showAmount, setShowAmount] = useState(true);

  const scrollRef = useRef<ScrollView>(null);
  const [sliderState, setSliderState] = useState<any>({ currentPage: 0 });

  const setSliderPage = (event: any) => {
    const { currentPage } = sliderState;
    const { x } = event.nativeEvent.contentOffset;
    const indexOfNextScreen = Math.round(x / wp(335));
    if (indexOfNextScreen !== currentPage) {
      setSliderState({
        ...sliderState,
        currentPage: indexOfNextScreen,
      });
    }
  };

  const { currentPage: pageIndex } = sliderState;

  return (
    <LinearGradient
      colors={['rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0) 103.15 %)']}>
      <View style={styles.dashboardWalletContainer}>
        <ScrollView
          horizontal
          style={styles.scrollViewContainer}
          ref={scrollRef}
          decelerationRate={'fast'}
          snapToAlignment="center"
          snapToInterval={wp(335)}
          scrollEventThrottle={16}
          pagingEnabled={true}
          onScroll={event => {
            setSliderPage(event);
          }}
          showsHorizontalScrollIndicator={false}>
          {walletDataInfo.map(wallet => {
            return (
              <View key={wallet.id} style={styles.contentContainer}>
                <View style={styles.contentContainerHeader}>
                  <Text style={styles.balanceText}>{wallet.title}</Text>
                  <TouchableOpacity
                    style={styles.eyeIconContainer}
                    onPress={() => setShowAmount(!showAmount)}>
                    <Icon name={showAmount ? 'eyeOpen' : 'eyeClose'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.balanceContainer}>
                  {showAmount ? (
                    <Text style={styles.balanceAmountText}>
                      {wallet.amount}
                    </Text>
                  ) : (
                    <Text style={styles.balanceAmountText}>*****</Text>
                  )}
                </View>
                {wallet.hasGain ? (
                  <View style={styles.gainSectionContainer}>
                    <Text style={styles.gainText}>Total Gains</Text>
                    <Image
                      source={theme.images['gain-icon']}
                      resizeMode="contain"
                      style={styles.gainIcon}
                    />
                    <Text style={styles.gainPercentage}>{wallet.gain}</Text>
                    <Icon name="arrowRight" />
                  </View>
                ) : (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={[
                      styles.gainSectionContainer,
                      { justifyContent: 'center' },
                    ]}>
                    <Text style={[styles.gainText, { paddingRight: wp(8) }]}>
                      Open Wallet
                    </Text>
                    <Icon name="arrowRight" />
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.paginationWrapper}>
          {walletDataInfo.map((key, index) => {
            return (
              <View
                style={[
                  styles.paginationDots,
                  pageIndex === index && styles.activePagination,
                ]}
                key={index}
              />
            );
          })}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: hp(120),
  },
  dashboardWalletContainer: {
    borderWidth: 1,
    marginTop: hp(10),
    marginHorizontal: wp(20),
    borderRadius: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(20),
    backgroundColor: theme.colors.WHITE,
    borderColor: theme.colors.WHITE,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(335),
  },
  contentContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  balanceText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    color: theme.colors.SOFT_TEXT,
  },
  eyeIconContainer: {
    marginHorizontal: hp(10),
  },
  balanceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(20),
    borderBottomWidth: 1,
    width: wp(197),
    paddingBottom: hp(12),
    borderBottomColor: theme.colors.OFF_WHITE,
    // borderWidth: 1,
    marginHorizontal: wp(14),
  },
  balanceAmountText: {
    fontFamily: theme.font.TomatoGroteskMedium,
    fontSize: hp(32),
    lineHeight: hp(38),
    color: theme.colors.GREY_TEXT_100,
  },
  gainSectionContainer: {
    marginTop: hp(12),
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(153),
    justifyContent: 'space-evenly',
  },
  gainText: {
    fontFamily: theme.font.DMSansRegular,
    color: theme.colors.SOFT_TEXT,
    fontSize: hp(15),
  },
  arrowRightContainer: {
    right: wp(15),
  },
  gainPercentage: {
    ...theme.typography.body.smallText,
    fontSize: hp(16),
    color: theme.colors.GREEN,
  },
  gainProgressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gainIcon: {
    width: wp(10),
    height: hp(10),
  },
  paginationWrapper: {
    zIndex: 10000,
    marginTop: hp(17),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  paginationDots: {
    width: wp(8),
    height: hp(8),
    borderRadius: 100,
    marginLeft: wp(12),
    backgroundColor: theme.colors.OFF_WHITE_200,
  },
  activePagination: {
    width: wp(12),
    backgroundColor: theme.colors.PRIMARY,
  },
});

export default DashboardWallet;
