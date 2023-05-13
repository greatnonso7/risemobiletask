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
  },
  removePadding: {
    paddingHorizontal: 0,
  },
  selectPadding: {
    paddingHorizontal: 24,
  },
  textInput: {
    ...theme.typography.body.semiRegularText,
    color: theme.colors.WHITE,
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
  passwordIcon: {
    position: 'absolute',
    right: 20,
    top: 19,
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
});
