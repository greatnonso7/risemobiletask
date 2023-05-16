import AvoidingView from 'components/AvoidingView';
import Screen from 'components/Screen';
import { Button, Input } from 'design-system';
import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
  AuthStackParamList,
  BottomTabParamsList,
  RootStackParamList,
} from 'types';
import * as yup from 'yup';
import { Text, View } from 'react-native';
import { styles } from './style';
import { FormikProps, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';
import Config from 'react-native-config';

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

type ScreenProps = StackScreenProps<
  AuthStackParamList & RootStackParamList & BottomTabParamsList,
  'Login'
>;

const Login = ({ navigation }: ScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);

  const {
    Auth: { setLogin, accessDashboard },
  } = useDispatch();

  const initialState = {
    email: '',
    password: '',
  };
  const {
    values,
    handleChange,
    dirty,
    errors,
    handleSubmit,
  }: FormikProps<FormData> = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: async ({ email, password }) => {
      const res = await setLogin({
        email_address: email,
        password,
      });
      console.log(res);
      if (res) {
        accessDashboard();
      }
    },
  });

  const isLoading = useSelector(
    (state: RootState) => state.loading.effects.Auth.setLogin,
  );

  console.log(Config);
  return (
    <Screen>
      <AvoidingView>
        <View style={styles.bodyContainer}>
          <Text style={styles.headerText}>Welcome back</Text>
          <Text style={styles.subHeaderText}>
            Let's get you logged in to get back to building your
            dollar-denominated investment portfolio.
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
              onChangeText={handleChange('password')}
              label="Password"
              autoCapitalize="none"
              password
              secureTextEntry={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              keyboardType="email-address"
              errorText={errors.password}
            />
          </View>
          <Button
            isNotBottom
            disabled={!dirty}
            title="Sign In"
            loading={isLoading}
            onPress={handleSubmit}
          />
          <Button
            isNotBottom
            title="I forgot my password"
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
          />
        </View>
      </AvoidingView>
      <View style={styles.signUpAccountContainer}>
        <Text style={styles.signUpMainText}>Don't have an account?</Text>
        <Text
          style={styles.signUpSubText}
          onPress={() => navigation.navigate('Register')}>
          {' '}
          Sign up
        </Text>
      </View>
    </Screen>
  );
};

export default Login;
