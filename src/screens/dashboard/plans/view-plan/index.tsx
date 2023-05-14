import { Button, Header, Icon } from 'design-system';
import React from 'react';
import { View, Text, ImageBackground, SafeAreaView, Image } from 'react-native';
import theme from 'theme';
import { styles } from './style';

const ViewPlan = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={theme.images['header-bg']}
        style={styles.headerImage}>
        <SafeAreaView>
          <Header
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

          <View>
            <Text>Plan Balance</Text>
            <Text>$0.00</Text>
            <View>
              <Text>~ ₦0.00</Text>
              <Icon name="infoIconHelp" />
            </View>
            <Text>Gains</Text>
            <Text>+$5,000.43 • +12.4% </Text>
          </View>
          <View>
            <Text>0.01 achieved</Text>
            <Text>Target: $20,053.90</Text>
          </View>
          <View>
            <Text>Results are updated monthly</Text>
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
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ViewPlan;
