import React, { forwardRef } from 'react';
import { View, TextInput, TextInputProps, Text } from 'react-native';
import { InputBaseProps } from './types';
import { Controller, ControllerRenderProps } from 'react-hook-form';
import theme from 'theme';
import { styles } from './styles';

interface RegularInputProps extends InputBaseProps, TextInputProps {
  type?: 'regular';
}

interface ComponentMapType {
  [index: string]: ({
    onChange,
    onBlur,
    value,
  }: any) => JSX.Element | JSX.Element[];
}

export const RegularInput = forwardRef<TextInputProps, RegularInputProps>(
  (
    {
      control,
      errorText,
      label,
      name = '',
      type = 'regular',
      placeholder,
      onFocus,
      ...props
    },
    ref,
  ) => {
    const regularInput = ({
      onChange,
      onBlur,
      value,
    }: ControllerRenderProps) => {
      return (
        <View style={styles.baseContainer}>
          <TextInput
            style={styles.textInput}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.PLACEHOLDER_TEXT_COLOR}
            {...props}
            {...ref}
          />
        </View>
      );
    };

    const componentMap: ComponentMapType = {
      regular: regularInput,
    };

    return (
      <View>
        {label && <Text>{label}</Text>}
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>{componentMap[type]({ onChange, onBlur, value })}</View>
          )}
        />
        {errorText && <Text>{errorText}</Text>}
      </View>
    );
  },
);
