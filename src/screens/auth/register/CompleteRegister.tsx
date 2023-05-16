import AvoidingView from 'components/AvoidingView';
import Screen from 'components/Screen';
import { Button, Input } from 'design-system';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { FormikProps, useFormik } from 'formik';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import * as yup from 'yup';
import { RouteProp, useRoute } from '@react-navigation/native';
import { PhoneCountry } from 'design-system/Input/types';
import { formatPhone } from 'utils';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type ScreenProps = StackScreenProps<AuthStackParamList, 'CompleteRegister'>;

interface FormData {
  first_name: string;
  last_name: string;
  username: string;
  phone_number: string;
  date_of_birth: any;
}

const schema = yup.object().shape({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  date_of_birth: yup.string().required('Date of birth is required'),
  username: yup.string().required('Username is required'),
});

const CompleteRegister = ({ navigation: { navigate } }: ScreenProps) => {
  const { email, password } =
    useRoute<RouteProp<AuthStackParamList, 'CompleteRegister'>>().params;

  const [selectedCountry, setSelectedCountry] = useState<PhoneCountry | null>(
    null,
  );

  const {
    Auth: { setLogin, setRegister },
  } = useDispatch();
  const isLoading = useSelector(
    (state: RootState) =>
      state.loading.effects.Auth.setRegister ||
      state.loading.effects.Auth.setLogin,
  );

  const initialState = {
    first_name: '',
    last_name: '',
    username: '',
    phone_number: '',
    date_of_birth: '',
  };

  const {
    values,
    handleChange,
    isValid,
    errors,
    setFieldValue,
    handleSubmit,
  }: FormikProps<FormData> = useFormik({
    validateOnMount: true,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: async ({
      first_name,
      last_name,
      date_of_birth,
      phone_number,
      username,
    }) => {
      const data = {
        last_name,
        first_name,
        email_address: email,
        password,
        date_of_birth,
        username,
        phone_number: `${selectedCountry?.dial_code}${formatPhone(
          phone_number,
        )}`,
      };
      const res = await setRegister(data);
      if (res) {
        const payload = {
          email,
          password,
        };
        const response = await setLogin(payload);
        if (response) {
          navigate('CompleteOnboarding', { first_name: values.first_name });
        }
      }
    },
  });

  return (
    <Screen>
      <AvoidingView>
        <View style={styles.bodyContainer}>
          <Text style={styles.headerText}>Tell Us More About You</Text>
          <Text style={styles.subHeaderText}>
            Please use your name as it appears on your ID.
          </Text>
          <View style={styles.formContainer}>
            <Input
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              label="Legal first name"
              errorText={errors.first_name}
            />
            <Input
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              label="Legal last name"
              errorText={errors.last_name}
            />
            <Input
              value={values.username}
              onChangeText={handleChange('username')}
              label="Nick name"
              autoCapitalize="none"
              errorText={errors.username}
            />
            <Input
              type="phone"
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
              phoneFocused={true}
              onChangeText={handleChange('phone_number')}
              label="Phone number"
            />
            <Input
              type="calendar"
              label="Date of birth"
              dateFocused={true}
              isMaximum
              onChangeValue={(date: any) =>
                setFieldValue('date_of_birth', date)
              }
            />
          </View>

          <Button
            isNotBottom
            buttonStyle={styles.buttonStyle}
            disabled={!isValid}
            onPress={handleSubmit}
            loading={isLoading}
            title="Sign Up"
          />

          <View style={styles.termsConditionContainer}>
            <Text style={styles.termsConditionText}>
              By clicking Continue, you agree to our{' '}
              <Text style={styles.textColor}>Terms of Service</Text> and{' '}
              <Text style={styles.textColor}>Privacy Policy.</Text>
            </Text>
          </View>
        </View>
      </AvoidingView>
    </Screen>
  );
};

export default CompleteRegister;
