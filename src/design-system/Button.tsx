import { getBottomSpace, hp, wp } from 'constants/layout';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextStyle,
  ViewStyle,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import theme from 'theme';

interface ButtonProps {
  loading?: boolean;
  title?: string;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  onPress?: () => void;
  isNotBottom?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  hasIcon?: boolean;
}

export const Button = ({
  title,
  disabled,
  loading,
  isNotBottom,
  buttonStyle,
  titleStyle,
  containerStyle,
  onPress,
  hasIcon,
}: ButtonProps) => {
  return (
    <View style={!isNotBottom && [styles.containerStyle, containerStyle]}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={onPress}
        disabled={disabled || loading}
        style={[
          styles.buttonStyle,
          buttonStyle,
          disabled && styles.disabledButton,
        ]}>
        {loading ? (
          <ActivityIndicator size="small" color={theme.colors.WHITE} />
        ) : (
          <View style={styles.buttonTextContainer}>
            {hasIcon && (
              <Image
                source={theme.images.add}
                resizeMode="contain"
                style={styles.addIcon}
              />
            )}
            <Text style={[styles.title, titleStyle]}>{title}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    position: 'absolute',
    bottom: hp(50) + getBottomSpace(),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  title: {
    color: theme.colors.WHITE,
    fontSize: hp(18),
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: theme.font.DMSansMedium,
  },
  buttonStyle: {
    height: hp(52),
    width: wp(335),
    backgroundColor: theme.colors.PRIMARY,
    borderRadius: hp(5),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  disabledButton: {
    opacity: 0.3,
  },
  buttonTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addIcon: {
    width: wp(21),
    height: hp(21),
    marginRight: 9,
  },
});
