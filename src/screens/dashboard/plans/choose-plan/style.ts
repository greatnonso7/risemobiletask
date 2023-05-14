import { hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: hp(20),
    marginHorizontal: wp(20),
  },
  mainText: {
    fontSize: hp(15),
    fontFamily: theme.font.DMSansRegular,
    textAlign: 'center',
    color: theme.colors.SOFT_TEXT,
    lineHeight: hp(22),
  },
});
