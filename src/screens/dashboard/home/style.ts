import { deviceHeight, deviceWidth, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dashboardImageContainer: {
    width: deviceWidth,
    height: hp(400),
    flex: 1,
    backgroundColor: theme.colors.OFF_WHITE_400,
  },
  buttonContainer: {
    height: hp(100),
    backgroundColor: theme.colors.WHITE,
  },
  buttonStyle: {
    marginTop: hp(24),
    backgroundColor: theme.colors.WHITE,
    borderWidth: 1,
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
    backgroundColor: theme.colors.OFF_WHITE_400,
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
  },
  createNewPlanContainer: {
    width: wp(188),
    height: hp(243),
    borderRadius: hp(12),
    backgroundColor: theme.colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: wp(121),
    textAlign: 'center',
    paddingTop: hp(10),
  },
  addIcon: {
    width: wp(20),
    height: hp(20),
  },
});
