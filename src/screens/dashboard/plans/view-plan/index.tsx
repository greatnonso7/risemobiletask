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
} from 'react-native';
import theme from 'theme';
import { styles } from './style';
import * as Progress from 'react-native-progress';
import { hp, wp } from 'constants/layout';
import { planInfo, transactionsList } from 'data';
import { BottomTabParamsList, DashboardStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';

type ScreenProps = StackScreenProps<
  DashboardStackParamList & BottomTabParamsList,
  'ViewPlan'
>;

const ViewPlan = ({ navigation: { navigate } }: ScreenProps) => {
  return (
    <ImageBackground
      source={theme.images['header-bg']}
      style={styles.headerImage}>
      <SafeAreaView>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}>
          <Header
            onPressLeftIcon={() => navigate('Home')}
            backgroundColor="transparent"
            leftIconStyle={styles.leftIconStyle}
            hasBackButton
            hasRightIcon={theme.images.more}
            tintColor={theme.colors.WHITE}
            headerTitle={'Start a business'}
            titleColor={theme.colors.WHITE}
            hasSubText={'for Kate Ventures'}
            rightIconStyle={styles.leftIconStyle}
          />

          <View style={styles.bodyContainer}>
            <View style={styles.planBodyContainer}>
              <Text style={styles.planText}>Plan Balance</Text>
              <Text style={styles.amountText}>$0.00</Text>
              <View style={styles.nairaValueContainer}>
                <Text style={styles.nairaValueText}>~ ₦0.00</Text>
                <Icon name="infoIconHelp" />
              </View>
            </View>
            <View style={[styles.planBodyContainer, styles.topSpacing]}>
              <Text style={styles.gainMainText}>Gains</Text>
              <Text style={styles.gainRate}>+$5,000.43 • +12.4% </Text>
            </View>
            <View style={styles.planProgressContainer}>
              <View style={styles.progressTextContainer}>
                <Text style={styles.planProgressText}>0.01 achieved</Text>
                <Text style={styles.planProgressText}>Target: $20,053.90</Text>
              </View>
              <Progress.Bar
                width={wp(335)}
                height={hp(10)}
                borderWidth={0}
                color={theme.colors.PRIMARY}
                progress={0.05}
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
    </ImageBackground>
  );
};

export default ViewPlan;
