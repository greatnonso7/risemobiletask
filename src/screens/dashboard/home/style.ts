import { deviceWidth, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboardImageContainer: {
    width: deviceWidth,
    height: hp(700),
    flex: 1,
    opacity: 0.5,
    // backgroundColor: '#efeff6',
  },
  buttonContainer: {
    height: hp(100),
    backgroundColor: theme.colors.WHITE,
  },
  buttonStyle: {
    marginTop: hp(24),
    backgroundColor: theme.colors.WHITE,
    borderWidth: 1,
    marginBottom: hp(20),
    borderColor: theme.colors.OFF_WHITE_200,
  },
  titleStyle: {
    color: theme.colors.PRIMARY,
  },
  backgroundCover: {
    // position: 'absolute',
    // height: hp(500),
    // borderWidth: 1,
    // backgroundColor: theme.colors.WHITE,
    // bottom: 100,
  },
  investmentPlanContainer: {
    paddingTop: hp(31),
    // height: hp(500),
    // backgroundColor: '#efeff6',
    // backgroundColor: theme.colors.OFF_WHITE_400,
  },
  createPlanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(20),
    justifyContent: 'space-between',
  },
  planMainText: {
    fontFamily: theme.font.TomatoGroteskRegular,
    fontSize: hp(18),
    lineHeight: 22,
    color: theme.colors.BLACK,
  },
  viewMorePlansContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewMorePlansText: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(14),
    lineHeight: hp(18),
    paddingRight: wp(4),
    color: theme.colors.PRIMARY,
  },
  rightArrow: {
    width: wp(16),
    height: hp(16),
  },
  helpContainer: {
    marginHorizontal: wp(20),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(31),
    backgroundColor: theme.colors.WHITE,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: hp(12),
    borderRadius: hp(12),
  },
  questionMarkContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: theme.colors.OFF_WHITE,
  },
  helpBodyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  helpButtonContainer: {
    width: wp(123),
  },
  helpText: {
    fontSize: hp(15),
    fontFamily: theme.font.DMSansRegular,
    lineHeight: hp(22),
  },
  spacing: {
    paddingLeft: wp(10),
  },
  riseIconContainer: {
    marginTop: hp(32),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(20),
  },
  planSubText: {
    paddingTop: hp(11),
    paddingHorizontal: wp(20),
    width: wp(340),
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(20),
    color: theme.colors.SOFT_TEXT,
  },
  containerStyle: {
    marginLeft: wp(20),
    marginTop: hp(20),
    paddingRight: wp(50),
  },
  createNewPlanContainer: {
    width: wp(178),
    height: hp(243),
    borderRadius: hp(12),
    backgroundColor: theme.colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(15),
  },
  spacingRight: {
    marginRight: wp(24),
  },
  planContainer: {
    width: wp(188),
    bottom: 10,
    height: hp(270),
  },
  addIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    backgroundColor: theme.colors.PRIMARY_LIGHT_COLOR_100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createNewPlanText: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(14),
    lineHeight: hp(18),
    color: theme.colors.BLACK,
    width: wp(121),
    textAlign: 'center',
    paddingTop: hp(10),
  },
  addIcon: {
    width: wp(20),
    height: hp(20),
  },
  planBodyContainer: {
    position: 'absolute',
    alignSelf: 'flex-start',
    paddingHorizontal: wp(30),
    bottom: hp(50),
  },
  planName: {
    fontFamily: theme.font.DMSansRegular,
    color: theme.colors.WHITE,
    fontSize: hp(15),
    lineHeight: hp(22),
  },
  planAmount: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(18),
    lineHeight: hp(21),
    color: theme.colors.WHITE,
  },
  noMargin: {
    marginRight: 10,
    marginBottom: hp(20),
  },
  widthStyle: { width: wp(170), height: hp(250) },
});
