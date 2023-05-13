import AvoidingView from 'components/AvoidingView';
import Screen from 'components/Screen';
import { Button, Input } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import { FormikProps, useFormik } from 'formik';
import { AuthStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import * as yup from 'yup';
import { useRoute } from '@react-navigation/native';

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
      console.log({
        first_name,
        last_name,
        date_of_birth,
        phone_number,
        username,
      });
      navigate('CompleteOnboarding');
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
              placeholder="Legal first name"
            />
            <Input
              value={values.last_name}
              onChangeText={handleChange('last_name')}
              placeholder="Legal last name"
            />
            <Input
              value={values.username}
              onChangeText={handleChange('username')}
              placeholder="Nick name"
            />
            <Input
              type="calendar"
              title="Date of birth"
              onChangeValue={date => setFieldValue('date_of_birth', date)}
            />
          </View>

          <Button
            isNotBottom
            buttonStyle={styles.buttonStyle}
            // disabled={!isValid}
            // onPress={handleSubmit}
            onPress={() => navigate('CompleteOnboarding')}
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
