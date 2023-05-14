import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInputProps,
  TextInput,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { Icon } from '../Icon';
import { styles } from './styles';
import CalendarInput from './CalendarInput';
import theme from 'theme';
import { InputProps, PhoneInputProps } from './types';
import PhoneInput from './PhoneInput';

export const Input = (props: TextInputProps & PhoneInputProps & InputProps) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(
    props.dateFocused || props.phoneFocused || false,
  );

  const {
    password,
    onTogglePassword,
    type,
    onChangeValue,
    isDropDown,
    isMultiLine,
    value,
    onBlur,
    onFocus,
    blurText,
    label,
    errorText,
  } = props;

  useEffect(() => {
    inputRef?.current?.setNativeProps({
      style: { fontFamily: theme.font.DMSansRegular },
    });
  }, [props.secureTextEntry]);

  const isCalendar = type === 'calendar';
  const isLongPress = type === 'longPress';
  const isSelectInput = type === 'select';
  const isPhoneInput = type === 'phone';

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 350,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  return (
    <>
      <View
        style={[
          styles.container,
          isFocused && styles.focusedContainer,
          props.dateFocused && styles.focusedDateContainer,
          isPhoneInput && styles.focusedDateContainer,
          isCalendar && styles.centerContent,
          isMultiLine && styles.multiInput,
          isLongPress && styles.removePadding,
          isSelectInput && styles.selectPadding,
          errorText && styles.errorTextContainer,
          props.style && props.style,
        ]}>
        {!type ? (
          <TextInput
            {...props}
            ref={inputRef}
            editable={isDropDown || isLongPress ? false : true}
            style={styles.textInput}
            onBlur={event => {
              setIsFocused(false);
              onBlur?.(event);
              password && blurText && blurText();
            }}
            selectionColor={theme.colors.PRIMARY}
            onFocus={event => {
              setIsFocused(true);
              onFocus?.(event);
            }}
            multiline={isMultiLine}
          />
        ) : (
          <>
            {isCalendar && (
              <View style={styles.calendarContainer}>
                <CalendarInput onChangeValue={onChangeValue} />
              </View>
            )}
            {isPhoneInput && (
              <View style={styles.calendarContainer}>
                <PhoneInput
                  {...props}
                  setIsFocused={setIsFocused}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  blurText={blurText}
                  isFocused={isFocused}
                />
              </View>
            )}
          </>
        )}
        {password && (
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            activeOpacity={0.7}
            onPress={onTogglePassword}
            style={styles.passwordIcon}>
            <Icon name={props.secureTextEntry ? 'eyeOpen' : 'eyeClose'} />
          </TouchableOpacity>
        )}
        {isCalendar && (
          <View style={styles.passwordIcon}>
            <Icon name="calendarIcon" />
          </View>
        )}
        <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
          <Animated.View
            style={[
              styles.labelContainer,
              props?.dateFocused && styles.labelDateFocused,
              props?.phoneFocused && styles.labelDateFocused,
              {
                transform: [
                  {
                    scale: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.75],
                    }),
                  },
                  {
                    translateY: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [20, -14],
                    }),
                  },
                  {
                    translateX: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [16, 0],
                    }),
                  },
                ],
              },
            ]}>
            <Text
              style={[
                styles.label,
                {
                  color:
                    isFocused && value?.length > 0
                      ? theme.colors.PRIMARY
                      : errorText
                        ? theme.colors.RED
                        : theme.colors.PLACEHOLDER_TEXT_COLOR,
                },
              ]}>
              {label}
              {errorText && isFocused ? '*' : ''}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
      {!!errorText && <Text style={styles.error}>{errorText}</Text>}
    </>
  );
};
