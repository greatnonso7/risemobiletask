import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Button, Header, Icon } from 'design-system';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import theme from 'theme';
import { DashboardStackParamList, RateData, UserData } from 'types';
import { styles } from './style';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useMutation, useQueryClient } from 'react-query';
import { formatAmount } from 'utils';
import dayjs from 'dayjs';
import * as API from 'services/apis';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'ReviewPlan'>;

const ReviewPlan = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  const queryClient = useQueryClient();
  const { maturity_date, target_amount, total_months, plan_name } =
    useRoute<RouteProp<DashboardStackParamList, 'ReviewPlan'>>().params;
  const total_maturity_amount = Number(target_amount.split(',').join(''));
  const userRates = queryClient.getQueryData<RateData>('rates');
  const userData = queryClient.getQueryData<UserData>('user');
  const monthlyInvest = total_maturity_amount / total_months;
  const totalInvestment = total_maturity_amount / userRates!.sell_rate;
  const getReturns = totalInvestment / 12;
  const totalReturns = getReturns + totalInvestment;

  const { mutate: createPlan, status } = useMutation(API.createPlan, {
    onSuccess: async data => {
      navigate('PlanComplete', { plan_id: data.id });
    },
  });

  const createInvestPlan = async () => {
    const data = {
      maturity_date,
      plan_name,
      target_amount: total_maturity_amount,
    };
    await createPlan(data);
  };
  return (
    <Screen>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          tintColor={theme.colors.PRIMARY}
          hasBackButton
          onPressLeftIcon={() => goBack()}
          headerTitle="Review"
        />
        <View style={[styles.bodyContainer, styles.reviewPlanContainer]}>
          <Text style={styles.investorText}>
            {userData?.first_name} {userData?.last_name}
          </Text>
          <Text style={styles.amountText}>${formatAmount(totalReturns)}</Text>
          <Text style={styles.durationText}>
            by {dayjs(maturity_date).format('DD MMM YYYY')}
          </Text>
        </View>
        <View style={styles.investmentReturnContainer}>
          <View style={styles.investmentReturnSection}>
            <View
              style={[styles.pointDot, { backgroundColor: theme.colors.GREY }]}
            />
            <Text style={styles.returnText}>
              Investments • ${formatAmount(totalInvestment)}
            </Text>
          </View>
          <View style={styles.investmentReturnSection}>
            <View style={[styles.pointDot]} />
            <Text style={styles.returnText}>
              Returns • ${formatAmount(getReturns)}
            </Text>
          </View>
        </View>
        <Image
          source={theme.images.graph}
          resizeMode="contain"
          style={styles.graphImage}
        />
        <View style={styles.estimatedRevenueContainer}>
          <Text style={styles.estimatedRevenueText}>
            Estimated monthly investment
          </Text>
          <Text style={styles.estimatedRevenueAmount}>
            ${formatAmount(monthlyInvest / userRates!.buy_rate)}
          </Text>
        </View>
        <View style={styles.riskReturnContainer}>
          <Icon name="infoIcon" />
          <Text style={styles.riskReturnText}>
            Returns not guaranteed. Investing involves risk. Read our
            Disclosures.
          </Text>
        </View>
        <Text style={styles.settingsText}>
          These are your starting settings, they can always be updated.
        </Text>

        <View>
          <Button
            isNotBottom
            onPress={() => createInvestPlan()}
            // onPress={() => navigate('PlanComplete')}
            title="Agree & continue"
            loading={status === 'loading'}
            buttonStyle={styles.agreeButtonStyle}
          />
          <Button
            isNotBottom
            buttonStyle={styles.cancelButtonStyle}
            titleStyle={styles.cancelTextStyle}
            title="Start over"
          />
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ReviewPlan;
