import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Button, Header, Input } from 'design-system';
import React from 'react';
import { View, Text } from 'react-native';
import { DashboardStackParamList } from 'types';
import { styles } from './style';
import * as Progress from 'react-native-progress';
import { hp, wp } from 'constants/layout';
import theme from 'theme';
import { FormikProps, useFormik } from 'formik';
import * as yup from 'yup';

interface FormData {
  plan_name: string;
}

const schema = yup.object().shape({
  plan_name: yup.string().required('Goal name is required'),
});

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanGoal'>;

const PlanGoal = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  const initialState = {
    plan_name: '',
  };

  const { values, handleChange, errors, handleSubmit }: FormikProps<FormData> =
    useFormik({
      validateOnBlur: false,
      validateOnChange: false,
      initialValues: initialState,
      validationSchema: schema,
      onSubmit: ({ plan_name }) => {
        navigate('PlanAmount', { plan_name });
      },
    });
  return (
    <Screen>
      <Header
        hasBackButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Goal name"
        tintColor={theme.colors.PRIMARY}
      />
      <View style={styles.bodyContainer}>
        <Text style={[styles.mainText]}>Question 1 of 3</Text>
        <Progress.Bar
          width={wp(335)}
          height={hp(10)}
          borderWidth={0}
          color={theme.colors.PRIMARY}
          progress={0.3}
          unfilledColor={theme.colors.OFF_WHITE}
          style={styles.progressBarContainer}
        />
      </View>

      <View style={styles.formInputContainer}>
        <Text style={styles.inputText}>What are you saving for</Text>
        <Input
          label={'Goal name'}
          value={values.plan_name}
          onChangeText={handleChange('plan_name')}
          errorText={errors.plan_name}
        />
      </View>
      <Button
        isNotBottom
        buttonStyle={styles.buttonStyle}
        onPress={handleSubmit}
        disabled={values.plan_name ? false : true}
        titleStyle={styles.titleStyle}
        title="Continue"
      />
    </Screen>
  );
};

export default PlanGoal;
