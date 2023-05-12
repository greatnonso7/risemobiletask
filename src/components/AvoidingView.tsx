import { isIos } from 'constants/platform';
import React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const AvoidingView = ({ children }: Props) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isIos ? 'padding' : undefined}>
      {children}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AvoidingView;
