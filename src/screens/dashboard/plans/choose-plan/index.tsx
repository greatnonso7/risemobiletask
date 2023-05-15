import { StackScreenProps } from '@react-navigation/stack';
import { Header } from 'design-system';
import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import { DashboardStackParamList } from 'types';
import { styles } from './style';
import theme from 'theme';
import { useQuery } from 'react-query';
import * as API from 'services/apis';
import PlanItem from 'screens/dashboard/home/components/PlanItem';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'ChoosePlan'>;

const ChoosePlan = ({ navigation: { goBack, navigate } }: ScreenProps) => {
  const { data: planData } = useQuery('plans', API.getPlans);
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
                <Text></Text>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChoosePlan;
