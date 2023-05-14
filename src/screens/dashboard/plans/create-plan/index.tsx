import { StackScreenProps } from '@react-navigation/stack';
import Screen from 'components/Screen';
import { Button, Header } from 'design-system';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { DashboardStackParamList } from 'types';
import { styles } from './style';
import theme from 'theme';
import { investOptions } from 'data';

type ScreenProps = StackScreenProps<DashboardStackParamList, 'CreatePlan'>;

const CreatePlan = ({ navigation: { navigate, goBack } }: ScreenProps) => {
  return (
    <Screen>
      <Header
        hasCloseButton
        onPressLeftIcon={() => goBack()}
        headerTitle="Create a plan"
      />

      <View style={styles.bodyContainer}>
        <Text style={[styles.mainText, styles.alignText]}>
          Reach your goals faster
        </Text>
        <Image
          source={theme.images.invest}
          style={styles.investIcon}
          resizeMode="contain"
        />
        <View style={styles.investOptionsContainer}>
          {investOptions.map(options => {
            return (
              <View key={options.id} style={styles.optionItemContainer}>
                <View style={styles.optionIconContainer}>
                  <Image
                    source={options.icon}
                    resizeMode="contain"
                    style={styles.optionIcon}
                  />
                </View>
                <View style={styles.optionTextContainer}>
                  <Text style={styles.optionHeaderText}>{options.title}</Text>
                  <Text style={styles.optionBodyText}>
                    {options.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>

      <Button onPress={() => navigate('PlanGoal')} title="Continue" />
    </Screen>
  );
};

export default CreatePlan;
