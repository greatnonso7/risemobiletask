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
      props.setErrorPin();
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
      {/* <View style={[styles.pinInfoContainer]}>
        {[1, 2, 3, 4, 5, 6].map((item, index) => {
          let hasCompleted = pin?.length >= index + 1;
          return (
            <Image
              key={index}
              source={sharedImages._}
              resizeMode="contain"
              style={[
                styles.placeholder,
                hasCompleted && { tintColor: colors.primary },
              ]}
            />
          );
        })}
      </View> */}
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
                style={styles.keypadButton}>
                {item === 'del' ? (
                  <Image
                    source={theme.images.delete}
                    resizeMode="contain"
                    style={styles.clearButton}
                  />
                ) : (
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
    fontSize: hp(40),
    color: theme.colors.PRIMARY,
    fontFamily: theme.font.TomatoGroteskSemiBold,
  },
  keypadButton: {
    height: hp(82),
    width: wp(82),
    borderRadius: 100,
    backgroundColor: theme.colors.OFF_WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinInfoContainer: {
    width: wp(330),
    marginTop: hp(50),
    height: hp(70),
    borderRadius: hp(14),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: hp(20),
  },
  placeholder: {
    height: hp(28),
    width: wp(28),
  },

  clearButton: {
    width: wp(40),
    height: hp(40),
  },
  numberContainer: {
    width: deviceWidth,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(40),
  },
  numberRow: {
    flexDirection: 'row',
    width: wp(343),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(20),
    marginHorizontal: wp(30),
  },
});

export default KeyPad;
