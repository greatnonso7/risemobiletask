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

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanDate'>;

const PlanDate = ({ navigation: { navigate, goBack } }: ScreenProps) => {
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
        <Text style={styles.inputText}>What are you saving for</Text>
        <Input
          type="calendar"
          label={'Goal name'}
          dateFocused={true}
        // onChangeValue={date => setFieldValue('date_of_birth', date)}
        />
      </View>
      <Button
        isNotBottom
        buttonStyle={styles.buttonStyle}
        onPress={() => navigate('ReviewPlan')}
        titleStyle={styles.titleStyle}
        title="Continue"
      />
    </Screen>
  );
};

export default PlanDate;
