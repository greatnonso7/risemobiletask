import AvoidingView from 'components/AvoidingView';
import Screen from 'components/Screen';
import { Button, Input } from 'design-system';
import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParamList } from 'types';
import * as yup from 'yup';
import { Text, View } from 'react-native';
import { styles } from './style';
import { FormikProps, useFormik } from 'formik';
import PasswordText from './components/PasswordText';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Email must be a valid email address')
    .required('Email address is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
});

type ScreenProps = StackScreenProps<AuthStackParamList, 'Register'>;

const Register = ({ navigation: { navigate } }: ScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const [has8characters, setHas8characters] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);

  const initialState = {
    email: '',
    password: '',
  };
  const {
    isValid,
    values,
    handleChange,
    handleSubmit,
    errors,
    setFieldValue,
  }: FormikProps<FormData> = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: ({ email, password }) => {
      navigate('CompleteRegister', {
        email,
        password,
      });
    },
  });

  const checkPassword = async (text: string) => {
    const hasCapital = /[A-Z]/;
    const hasSpecial = /[`~<>?/{}()-+_=!@#$%\\^&\\*_]/;
    text.length >= 8 ? setHas8characters(true) : setHas8characters(false);
    hasCapital.test(text) ? setHasUppercase(true) : setHasUppercase(false);
    hasSpecial.test(text)
      ? setHasSpecialCharacter(true)
      : setHasSpecialCharacter(false);
    setFieldValue('password', text);
  };

  const isDisabled =
    isValid && has8characters && hasSpecialCharacter && hasUppercase
      ? false
      : true;

  return (
    <Screen>
      <AvoidingView>
        <View style={styles.bodyContainer}>
          <Text style={styles.headerText}>Create an account</Text>
          <Text style={styles.subHeaderText}>
            Start building your dollar-denominated investment portfolio
          </Text>
          <View style={styles.formContainer}>
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              errorText={errors.email}
            />
            <Input
              value={values.password}
              onChangeText={(text: string) => checkPassword(text)}
              label="Password"
              password
              show={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              secureTextEntry={showPassword}
              keyboardType="default"
              errorText={errors.password}
            />
          </View>
          <PasswordText
            passwordCriteria={has8characters}
            text={'Minimum of 8 characters'}
          />
          <PasswordText
            passwordCriteria={hasUppercase}
            text={'One UPPERCASE character'}
          />
          <PasswordText
            passwordCriteria={hasSpecialCharacter}
            text={'One unique character (e.g: !@#$%^&*?)'}
          />
          <Button
            isNotBottom
            buttonStyle={styles.buttonStyle}
            disabled={isDisabled}
            title="Sign Up"
            onPress={handleSubmit}
          />
        </View>
      </AvoidingView>
      <View style={styles.signUpAccountContainer}>
        <Text style={styles.signUpMainText}>Already have an account?</Text>
        <Text style={styles.signUpSubText} onPress={() => navigate('Login')}>
          {' '}
          Log in
        </Text>
      </View>
    </Screen>
  );
};

export default Register;
