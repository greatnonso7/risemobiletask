import { deviceWidth, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerImage: {
    width: deviceWidth,
    height: hp(150),
  },
  leftIconStyle: {
    backgroundColor: theme.colors.BLACK_100,
  },
  graphImage: {
    marginTop: hp(23),
    width: deviceWidth,
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
});
