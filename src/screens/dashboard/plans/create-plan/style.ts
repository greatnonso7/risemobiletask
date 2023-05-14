import { hp, wp } from 'constants/layout';
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
});
