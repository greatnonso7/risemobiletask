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
import { BottomTabParamsList, DashboardStackParamList } from 'types';
import { StackScreenProps } from '@react-navigation/stack';

type ScreenProps = StackScreenProps<
  BottomTabParamsList & DashboardStackParamList,
  'Home'
>;

const Home = ({ navigation: { navigate } }: ScreenProps) => {
  const [plansList, setPlansList] = useState([]);
  return (
    <ImageBackground
      source={theme.images['dashboard-bg']}
      resizeMode="stretch"
      style={styles.dashboardImageContainer}>
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <View style={styles.backgroundCover}>
            <DashboardHeader />
            <DashboardWallet />
            <Button
              isNotBottom
              hasIcon
              buttonStyle={styles.buttonStyle}
              title="Add money"
              titleStyle={styles.titleStyle}
            />
            {/* <View style={styles.backgroundCover} /> */}
            <View style={styles.investmentPlanContainer}>
              <View style={styles.createPlanContainer}>
                <Text style={styles.planMainText}>Create a plan</Text>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.viewMorePlansContainer}>
                  <Text style={[styles.viewMorePlansText]}>View all plans</Text>
                  <Image
                    source={theme.images['right-arrow']}
                    resizeMode="contain"
                    style={styles.rightArrow}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.planSubText}>
                Start your investment journey by creating a plan
              </Text>
              <ScrollView
                horizontal
                scrollEnabled={plansList.length === 0 ? false : true}
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
              <QuoteContainer />
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
