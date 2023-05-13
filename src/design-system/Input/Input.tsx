import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInputProps,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from '../Icon';
import { styles } from './styles';
import CalendarInput from './CalendarInput';
import theme from 'theme';
import { InputProps } from './types';

export const Input = (props: TextInputProps & InputProps) => {
  const inputRef = useRef<any>(null);
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
    isLoading,
    blurText,
    open,
  } = props;

  useEffect(() => {
    inputRef?.current?.setNativeProps({
      style: { fontFamily: theme.font.DMSansRegular },
    });
  }, [props.secureTextEntry]);

  const isCalendar = type === 'calendar';
  const isLongPress = type === 'longPress';
  const isSelectInput = type === 'select';

  return (
    <>
      {Boolean(props.title) && (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{props.title}</Text>
        </View>
      )}
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
            placeholderTextColor={theme.colors.PLACEHOLDER_TEXT_COLOR}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setIsFocused(false);
              password && blurText && blurText();
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
            <Icon name={open ? 'eyeOpen' : 'eyeClose'} />
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
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size={'small'} color={theme.colors.WHITE} />
          </View>
        )}
      </View>
    </>
  );
};
