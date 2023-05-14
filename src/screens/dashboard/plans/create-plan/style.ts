import { deviceWidth, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: hp(20),
    marginHorizontal: wp(20),
  },
  reviewPlanContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeOnboardingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: hp(90),
  },
  welcomeMainText: {
    fontFamily: theme.font.TomatoGroteskMedium,
    fontSize: hp(20),
    width: wp(187),
    paddingTop: hp(36),
    textAlign: 'center',
    color: theme.colors.TEXT_BLACK,
  },
  welcomeSubText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(14),
    width: wp(197),
    paddingTop: hp(10),
    textAlign: 'center',
    color: theme.colors.SOFT_TEXT,
  },
  goodTickContainer: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: theme.colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  investorText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(12),
    lineHeight: hp(15),
    color: theme.colors.SOFT_TEXT,
    paddingBottom: hp(4),
  },
  amountText: {
    fontSize: hp(24),
    fontFamily: theme.font.TomatoGroteskBold,
    paddingBottom: hp(4),
    color: theme.colors.BLACK,
    lineHeight: hp(26),
  },
  durationText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    color: theme.colors.GREY_TEXT_100,
  },
  investmentReturnContainer: {
    marginHorizontal: wp(20),
    marginTop: hp(22),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  investmentReturnSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  returnText: {
    paddingLeft: wp(6),
    fontFamily: theme.font.DMSansRegular,
    color: theme.colors.TEXT_BLACK,
    fontSize: hp(12),
    lineHeight: hp(15),
  },
  pointDot: {
    width: 9,
    height: 9,
    borderRadius: 100,
    backgroundColor: theme.colors.PRIMARY,
  },
  mainText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.SOFT_TEXT,
  },
  alignText: {
    textAlign: 'center',
  },
  progressBarContainer: {
    marginTop: hp(10),
    borderRadius: hp(10),
  },
  investIcon: {
    marginTop: hp(60),
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  formInputContainer: {
    marginTop: hp(60),
  },
  inputText: {
    paddingHorizontal: wp(20),
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(17),
    color: theme.colors.TEXT_BLACK,
    lineHeight: hp(22),
    paddingBottom: hp(13),
  },
  buttonStyle: {
    marginTop: hp(26),
  },
  titleStyle: {
    fontSize: hp(15),
    fontFamily: theme.font.DMSansBold,
  },
  investOptionsContainer: {
    marginTop: hp(53),
  },
  optionItemContainer: {
    marginBottom: hp(24),
    flexDirection: 'row',
  },
  optionIconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.OFF_WHITE,
    borderRadius: 100,
  },
  optionTextContainer: {
    width: wp(269),
    marginLeft: wp(20),
  },
  optionHeaderText: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(15),
    lineHeight: hp(19),
    color: theme.colors.TEXT_BLACK,
  },
  optionBodyText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(13),
    lineHeight: hp(19),
    color: theme.colors.SOFT_TEXT,
  },
  optionIcon: {
    width: 24,
    height: 24,
  },
  graphImage: {
    width: deviceWidth,
    height: hp(218),
    marginTop: hp(30),
  },
  estimatedRevenueContainer: {
    marginTop: hp(30),
    marginHorizontal: wp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.OFF_WHITE_200,
    paddingBottom: hp(20),
  },
  estimatedRevenueText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.SOFT_TEXT,
  },
  estimatedRevenueAmount: {
    fontFamily: theme.font.TomatoGroteskRegular,
    fontSize: hp(14),
    color: theme.colors.GREY_TEXT_100,
  },
  riskReturnContainer: {
    marginHorizontal: wp(20),
    marginTop: hp(30),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: theme.colors.OFF_WHITE_500,
    padding: hp(12),
    borderRadius: hp(8),
  },
  riskReturnText: {
    width: wp(263),
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    paddingLeft: wp(19),
    lineHeight: hp(22),
    color: theme.colors.SOFT_TEXT,
  },
  settingsText: {
    textAlign: 'center',
    paddingTop: hp(28),
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(12),
    paddingHorizontal: wp(20),
    color: theme.colors.SOFT_TEXT,
  },
  agreeButtonStyle: {
    marginBottom: hp(10),
    marginTop: hp(30),
  },
  cancelButtonStyle: {
    backgroundColor: theme.colors.OFF_WHITE,
  },
  cancelTextStyle: {
    color: theme.colors.PRIMARY,
  },
});
