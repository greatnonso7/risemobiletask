import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInputProps,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import { Icon } from '../Icon';
import { styles } from './styles';
import CalendarInput from './CalendarInput';
import theme from 'theme';
import { InputProps } from './types';

export const Input = (props: TextInputProps & InputProps) => {
  const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);

  const {
    password,
    onTogglePassword,
    onToggleDropDown,
    type,
    onChangeValue,
    isDropDown,
    isMultiLine,
    onLongPress,
    value,
    isLoading,
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

  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
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
          isCalendar && styles.centerContent,
          isMultiLine && styles.multiInput,
          isLongPress && styles.removePadding,
          isSelectInput && styles.selectPadding,
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
            {isLongPress && (
              <TouchableOpacity
                onLongPress={onLongPress}
                activeOpacity={0.8}
                style={styles.pressableContainer}>
                <Text style={styles.pressableText}>
                  {props.value || 'Long press to paste address'}
                </Text>
              </TouchableOpacity>
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
        {isDropDown && (
          <TouchableOpacity
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            activeOpacity={0.7}
            onPress={onToggleDropDown}
            style={styles.dropDownIcon}>
            <Icon name="downChevronArrow" />
          </TouchableOpacity>
        )}
        {isCalendar && (
          <View style={styles.passwordIcon}>
            <Icon name="calendarIcon" />
          </View>
        )}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'small'} color={theme.colors.WHITE} />
          </View>
        )}
        <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
          <Animated.View
            style={[
              styles.labelContainer,
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
                  // color,
                },
              ]}>
              {label}
              {errorText ? '*' : ''}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};
