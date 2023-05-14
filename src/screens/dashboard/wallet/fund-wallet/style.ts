import { hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: hp(30),
    marginHorizontal: wp(20),
  },
  fundOptionContainer: {
    height: hp(73),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: hp(1),
    borderBottomColor: theme.colors.OFF_WHITE_600,
  },
  fundOptionBodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fundTextContainer: {
    marginLeft: wp(12),
  },
  fundMainText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.TEXT_BLACK,
  },
  fundSubText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(13),
    lineHeight: hp(19),
    color: theme.colors.SOFT_TEXT,
  },
  fundRateContainer: {
    alignItems: 'flex-end',
  },
  fundIconContainer: {
    width: 42,
    height: 42,
    backgroundColor: theme.colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  fundIcon: {
    width: wp(24),
    height: hp(24),
  },
});
