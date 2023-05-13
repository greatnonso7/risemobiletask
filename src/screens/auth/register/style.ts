import { hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: hp(40),
  },
  headerText: {
    fontFamily: theme.font.TomatoGroteskMedium,
    fontSize: hp(20),
    lineHeight: hp(26),
    color: theme.colors.TEXT_BLACK,
    paddingHorizontal: wp(20),
  },
  subHeaderText: {
    paddingTop: hp(11),
    paddingHorizontal: wp(20),
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(20),
    color: theme.colors.SOFT_TEXT,
  },
  formContainer: {
    marginTop: hp(40),
    marginBottom: hp(8),
  },
  buttonStyle: {
    marginTop: hp(7),
  },
  titleStyle: {
    color: theme.colors.PRIMARY,
    fontSize: hp(15),
  },
  signUpAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpMainText: {
    ...theme.typography.body.regularBold,
    fontFamily: theme.font.DMSansMedium,
    color: theme.colors.SOFT_TEXT,
    fontSize: hp(15),
    lineHeight: hp(19),
  },
  signUpSubText: {
    fontFamily: theme.font.DMSansMedium,
    color: theme.colors.PRIMARY,
    fontSize: hp(15),
    lineHeight: hp(19),
  },
  termsConditionContainer: {
    marginTop: hp(27),
    marginHorizontal: wp(20),
    width: wp(232),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  termsConditionText: {
    fontFamily: theme.font.DMSansRegular,
    textAlign: 'center',
    fontSize: hp(12),
    color: theme.colors.DARK_TEXT,
  },
  textColor: {
    color: theme.colors.PRIMARY,
  },
  completeOnboardingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(90),
  },
  goodTickContainer: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: theme.colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeMainText: {
    fontFamily: theme.font.TomatoGroteskMedium,
    fontSize: hp(20),
    width: wp(197),
    paddingTop: hp(36),
    textAlign: 'center',
    color: theme.colors.TEXT_BLACK,
  },
  welcomeSubText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(14),
    width: wp(197),
    paddingTop: hp(4),
    textAlign: 'center',
    color: theme.colors.SOFT_TEXT,
  },
});
