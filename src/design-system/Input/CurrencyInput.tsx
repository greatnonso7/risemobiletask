import React from 'react';
import { View, Text, TextInput, TextInputProps } from 'react-native';
import { PhoneInputProps } from './types';
import { styles } from './styles';
import theme from 'theme';

const CurrencyInput = (props: PhoneInputProps & TextInputProps) => {
  const { isFocused } = props;

  return (
    <>
      <View
        style={[
          styles.currencyInputContainer,
          isFocused && styles.focusedContainer,
        ]}>
        <View style={styles.currencyContainer}>
          <Text style={styles.currencyPlaceholder}>₦</Text>
        </View>
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.GREY}
          style={[styles.textInput, styles.currencyTextInput]}
          placeholder="Enter target amount"
          selectionColor={theme.colors.PRIMARY}
          keyboardType="numeric"
        />
      </View>
    </>
  );
};

export default CurrencyInput;
