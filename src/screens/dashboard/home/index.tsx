import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import theme from 'theme';
import { styles } from './style';
import DashboardHeader from './components/DashboardHeader';
import DashboardWallet from './components/DashboardWallet';
import { Button, Icon } from 'design-system';
import QuoteContainer from './components/QuoteContainer';
import {
  BottomTabParamsList,
  DashboardStackParamList,
  PlanData,
  UserData,
} from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { useQuery, useQueryClient } from 'react-query';
import * as API from 'services/apis';
import { RefreshControl } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PlanItem from './components/PlanItem';

type ScreenProps = StackScreenProps<
  BottomTabParamsList & DashboardStackParamList,
  'Home'
>;

const Home = ({ navigation: { navigate } }: ScreenProps) => {
  const [refreshing, setRefreshing] = useState(false);
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData<UserData>('user');
  const { data: quoteData } = useQuery('quotes', API.getQuotes);
  const { data: planData } = useQuery('plans', API.getPlans);
  const { data } = useQuery('rates', API.getRates);
  const totalPlans = planData?.item_count === 0;
  const myPlans = planData?.items;

  const handleRefresh = () => {
    setRefreshing(true);
    queryClient.invalidateQueries('quotes');
    queryClient.invalidateQueries('user');
    queryClient.invalidateQueries('plans');
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={theme.images['dashboard-bg']}
        resizeMode="stretch"
        style={styles.dashboardImageContainer}
      />
      <StatusBar barStyle={'dark-content'} />
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl
              tintColor={theme.colors.PRIMARY}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
          showsVerticalScrollIndicator={false}>
          <DashboardHeader first_name={userData!.first_name} />
          <DashboardWallet userData={userData} />
          <Button
            isNotBottom
            hasIcon
            onPress={() => navigate('FundWallet')}
            buttonStyle={styles.buttonStyle}
            title="Add money"
            titleStyle={styles.titleStyle}
          />
          <LinearGradient
            start={{ x: 0.01, y: 0.001 }}
            end={{ x: 0.4, y: 0.4 }}
            colors={['#F7F7F7', '#FFFFFF']}
            style={styles.investmentPlanContainer}>
            <View style={styles.createPlanContainer}>
              <Text style={styles.planMainText}>
                {totalPlans ? 'Create a plan' : 'Your plans'}
              </Text>
              <TouchableOpacity
                activeOpacity={totalPlans ? 1 : 0.6}
                onPress={() => (totalPlans ? null : navigate('ChoosePlan'))}
                style={styles.viewMorePlansContainer}>
                <Text
                  style={[
                    styles.viewMorePlansText,
                    {
                      color: totalPlans
                        ? theme.colors.GREY
                        : theme.colors.PRIMARY,
                    },
                  ]}>
                  View all plans
                </Text>
                <Image
                  source={theme.images['right-arrow']}
                  resizeMode="contain"
                  style={[
                    styles.rightArrow,
                    {
                      tintColor: totalPlans
                        ? theme.colors.GREY
                        : theme.colors.PRIMARY,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
            {totalPlans && (
              <Text style={styles.planSubText}>
                Start your investment journey by creating a plan
              </Text>
            )}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={totalPlans ? false : true}
              contentContainerStyle={styles.containerStyle}>
              <TouchableOpacity
                onPress={() => navigate('CreatePlan')}
                activeOpacity={0.6}
                style={styles.createNewPlanContainer}>
                <View style={styles.addIconContainer}>
                  <Icon name="addIcon" />
                </View>
                <Text style={styles.createNewPlanText}>
                  Create an investment plan
                </Text>
              </TouchableOpacity>
              {myPlans?.map((plan: PlanData) => {
                return (
                  <PlanItem navigate={navigate} plan={plan} key={plan.id} />
                );
              })}
            </ScrollView>
            <View style={styles.helpContainer}>
              <View style={styles.helpBodyContainer}>
                <View style={styles.questionMarkContainer}>
                  <Icon name="questionMark" />
                </View>
                <Text style={[styles.helpText, styles.spacing]}>
                  Need help?
                </Text>
              </View>
              <Button
                isNotBottom
                buttonStyle={styles.helpButtonContainer}
                title="Contact us"
                titleStyle={styles.helpText}
              />
            </View>
            <QuoteContainer quoteData={quoteData} />
            <View style={styles.riseIconContainer}>
              <Icon name="riseIcon" />
            </View>
          </LinearGradient>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
