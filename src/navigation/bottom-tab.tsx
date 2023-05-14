import React from 'react';
import { Image, ImageSourcePropType, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from 'screens/dashboard/home';
import { hp, wp } from 'constants/layout';
import { BottomTabParamsList } from 'types';
import theme from 'theme';
import Plans from 'screens/dashboard/plans';
import Wallet from 'screens/dashboard/wallet';
import Feeds from 'screens/dashboard/feeds';
import Account from 'screens/dashboard/account';

interface TabBarIconProps {
  image: ImageSourcePropType;
  focused: boolean;
  isScan?: boolean;
}

const DashboardBottomTabs = createBottomTabNavigator<BottomTabParamsList>();

const BottomTabBar = () => {
  function TabBarIcon({ image }: TabBarIconProps) {
    return (
      <View style={styles.tabBarContainer}>
        <Image
          source={image}
          resizeMode="contain"
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            height: wp(34),
            width: hp(34),
          }}
        />
      </View>
    );
  }

  return (
    <DashboardBottomTabs.Navigator
      initialRouteName="Home"
      screenOptions={{
        unmountOnBlur: true,
        tabBarStyle: {
          height: hp(100),
          backgroundColor: theme.colors.WHITE,
        },
        tabBarActiveTintColor: theme.colors.WHITE,
        tabBarLabelStyle: {
          fontSize: hp(12),
          fontFamily: theme.font.DMSansRegular,
        },
        tabBarShowLabel: false,
      }}>
      <DashboardBottomTabs.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon image={theme.images.home} focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="Plans"
        component={Plans}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon image={theme.images.plans} focused={focused} />
          ),
        }}
      />

      <DashboardBottomTabs.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon image={theme.images.wallet} focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="Feeds"
        component={Feeds}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon image={theme.images.feed} focused={focused} />
          ),
        }}
      />
      <DashboardBottomTabs.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon image={theme.images.account} focused={focused} />
          ),
        }}
      />
    </DashboardBottomTabs.Navigator>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  icon: {
    height: hp(25),
    width: wp(25),
  },
  titleStyle: {
    paddingTop: hp(5),
    fontSize: hp(14),
    fontWeight: '600',
    fontFamily: theme.font.DMSansRegular,
  },
  tabBarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: hp(5),
  },
});

export default BottomTabBar;
