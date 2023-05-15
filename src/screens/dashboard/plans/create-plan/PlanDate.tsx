import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Button, Header, Input } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import { DashboardStackParamList } from 'types';
import * as Progress from 'react-native-progress';
import { styles } from './style';
import { hp, wp } from 'constants/layout';
import theme from 'theme';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import { showMessage } from 'react-native-flash-message';
import { useRoute } from '@react-navigation/native';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanDate'>;

interface FormData {
  maturity_date: Date;
}

const schema = yup.object().shape({
  maturity_date: yup.string().required('Plan maturity date is required'),
});

const PlanDate = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  const { params }: any = useRoute();
  const initialState = {
    maturity_date: new Date(),
  };

  const { values, setFieldValue }: FormikProps<FormData> = useFormik({
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: initialState,
    validationSchema: schema,
    onSubmit: ({ maturity_date }) => {
      console.log(maturity_date);
    },
  });

  const continueProcess = async (payload: FormData) => {
    const diff = dayjs(payload.maturity_date).diff(dayjs(), 'months');
    console.log(diff, 'months');
    if (diff >= 12) {
      navigate('ReviewPlan', {
        plan_name: params?.plan_name,
        target_amount: params?.target_amount,
        maturity_date: values?.maturity_date,
        total_months: diff,
      });
    } else {
      return showMessage({
        message: 'Error',
        description: 'Maturity date should be at least one year from today',
        duration: 2000,
        type: 'danger',
        icon: 'danger',
      });
    }
  };
  return (
    <Screen>
      <Header
        hasBackButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Target date"
        tintColor={theme.colors.PRIMARY}
      />
      <View style={styles.bodyContainer}>
        <Text style={[styles.mainText]}>Question 3 of 3</Text>
        <Progress.Bar
          width={wp(335)}
          height={hp(10)}
          borderWidth={0}
          color={theme.colors.PRIMARY}
          progress={1}
          unfilledColor={theme.colors.OFF_WHITE}
          style={styles.progressBarContainer}
        />
      </View>
      <View style={styles.formInputContainer}>
        <Text style={styles.inputText}>When do you want to withdraw?</Text>
        <Input
          type="calendar"
          label={'Maturity date'}
          dateFocused={true}
          onChangeValue={date => setFieldValue('maturity_date', date)}
        />
      </View>
      <Button
        isNotBottom
        buttonStyle={styles.buttonStyle}
        onPress={() => continueProcess(values)}
        titleStyle={styles.titleStyle}
        disabled={values.maturity_date ? false : true}
        title="Continue"
      />
    </Screen>
  );
};

export default PlanDate;
