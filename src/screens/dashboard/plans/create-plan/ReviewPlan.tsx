import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Button, Header, Icon } from 'design-system';
import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import theme from 'theme';
import { DashboardStackParamList } from 'types';
import { styles } from './style';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'ReviewPlan'>;

const ReviewPlan = ({ navigation: { navigate, goBack } }: ScreenProps) => {
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
          <Text style={styles.investorText}>Kate Ventures</Text>
          <Text style={styles.amountText}>$10,930.75</Text>
          <Text style={styles.durationText}>by 20 June 2021</Text>
        </View>
        <View style={styles.investmentReturnContainer}>
          <View style={styles.investmentReturnSection}>
            <View
              style={[styles.pointDot, { backgroundColor: theme.colors.GREY }]}
            />
            <Text style={styles.returnText}>Investments • $50,400</Text>
          </View>
          <View style={styles.investmentReturnSection}>
            <View style={[styles.pointDot]} />
            <Text style={styles.returnText}>Returns • $20,803</Text>
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
          <Text style={styles.estimatedRevenueAmount}>$120</Text>
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
            onPress={() => navigate('PlanComplete')}
            title="Agree & continue"
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
