import React from 'react';
import {
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import { styles } from './styles';
import { BaseModalProps } from './types';
import theme from 'theme';

export const BaseModal = ({
  visible,
  children,
  onClose,
  containerStyles,
  removeBackTap,
  hideButton,
}: BaseModalProps) => {
  return (
    <Modal
      isVisible={visible}
      hasBackdrop={true}
      animationIn="slideInUp"
      onSwipeComplete={onClose}
      swipeDirection="down"
      style={[styles.container, containerStyles]}
      propagateSwipe={true}
      backdropOpacity={0.8}
      // eslint-disable-next-line prettier/prettier
      onBackdropPress={removeBackTap ? () => { } : onClose}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          enabled
          style={styles.generalContainer}
          pointerEvents="box-none">
          <View style={[styles.dialogContainer]}>
            {hideButton ? null : (
              <TouchableOpacity
                onPress={onClose}
                style={styles.closeButtonContainer}>
                <Image source={theme.images.x} style={styles.xIcon} />
              </TouchableOpacity>
            )}
            {children}
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
