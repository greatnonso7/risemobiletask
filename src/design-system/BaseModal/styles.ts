import { deviceHeight, hp, wp } from 'constants/layout';
import { StyleSheet } from 'react-native';
import theme from 'theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 0,
  },
  generalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 0,
  },
  dialogContainer: {
    borderTopRightRadius: hp(15),
    borderTopLeftRadius: hp(15),
    width: '100%',
    maxHeight: deviceHeight - 100,
    alignSelf: 'flex-end',
    position: 'relative',
    backgroundColor: theme.colors.WHITE,
    zIndex: 10,
  },
  closeButtonContainer: {
    width: wp(24),
    height: hp(24),
    position: 'absolute',
    right: wp(8),
    top: -hp(35),
    borderRadius: hp(100),
    backgroundColor: theme.colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  xIcon: {
    width: wp(20),
    height: hp(20),
  },
});
