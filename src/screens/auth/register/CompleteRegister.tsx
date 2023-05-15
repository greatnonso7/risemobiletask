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
import { useRoute } from '@react-navigation/native';
import { PhoneCountry } from 'design-system/Input/types';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { storage } from 'utils/storage';
import * as API from 'services/apis';
import { formatPhone } from 'utils';
import { showMessage } from 'react-native-flash-message';

type ScreenProps = StackScreenProps<AuthStackParamList, 'CompleteRegister'>;

interface FormData {
  first_name: string;
  last_name: string;
  username: string;
  phone_number: string;
  date_of_birth: any;
}

const schema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  date_of_birth: yup.string().required(),
});

const CompleteRegister = ({ navigation: { navigate } }: ScreenProps) => {
  const { params }: any = useRoute();
  const queryClient = useQueryClient();

  const [selectedCountry, setSelectedCountry] = useState<PhoneCountry | null>(
    null,
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
    setFieldValue,
    handleSubmit,
  }: FormikProps<FormData> = useFormik({
    validateOnMount: true,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: ({
      first_name,
      last_name,
      date_of_birth,
      phone_number,
      username,
    }) => {
      console.log(phone_number);
      const data = {
        last_name,
        first_name,
        email_address: params.email,
        password: params.password,
        date_of_birth,
        username,
        phone_number: `${selectedCountry?.dial_code}${formatPhone(
          phone_number,
        )}`,
      };
      // const currentYear = new Date().getFullYear();
      // const birthYear = date_of_birth?.slice(0, 4);
      // const currentAge = currentYear - Number(birthYear);
      setRegister(data);
      // } else {
      //   showMessage({
      //     message: 'Error',
      //     description: 'You must be at least 18 years of age',
      //     duration: 2000,
      //     type: 'danger',
      //     icon: 'danger',
      //   });
      // }
    },
  });

  const { data: userSessionData, refetch } = useQuery('user', API.getLogin, {
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const { mutate: setRegister, status } = useMutation(API.setRegister, {
    onSuccess: async data => {
      console.log(data);
      const userData = data?.data?.user;
      queryClient.setQueryData('user', userData);
      refetch();
      // storage.setItem('user_token', data?.data?.token);
      // storage.set('user_data', JSON.stringify(userData));
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
              value={values.first_name}
              onChangeText={handleChange('first_name')}
              label="Legal first name"
            />
            <Input
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              label="Legal last name"
            />
            <Input
              value={values.username}
              onChangeText={handleChange('username')}
              label="Nick name"
              autoCapitalize="none"
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
              onChangeValue={date => setFieldValue('date_of_birth', date)}
            />
          </View>

          <Button
            isNotBottom
            buttonStyle={styles.buttonStyle}
            disabled={!isValid}
            onPress={handleSubmit}
            loading={status === 'loading'}
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
