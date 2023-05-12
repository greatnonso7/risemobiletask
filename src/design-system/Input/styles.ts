import { hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  baseContainer: {
    marginHorizontal: wp(20),
    marginBottom: hp(17),
  },
  textInput: {
    width: wp(335),
    height: hp(55),
    borderWidth: 1,
    borderColor: theme.colors.INPUT_BORDER_COLOR,
    borderRadius: hp(5),
    fontFamily: theme.font.DMSansBold,
    padding: hp(16),
  },
});
