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
    paddingTop: hp(36),
    textAlign: 'center',
    color: theme.colors.TEXT_BLACK,
  },
  welcomeSubText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(14),
    width: wp(224),
    paddingTop: hp(4),
    textAlign: 'center',
    color: theme.colors.SOFT_TEXT,
  },
});
