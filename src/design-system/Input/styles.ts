import { hp, wp } from 'constants/layout';
import { isIos } from 'constants/platform';
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
    paddingHorizontal: wp(16),
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
    color: theme.colors.PLACEHOLDER_TEXT_COLOR,
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(15),
    lineHeight: hp(18),
    height: isIos ? hp(55) : hp(40),
    flexGrow: 1,
  },
  phoneTextInput: {
    paddingLeft: wp(10),
  },
  currencyTextInput: {
    height: hp(40),
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
  calendarInputContainer: {
    height: hp(40),
    width: wp(300),
    padding: hp(10),
  },
  currencyInputContainer: {
    flexDirection: 'row',
    marginTop: hp(7),
  },
  phoneInputContainer: {
    flexDirection: 'row',
    marginTop: isIos ? hp(4) : hp(7),
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
    // flex: 1,
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
  phoneFocused: {
    bottom: hp(50),
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
  countryListContainer: {
    height: hp(450),
    backgroundColor: theme.colors.WHITE,
    borderTopLeftRadius: hp(15),
    borderTopRightRadius: hp(15),
    paddingVertical: hp(30),
    paddingHorizontal: wp(24),
  },
  closeButtonContainer: {
    position: 'absolute',
    right: wp(8),
    top: -hp(40),
    borderRadius: hp(100),
    backgroundColor: theme.colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleCountryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(10),
    minWidth: wp(330),
  },
  countryName: {
    fontSize: hp(14),
    fontFamily: theme.font.DMSansMedium,
    paddingHorizontal: hp(10),
    color: theme.colors.BLACK,
  },
  emojiFlag: {
    fontSize: hp(14),
    color: theme.colors.BLACK,
  },
  countryCode: {
    fontSize: hp(16),
    fontFamily: theme.font.DMSansBold,
    color: theme.colors.BLACK,
  },
  emptyContainer: {
    paddingVertical: hp(130),
    alignSelf: 'center',
  },
  emptyText: {
    fontSize: hp(14),
    fontFamily: theme.font.DMSansMedium,
    color: theme.colors.PRIMARY,
  },
  phoneCountry: {
    width: wp(100),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    borderRightWidth: 1,
    height: hp(40),
    borderRightColor: theme.colors.OFF_WHITE,
  },
  currencyContainer: {
    width: wp(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  currencyPlaceholder: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(15),
    color: theme.colors.PRIMARY,
  },
  flagText: {
    fontSize: hp(14),
  },
  searchInput: {
    borderWidth: 1,
    marginBottom: hp(20),
    padding: hp(12),
    borderRadius: hp(10),
    borderColor: theme.colors.OFF_WHITE,
  },
});
