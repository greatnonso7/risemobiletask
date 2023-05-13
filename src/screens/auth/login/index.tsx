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
import * as API from 'services/apis';
import { useMutation, useQueryClient } from 'react-query';
import { storage } from 'utils/storage';

interface FormData {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

type ScreenProps = StackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({ navigation }: ScreenProps) => {
  const [showPassword, setShowPassword] = useState(true);
  const queryClient = useQueryClient();

  const initialState = {
    email: '',
    password: '',
  };
  const { isValid, values, handleChange }: FormikProps<FormData> = useFormik({
    validateOnMount: true,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: ({ email, password }) => {
      setLogin({
        email_address: email,
        password,
      });
    },
  });
  const {
    mutate: setLogin,
    error,
    status,
  } = useMutation(API.setLogin, {
    onSuccess: async data => {
      console.log(data);
      // const userData = data?.data?.user;
      // queryClient.setQueryData('user', userData);
      // storage.set('user_token', data?.data?.token);
      // storage.set('user_data', JSON.stringify(userData));

      // const checkVerification = storage.getBoolean('has_done_verification');
      // const verificationKeys = ['Pending', 'None'];
      // await Keychain.setGenericPassword(formattedPhone, formik.values.password);

      // setTimeout(() => {
      //   setLoading(false);
      //   if (
      //     verificationKeys.includes(userData.id_verification) &&
      //     !checkVerification
      //   ) {
      //     navigation.navigate('KYCVerification');
      //   } else {
      //     navigation.replace('Main');
      //   }
      // }, 500);
    },
  });
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
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              placeholder="Email"
              autoCapitalize="none"
              password
              secureTextEntry={showPassword}
              onTogglePassword={() => setShowPassword(!showPassword)}
              keyboardType="email-address"
            />
          </View>
          <Button isNotBottom disabled={!isValid} title="Sign In" />
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
