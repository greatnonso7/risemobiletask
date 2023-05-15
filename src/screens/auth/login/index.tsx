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
import * as API from 'services/apis';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { storage } from 'utils/storage';
import { showMessage } from 'react-native-flash-message';

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
  const queryClient = useQueryClient();

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
    onSubmit: ({ email, password }) => {
      setLogin({
        email_address: email,
        password,
      });
    },
  });
  const { refetch } = useQuery('user', API.getLogin, {
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: setLogin, status } = useMutation(API.setLogin, {
    onSuccess: async data => {
      const res = await refetch();
      const responseData = res.data;
      if (res.data) {
        const token = responseData.token;
        storage.setItem('user_token', token);
        queryClient.setQueryData('user', data);
        navigation.replace('DashboardStack', { screen: 'DashboardSection' });
      }
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
    onError: async (error: any) => {
      showMessage({
        message: 'Error',
        description: error.data.message,
        duration: 2000,
        type: 'danger',
        icon: 'danger',
      });
    },
  });

  console.log(dirty);
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
            loading={status === 'loading'}
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
