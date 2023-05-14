import { deviceWidth, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.WHITE,
    width: deviceWidth,
    marginTop: hp(10),
  },
  navBar: {
    width: '100%',
    backgroundColor: theme.colors.WHITE,
    height: hp(44),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(20),
  },
  headerLeftIconContainer: {
    position: 'absolute',
    left: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: theme.colors.OFF_WHITE,
    height: 40,
    width: 40,
  },
  backIcon: {
    width: wp(17),
    height: hp(17),
    tintColor: theme.colors.PRIMARY,
  },
  headerCloseLeftIconContainer: {
    position: 'absolute',
    left: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },

  rightIconContainer: {
    position: 'absolute',
    right: wp(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 40,
    width: 40,
  },

  headerTitle: {
    fontSize: hp(24),
    fontFamily: theme.font.TomatoGroteskBold,
    textAlign: 'center',
    color: theme.colors.BLACK,
    lineHeight: hp(26),
  },
  subText: {
    textAlign: 'center',
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    color: theme.colors.WHITE,
    lineHeight: hp(22),
  },
  leftIcon: {
    height: hp(20),
    width: wp(20),
  },
  rightIcon: {
    width: wp(20),
    height: hp(20),
  },
});
