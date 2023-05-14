import { isIos } from 'constants/platform';
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import Screen from './Screen';
import theme from 'theme';
import { deviceWidth, hp, wp } from 'constants/layout';

const KeyPad = (props: any) => {
  const [pin, setPin] = useState<string>('');

  const firstRow = ['1', '2', '3'];
  const secondRow = ['4', '5', '6'];
  const thirdRow = ['7', '8', '9'];
  const fourthRow = ['', '0', 'del'];

  let TouchableOpacity: any;
  if (!isIos) {
    ({ TouchableOpacity } = require('react-native'));
  } else {
    ({ TouchableOpacity } = require('react-native-gesture-handler'));
  }
  const options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: true,
  };

  const onLongPress = (item: any) => {
    ReactNativeHapticFeedback.trigger('impactMedium', options);

    if (item === 'del') {
      setPin('');
    }
  };
  const onPressButton = async (item: string) => {
    ReactNativeHapticFeedback.trigger('impactMedium', options);
    let completePin;
    if (item === 'del') {
      setPin(pin?.slice(0, -1));
      return;
    }
    if (item === 'pin') {
      return;
    }
    if (pin?.length < 6) {
      setPin(pin + item);
    }
    completePin = pin + item;
    if (completePin.length === 6) {
      props.onComplete(completePin);
    }
  };
  return (
    <Screen>
      <View style={[styles.pinInfoContainer]}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          let hasCompleted = pin?.length >= index + 1;
          return (
            <View
              key={index}
              style={[
                styles.placeholder,
                hasCompleted && styles.activeContainer,
              ]}>
              {hasCompleted && <Text style={styles.pointText}>•</Text>}
            </View>
          );
        })}
      </View>
      <View style={styles.numberContainer}>
        <View style={styles.numberRow}>
          {firstRow.map((item, index) => (
            <TouchableOpacity
              onPressIn={() => onPressButton(item)}
              key={index}
              activeOpacity={0.7}
              delayPressIn={0}
              style={styles.keypadButton}>
              <Text style={styles.keyText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numberRow}>
          {secondRow.map((item, index) => (
            <TouchableOpacity
              onPressIn={() => onPressButton(item)}
              key={index}
              activeOpacity={0.7}
              delayPressIn={0}
              style={styles.keypadButton}>
              <Text style={styles.keyText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numberRow}>
          {thirdRow.map((item, index) => (
            <TouchableOpacity
              onPressIn={() => onPressButton(item)}
              key={index}
              delayPressIn={0}
              activeOpacity={0.7}
              style={styles.keypadButton}>
              <Text style={styles.keyText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numberRow}>
          {fourthRow.map((item, index) => {
            return (
              <TouchableOpacity
                onLongPress={() => onLongPress(item)}
                onPressIn={() => onPressButton(item)}
                key={index}
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                delayPressIn={0}
                activeOpacity={0.7}
                style={[
                  styles.keypadButton,
                  item === '' && styles.emptyContainer,
                ]}>
                {item === 'del' ? (
                  <Image
                    source={theme.images.delete}
                    resizeMode="contain"
                    style={styles.clearButton}
                  />
                ) : item === '' ? null : (
                  <Text style={styles.keyText}>{item}</Text>
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  keyText: {
    fontSize: hp(30),
    color: theme.colors.PRIMARY,
    fontFamily: theme.font.TomatoGroteskSemiBold,
  },
  keypadButton: {
    height: hp(72),
    width: wp(72),
    borderRadius: 100,
    backgroundColor: theme.colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyContainer: {
    backgroundColor: theme.colors.WHITE,
  },
  pinInfoContainer: {
    width: wp(317),
    bottom: hp(40),
    marginBottom: hp(40),
    height: hp(70),
    borderRadius: hp(14),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  placeholder: {
    height: hp(42),
    width: wp(42),
    borderWidth: 1,
    borderRadius: hp(5),
    borderColor: theme.colors.OFF_WHITE_200,
  },
  activeContainer: {
    borderColor: theme.colors.PRIMARY,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointText: {
    fontSize: hp(30),
    bottom: hp(3),
  },
  clearButton: {
    width: wp(30),
    height: hp(30),
  },
  numberContainer: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(40),
    height: hp(300),
  },
  numberRow: {
    flexDirection: 'row',
    width: wp(320),
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: hp(20),
    marginHorizontal: wp(30),
  },
});

export default KeyPad;
