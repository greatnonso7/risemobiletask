import { hp, wp } from 'constants/layout';
import { Icon } from 'design-system';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from 'theme';

interface PasswordTextProps {
  passwordCriteria: boolean;
  text: string;
}

const PasswordText = ({ passwordCriteria, text }: PasswordTextProps) => {
  return (
    <View style={styles.passwordTextContainer}>
      <Icon name={passwordCriteria ? 'radioActive' : 'radio'} />
      <Text style={styles.passwordText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordTextContainer: {
    marginHorizontal: wp(20),
    marginBottom: hp(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordText: {
    fontFamily: theme.font.DMSansRegular,
    paddingLeft: wp(10),
    fontSize: hp(13),
    lineHeight: hp(18),
    color: theme.colors.BLACK,
  },
});

export default PasswordText;
