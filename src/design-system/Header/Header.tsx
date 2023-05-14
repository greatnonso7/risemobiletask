import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { HeaderProps } from './types';
import theme from 'theme';

export const Header = ({
  hasBackButton,
  onPressLeftIcon,
  tintColor,
  leftIconStyle,
  hasCloseButton,
  headerTitle,
  backgroundColor,
  hasRightIcon,
  onPressRightIcon,
}: HeaderProps) => {
  const renderHeaderLeft = () => {
    if (hasBackButton) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={[
            styles.headerLeftIconContainer,
            leftIconStyle,
            { borderColor: tintColor },
          ]}
          onPress={onPressLeftIcon}>
          <Image
            source={theme.images['arrow-left']}
            style={[styles.backIcon, { tintColor }]}
          />
        </TouchableOpacity>
      );
    }
    if (hasCloseButton) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.headerLeftIconContainer, leftIconStyle]}
          onPress={onPressLeftIcon}>
          <Image
            source={theme.images.x}
            style={[styles.backIcon, { tintColor }]}
          />
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderRight = () => {
    if (hasRightIcon) {
      return (
        <TouchableOpacity
          activeOpacity={0.5}
          style={[styles.rightIconContainer, { borderColor: tintColor }]}
          onPress={onPressRightIcon}>
          <Image
            source={hasRightIcon}
            resizeMode="contain"
            style={styles.leftIcon}
          />
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return <Text style={[styles.headerTitle]}>{headerTitle}</Text>;
    }
  };

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor: backgroundColor || theme.colors.WHITE },
      ]}>
      <View
        style={[
          styles.navBar,
          { backgroundColor: backgroundColor || theme.colors.WHITE },
        ]}>
        {renderHeaderLeft()}
        {renderHeaderTitle()}
        {renderHeaderRight()}
      </View>
    </View>
  );
};
