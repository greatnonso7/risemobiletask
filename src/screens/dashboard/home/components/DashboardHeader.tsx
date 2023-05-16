import { hp, wp } from 'constants/layout';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import theme from 'theme';
import { UserData } from 'types';

interface DashboardHeaderProps {
  userData: UserData;
}

const DashboardHeader = ({ userData }: DashboardHeaderProps) => {
  return (
    <View style={styles.dashboardHeaderContainer}>
      <View>
        <Text style={styles.greetingText}>Good morning ☀</Text>
        <Text style={styles.usernameText}>{userData?.first_name}</Text>
      </View>
      <View style={styles.dashboardInfoContainer}>
        <TouchableOpacity activeOpacity={0.6} style={styles.bonusContainer}>
          <Text style={styles.bonusText}>Earn 3% bonus</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={theme.images.bell}
            resizeMode="contain"
            style={styles.bellIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardHeaderContainer: {
    paddingHorizontal: wp(20),
    marginTop: hp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetingText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.GREY_TEXT_100,
  },
  usernameText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(20),
    color: theme.colors.GREY_TEXT_100,
    lineHeight: hp(26),
  },
  dashboardInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bonusContainer: {
    backgroundColor: theme.colors.PRIMARY,
    paddingHorizontal: wp(14.5),
    paddingVertical: hp(7),
    borderRadius: hp(16),
  },
  bonusText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(12),
    color: theme.colors.WHITE,
  },
  bellIcon: {
    width: wp(42),
    height: hp(42),
  },
});

export default DashboardHeader;
