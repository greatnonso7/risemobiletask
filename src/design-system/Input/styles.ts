import { hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    height: hp(55),
    borderColor: theme.colors.INPUT_BORDER_COLOR,
    borderWidth: 1,
    borderRadius: hp(5),
    marginHorizontal: wp(20),
    backgroundColor: theme.colors.WHITE,
    padding: 16,
    flexGrow: 1,
    marginBottom: hp(17),
  },
  removePadding: {
    paddingHorizontal: 0,
  },
  selectPadding: {
    paddingHorizontal: 24,
  },
  textInput: {
    ...theme.typography.body.semiRegularText,
    color: theme.colors.TEXT_BLACK,
    flexGrow: 1,
  },
  titleContainer: {
    marginBottom: 10,
  },
  titleText: {
    ...theme.typography.body.mediumText,
    color: theme.colors.INDIGO,
  },
  focusedContainer: {
    borderColor: theme.colors.PRIMARY,
  },
  focusedDateContainer: {
    borderColor: theme.colors.OFF_WHITE,
  },
  errorTextContainer: {
    borderColor: theme.colors.RED,
  },
  passwordIcon: {
    position: 'absolute',
    right: wp(20),
    top: hp(20),
    zIndex: 2,
  },
  dropDownIcon: {
    position: 'absolute',
    right: 20,
    top: 27,
    zIndex: 2,
  },
  calendarContainer: {
    flex: 1,
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  multiInput: {
    minHeight: 96,
    borderColor: theme.colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: theme.colors.WHITE,
    paddingHorizontal: 29,
    paddingTop: 22,
  },
  pressableContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  pressableText: {
    ...theme.typography.body.regularMedium,
    color: theme.colors.PRIMARY,
  },
  loadingContainer: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  labelContainer: {
    position: 'absolute',
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  labelDateFocused: {
    bottom: hp(35),
  },
  label: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(14),
  },
  error: {
    color: theme.colors.RED,
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(12),
    paddingHorizontal: wp(20),
    bottom: hp(15),
  },
  placeholderText: {
    color: theme.colors.TEXT_BLACK,
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(15),
  },
});
