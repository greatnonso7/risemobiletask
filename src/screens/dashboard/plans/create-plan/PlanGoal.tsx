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

type ScreenProps = StackScreenProps<DashboardStackParamList, 'PlanGoal'>;

const PlanGoal = ({ navigation: { navigate, goBack } }: ScreenProps) => {
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
        <Input label={'Goal name'} />
      </View>
      <Button
        isNotBottom
        buttonStyle={styles.buttonStyle}
        onPress={() => navigate('PlanAmount')}
        titleStyle={styles.titleStyle}
        title="Continue"
      />
    </Screen>
  );
};

export default PlanGoal;
