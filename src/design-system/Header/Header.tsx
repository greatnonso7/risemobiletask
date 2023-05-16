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
  rightIconStyle,
  hasCloseButton,
  headerTitle,
  backgroundColor,
  height,
  hasRightIcon,
  onPressRightIcon,
  titleColor,
  hasSubText,
  headerTitleStyle,
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
            source={theme.images['left-arrow']}
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
          style={[styles.rightIconContainer, rightIconStyle]}
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
      return (
        <View>
          <Text
            style={[
              styles.headerTitle,
              headerTitleStyle,
              { color: titleColor },
            ]}>
            {headerTitle}
          </Text>
          {hasSubText && <Text style={styles.subText}>{hasSubText}</Text>}
        </View>
      );
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
          { backgroundColor: backgroundColor || theme.colors.WHITE, height },
        ]}>
        {renderHeaderLeft()}
        {renderHeaderTitle()}
        {renderHeaderRight()}
      </View>
    </View>
  );
};
