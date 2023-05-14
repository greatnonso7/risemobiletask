import { deviceWidth, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: theme.colors.WHITE,
    width: deviceWidth,
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
    width: wp(14),
    height: hp(14),
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
  },

  headerTitle: {
    fontSize: hp(20),
    fontFamily: theme.font.TomatoGroteskBold,
    textAlign: 'center',
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
