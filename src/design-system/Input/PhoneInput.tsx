import { Icon } from 'design-system/Icon';
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { PhoneCountry, PhoneInputProps } from './types';
import { styles } from './styles';
import CountryPickerModal from './CountryPickerModal';
import { countryList } from 'data';
import theme from 'theme';

const PhoneInput = (props: PhoneInputProps) => {
  const [showPicker, setShowPicker] = useState(false);

  const { setSelectedCountry, selectedCountry, isFocused } = props;

  useEffect(() => {
    const nigeriaData = countryList?.find(
      (item: any) => item?.name === 'Nigeria',
    );
    setSelectedCountry && setSelectedCountry(nigeriaData as PhoneCountry);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectCountry = (val: PhoneCountry) => {
    setSelectedCountry && setSelectedCountry(val);
    setShowPicker(false);
  };
  return (
    <>
      <View
        style={[
          styles.phoneInputContainer,
          isFocused && styles.focusedContainer,
        ]}>
        <TouchableOpacity
          onPress={() => setShowPicker(true)}
          activeOpacity={0.9}
          style={styles.phoneCountry}>
          <Text style={styles.flagText}>{selectedCountry?.flag}</Text>
          <Text style={styles.countryCode}>{selectedCountry?.dial_code}</Text>
          <Icon name={'arrowDropDown'} />
        </TouchableOpacity>
        <TextInput
          {...props}
          placeholderTextColor={theme.colors.PLACEHOLDER_TEXT_COLOR}
          style={[styles.textInput, styles.phoneTextInput]}
          placeholder="817  390  2910"
          selectionColor={theme.colors.PRIMARY}
          keyboardType="numeric"
        />
      </View>

      <CountryPickerModal
        onCloseModal={() => setShowPicker(false)}
        isVisible={showPicker}
        onComplete={onSelectCountry}
      />
    </>
  );
};

export default PhoneInput;
