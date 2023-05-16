import { deviceWidth, hp, paddingTopiOS, wp } from 'constants/layout';
import { isIos } from 'constants/platform';
import { StatusBar, StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingTop: isIos ? paddingTopiOS + hp(20) : StatusBar?.currentHeight,
  },
  headerImage: {
    width: deviceWidth,
    paddingTop: hp(10),
    height: hp(120),
    justifyContent: 'center',
  },
  leftIconStyle: {
    backgroundColor: theme.colors.BLACK_100,
  },
  scrollContainer: {
    paddingBottom: hp(50),
  },
  bodyContainer: {
    backgroundColor: theme.colors.WHITE,
    paddingTop: hp(30),
    paddingBottom: hp(100),
  },
  planBodyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  topSpacing: {
    marginTop: hp(11),
  },
  planText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.SOFT_TEXT,
    paddingBottom: hp(2),
  },
  headerBodyContainer: {
    bottom: hp(20),
  },
  amountText: {
    fontFamily: theme.font.TomatoGroteskBold,
    fontSize: hp(24),
    lineHeight: hp(26),
    color: theme.colors.BLACK,
  },
  nairaValueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nairaValueText: {
    fontFamily: theme.font.DMSansRegular,
    paddingRight: wp(5),
    fontSize: hp(15),
    lineHeight: hp(20),
    color: theme.colors.SOFT_TEXT,
  },
  gainMainText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.DARK_TEXT,
  },
  gainRate: {
    paddingTop: hp(3),
    fontFamily: theme.font.TomatoGroteskRegular,
    fontSize: hp(16),
    lineHeight: hp(19),
    color: theme.colors.GREEN,
  },
  planProgressContainer: {
    marginHorizontal: wp(20),
    marginTop: hp(21),
  },
  progressTextContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  planProgressText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.SOFT_TEXT,
  },
  graphImage: {
    marginTop: hp(23),
    width: deviceWidth,
  },
  buttonStyle: {
    marginTop: hp(24),
    backgroundColor: theme.colors.OFF_WHITE,
    borderColor: theme.colors.OFF_WHITE_200,
  },
  progressBarContainer: {
    marginTop: hp(10),
    borderRadius: hp(10),
  },
  resultInfoContainer: {
    marginTop: hp(30),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: hp(5),
    paddingHorizontal: wp(15),
    borderRadius: hp(20),
    backgroundColor: theme.colors.OFF_WHITE,
  },
  resultText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(13),
    lineHeight: hp(19),
    color: theme.colors.SOFT_TEXT,
  },
  titleStyle: {
    color: theme.colors.PRIMARY,
  },
  planInfoContainer: {
    marginHorizontal: wp(20),
  },
  planItemInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    paddingBottom: hp(10),
    marginBottom: hp(10),
    borderBottomColor: theme.colors.OFF_WHITE,
  },
  mainPlanText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.SOFT_TEXT,
  },
  valuePlanText: {
    fontFamily: theme.font.TomatoGroteskRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.TEXT_BLACK,
  },
  rightArrow: {
    width: wp(16),
    height: hp(16),
  },
  createPlanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  transactionText: {
    fontFamily: theme.font.TomatoGroteskRegular,
    fontSize: hp(18),
    color: theme.colors.BLACK,
    lineHeight: hp(22),
  },
  viewMorePlansContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMoreText: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(14),
    lineHeight: hp(18),
    color: theme.colors.PRIMARY,
    paddingRight: wp(5),
  },
  transactionListContainer: {
    marginTop: hp(20),
  },
  transactionListItem: {
    marginBottom: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transactionIcon: {
    width: wp(36),
    height: hp(36),
  },
  transactionInfoBodyContainer: {
    flexDirection: 'row',
  },
  transactionTitleContainer: {
    width: wp(197),
    marginLeft: wp(11),
  },
  transactionListTitle: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    color: theme.colors.GREY_TEXT_100,
    lineHeight: hp(22),
  },
  transactionDateText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(13),
    lineHeight: hp(19),
    color: theme.colors.SOFT_TEXT,
  },
  transactionAmountText: {
    fontFamily: theme.font.TomatoGroteskRegular,
    fontSize: hp(15),
    lineHeight: hp(20),
    color: theme.colors.GREY_TEXT_100,
  },
  loadingContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: deviceWidth,
  },
});
