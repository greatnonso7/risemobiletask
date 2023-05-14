import Screen from 'components/Screen';
import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import theme from 'theme';
import { styles } from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import DashboardHeader from './components/DashboardHeader';
import DashboardWallet from './components/DashboardWallet';

const Home = () => {
  return (
    <ImageBackground
      source={theme.images['dashboard-bg']}
      resizeMode="contain"
      style={styles.dashboardImageContainer}>
      <SafeAreaView>
        <DashboardHeader />
        <DashboardWallet />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;
