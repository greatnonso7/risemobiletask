import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Button, Header, Input } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import { DashboardStackParamList } from 'types';
import { styles } from './style';
import { hp, wp } from 'constants/layout';
import theme from 'theme';
import * as yup from 'yup';
import { FormikProps, useFormik } from 'formik';
import { useRoute } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { showMessage } from 'react-native-flash-message';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanAmount'>;

interface FormData {
  target_amount: string;
}

const schema = yup.object().shape({
  plan_name: yup.string().required('Goal amount is required'),
});

const PlanAmount = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  const { params }: any = useRoute();
  const initialState = {
    target_amount: '',
  };

  const { values, errors, setFieldValue }: FormikProps<FormData> = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: ({ target_amount }) => {
      console.log(target_amount);
    },
  });

  const submit = async (payload: FormData) => {
    const amount = Number(values.target_amount?.split(',').join(''));
    if (amount < 10000) {
      return showMessage({
        message: 'Error',
        description: 'Goal amount must be minimum of ₦10,000',
        duration: 2000,
        type: 'danger',
        icon: 'danger',
      });
    }
    navigate('PlanDate', {
      plan_name: params?.plan_name,
      target_amount: payload.target_amount,
    });
  };

  const formatAmountInput = async (text: string) => {
    const numberAmount = Number(text.replace(/\D/g, ''));
    const formattedValue = (Number(numberAmount) || '').toLocaleString();
    console.log(formattedValue);
    setFieldValue('target_amount', formattedValue);
  };

  return (
    <Screen>
      <Header
        hasBackButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Target amount"
        tintColor={theme.colors.PRIMARY}
      />
      <View style={styles.bodyContainer}>
        <Text style={[styles.mainText]}>Question 2 of 3</Text>
        <Progress.Bar
          width={wp(335)}
          height={hp(10)}
          borderWidth={0}
          color={theme.colors.PRIMARY}
          progress={0.7}
          unfilledColor={theme.colors.OFF_WHITE}
          style={styles.progressBarContainer}
        />
      </View>
      <View style={styles.formInputContainer}>
        <Text style={styles.inputText}>How much do need?</Text>
        <Input
          type="currency"
          label={'Goal amount'}
          value={values.target_amount}
          phoneFocused={true}
          errorText={errors.target_amount}
          onChangeText={text => formatAmountInput(text)}
        />
      </View>
      <Button
        isNotBottom
        buttonStyle={styles.buttonStyle}
        onPress={() => submit(values)}
        titleStyle={styles.titleStyle}
        title="Continue"
        disabled={values.target_amount ? false : true}
      />
    </Screen>
  );
};

export default PlanAmount;
