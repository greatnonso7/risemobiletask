import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import theme from 'theme';
import { styles } from './style';
import DashboardHeader from './components/DashboardHeader';
import DashboardWallet from './components/DashboardWallet';
import { Button, Icon } from 'design-system';
import QuoteContainer from './components/QuoteContainer';
import { BottomTabParamsList, DashboardStackParamList, UserData } from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { useQuery, useQueryClient } from 'react-query';
import * as API from 'services/apis';
import { RefreshControl } from 'react-native';

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
  const totalPlans = planData?.item_count === 0;

  const handleRefresh = () => {
    setRefreshing(true);
    queryClient.invalidateQueries('quotes');
    queryClient.invalidateQueries('user');
    setRefreshing(false);
  };

  return (
    <ImageBackground
      source={theme.images['dashboard-bg']}
      resizeMode="stretch"
      style={styles.dashboardImageContainer}>
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
          <View style={styles.backgroundCover}>
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
            <View style={styles.investmentPlanContainer}>
              <View style={styles.createPlanContainer}>
                <Text style={styles.planMainText}>
                  {totalPlans ? 'Create a plan' : 'Your plans'}
                </Text>
                <TouchableOpacity
                  activeOpacity={1}
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
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
