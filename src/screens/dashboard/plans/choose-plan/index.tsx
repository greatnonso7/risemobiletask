import { StackScreenProps } from '@react-navigation/stack';
import { Header } from 'design-system';
import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { DashboardStackParamList } from 'types';
import { styles } from './style';
import theme from 'theme';
import PlanItem from 'screens/dashboard/home/components/PlanItem';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'ChoosePlan'>;

const ChoosePlan = ({ navigation: { goBack, navigate } }: ScreenProps) => {
  const planData = useSelector((state: RootState) => state.Plan.plans);
  const myPlans = planData?.items;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        hasBackButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Choose from plans"
        tintColor={theme.colors.PRIMARY}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.mainText}>Tap on any of the plans to select</Text>
        <FlatList
          style={styles.flatListContainer}
          contentContainerStyle={styles.contentContainerStyle}
          data={myPlans}
          numColumns={2}
          renderItem={({ item, index }) => {
            return (
              <PlanItem reduce navigate={navigate} plan={item} key={index} />
            );
          }}
          ListEmptyComponent={() => {
            return (
              <View>
                <Text style={styles.mainText}>Empty plan</Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChoosePlan;
