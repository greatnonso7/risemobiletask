import { hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.WHITE,
    borderTopLeftRadius: hp(15),
    borderTopRightRadius: hp(15),
    paddingTop: hp(13),
    paddingBottom: hp(80),
  },
  headerTitleStyle: {
    fontFamily: theme.font.TomatoGroteskMedium,
    fontSize: hp(20),
    color: theme.colors.TEXT_BLACK,
  },
  bodyContainer: {
    marginHorizontal: wp(20.5),
    borderTopWidth: hp(1),
    marginTop: hp(24),
    borderTopColor: theme.colors.OFF_WHITE,
  },
  rateInfoContainer: {
    height: hp(76),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: theme.colors.OFF_WHITE,
    borderBottomWidth: 1,
  },
  rateMainText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.TEXT_BLACK,
  },
  rateSubText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(12),
    lineHeight: hp(18),
    color: theme.colors.SOFT_TEXT,
  },
  infoText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(10.8),
    paddingVertical: hp(24),
    lineHeight: hp(16),
    color: theme.colors.OFF_WHITE_700,
    textAlign: 'center',
  },
  buttonTitleStyle: {
    fontSize: hp(15),
    fontFamily: theme.font.DMSansBold,
  },
});
