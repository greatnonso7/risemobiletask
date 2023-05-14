import { ImageSourcePropType, TextStyle, ViewStyle } from 'react-native';

export interface HeaderProps {
  hasBackButton?: boolean;
  hasCloseButton?: boolean;
  leftIconStyle?: ViewStyle;
  onPressRightIcon?: () => void;
  onPressLeftIcon?: () => void;
  backgroundColor?: string;
  headerRight?: string;
  tintColor?: string;
  rightIcon?: boolean;
  headerTitle?: string;
  hasRightIcon?: ImageSourcePropType;
  rightIconStyle?: ViewStyle;
  titleColor?: string;
  hasSubText?: string;
  headerTitleStyle?: TextStyle;
}
