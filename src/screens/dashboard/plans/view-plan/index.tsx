import { Button, Header, Icon } from 'design-system';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import theme from 'theme';
import { styles } from './style';
import * as Progress from 'react-native-progress';
import { hp, wp } from 'constants/layout';
import { planInfo, transactionsList } from 'data';
import {
  BottomTabParamsList,
  DashboardStackParamList,
  RateData,
  UserData,
} from 'types';
import { StackScreenProps } from '@react-navigation/stack';
import { useQuery, useQueryClient } from 'react-query';
import { RouteProp, useRoute } from '@react-navigation/native';
import * as API from 'services/apis';
import { formatAmount } from 'utils';
import dayjs from 'dayjs';

type ScreenProps = StackScreenProps<
  DashboardStackParamList & BottomTabParamsList,
  'ViewPlan'
>;

const ViewPlan = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  const queryClient = useQueryClient();
  const userData = queryClient.getQueryData<UserData>('user');
  const userRates = queryClient.getQueryData<RateData>('rates');

  const { plan_id } =
    useRoute<RouteProp<DashboardStackParamList, 'ViewPlan'>>().params;
  const fromViewPlans =
    useRoute<RouteProp<DashboardStackParamList, 'ViewPlan'>>()?.params;

  const { data, status } = useQuery(plan_id, API.getPlan);

  const getGain = (data?.total_returns * data?.invested_amount) / 100;
  const getInvestProgress =
    (data?.invested_amount * data?.invested_amount) / 100;

  if (status === 'loading') {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={theme.colors.PRIMARY} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={theme.images['header-bg']}
        style={styles.headerImage}>
        <Header
          onPressLeftIcon={() => (fromViewPlans ? goBack() : navigate('Home'))}
          backgroundColor="transparent"
          leftIconStyle={styles.leftIconStyle}
          hasBackButton
          height={hp(120)}
          hasRightIcon={theme.images.more}
          tintColor={theme.colors.WHITE}
          headerTitle={`${data?.plan_name}`}
          titleColor={theme.colors.WHITE}
          hasSubText={`for ${userData?.first_name}`}
          rightIconStyle={styles.leftIconStyle}
        />
      </ImageBackground>
      <SafeAreaView>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <View style={styles.bodyContainer}>
            <View style={styles.planBodyContainer}>
              <Text style={styles.planText}>Plan Balance</Text>
              <Text style={styles.amountText}>
                ${formatAmount(data?.invested_amount)}
              </Text>
              <View style={styles.nairaValueContainer}>
                <Text style={styles.nairaValueText}>
                  ~ ₦{formatAmount(data?.invested_amount * userRates!.buy_rate)}
                </Text>
                <Icon name="infoIconHelp" />
              </View>
            </View>
            <View style={[styles.planBodyContainer, styles.topSpacing]}>
              <Text style={styles.gainMainText}>Gains</Text>
              <Text style={styles.gainRate}>
                +${formatAmount(data?.total_returns)} • +{getGain.toFixed(2)}%{' '}
              </Text>
            </View>
            <View style={styles.planProgressContainer}>
              <View style={styles.progressTextContainer}>
                <Text style={styles.planProgressText}>
                  {getInvestProgress.toFixed(1)} achieved
                </Text>
                <Text style={styles.planProgressText}>
                  Target: ${formatAmount(data?.target_amount)}
                </Text>
              </View>
              <Progress.Bar
                width={wp(335)}
                height={hp(10)}
                borderWidth={0}
                color={theme.colors.PRIMARY}
                progress={getInvestProgress}
                unfilledColor={theme.colors.OFF_WHITE}
                style={styles.progressBarContainer}
              />
            </View>
            <View style={styles.resultInfoContainer}>
              <Text style={styles.resultText}>Results are updated monthly</Text>
            </View>
            <Button
              isNotBottom
              hasIcon
              buttonStyle={styles.buttonStyle}
              title="Add money"
              onPress={() => navigate('FundWallet')}
              titleStyle={styles.titleStyle}
            />
            <Image
              source={theme.images['graph-2']}
              resizeMode={'contain'}
              style={styles.graphImage}
            />

            <View style={styles.planInfoContainer}>
              {planInfo.map(info => {
                return (
                  <View style={styles.planItemInfoContainer} key={info.id}>
                    <Text style={styles.mainPlanText}>{info.title}</Text>
                    <Text style={styles.valuePlanText}>{info.value}</Text>
                  </View>
                );
              })}
              <View style={styles.planItemInfoContainer}>
                <Text style={styles.mainPlanText}>Plan created on</Text>
                <Text style={styles.valuePlanText}>
                  {dayjs(data?.created_at).format('ddd D MMM YYYY')}
                </Text>
              </View>
              <View style={styles.planItemInfoContainer}>
                <Text style={styles.mainPlanText}>Maturity date</Text>
                <Text style={styles.valuePlanText}>
                  {dayjs(data?.maturity_date).format('ddd D MMM YYYY')}
                </Text>
              </View>
            </View>
            <View style={[styles.planInfoContainer, styles.topSpacing]}>
              <View style={styles.createPlanContainer}>
                <Text style={styles.transactionText}>Recent Transactions</Text>
                <TouchableOpacity style={styles.viewMorePlansContainer}>
                  <Text style={styles.viewMoreText}>View all</Text>
                  <Image
                    source={theme.images['right-arrow']}
                    resizeMode="contain"
                    style={styles.rightArrow}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.transactionListContainer}>
                {transactionsList.map(transaction => {
                  return (
                    <View
                      key={transaction.id}
                      style={styles.transactionListItem}>
                      <View style={styles.transactionInfoBodyContainer}>
                        <Image
                          source={transaction.icon}
                          resizeMode="contain"
                          style={styles.transactionIcon}
                        />
                        <View style={styles.transactionTitleContainer}>
                          <Text style={styles.transactionListTitle}>
                            {transaction.title}
                          </Text>
                          <Text style={styles.transactionDateText}>
                            {transaction.date}
                          </Text>
                        </View>
                      </View>
                      <Text style={styles.transactionAmountText}>
                        {transaction.value}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default ViewPlan;
