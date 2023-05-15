import { hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.WHITE,
  },
  bodyContainer: {
    marginTop: hp(20),
  },
  mainText: {
    fontSize: hp(15),
    fontFamily: theme.font.DMSansRegular,
    textAlign: 'center',
    color: theme.colors.SOFT_TEXT,
    lineHeight: hp(22),
  },
  contentContainerStyle: {
    marginTop: hp(40),
    marginLeft: wp(12),
  },
  flatListContainer: {
    height: hp(500),
  },
});
