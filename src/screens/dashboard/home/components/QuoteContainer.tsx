import { hp, wp } from 'constants/layout';
import { Icon } from 'design-system';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import theme from 'theme';

export interface QuoteResponseData {
  author: string;
  quote: string;
}
interface QuoteContainerProps {
  quoteData: QuoteResponseData;
}

const QuoteContainer = ({ quoteData }: QuoteContainerProps) => {
  return (
    <View style={styles.quoteContainer}>
      <View style={styles.innerQuoteContainer}>
        <View style={styles.quoteBodyContainer}>
          <Text style={styles.quoteTitleText}>Today's Quote</Text>
          <View style={styles.quoteTitleDivider} />
          <Text style={styles.quoteText}>{quoteData?.quote}</Text>
          <View style={styles.quoteCreatorContainer}>
            <Text style={styles.quoteCreator}>{quoteData?.author}</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.shareIconContainer}>
              <Icon name="shareIcon" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quoteContainer: {
    marginHorizontal: wp(20),
    borderWidth: hp(5),
    borderColor: theme.colors.PRIMARY_LIGHT_100,
    marginTop: hp(34),
    borderRadius: hp(12),
  },
  innerQuoteContainer: {
    borderWidth: hp(3),
    borderColor: theme.colors.PRIMARY_LIGHT_COLOR,
    backgroundColor: theme.colors.PRIMARY,
    padding: hp(20),
    borderRadius: hp(12),
  },
  quoteBodyContainer: {},
  quoteTitleText: {
    fontFamily: theme.font.DMSansBold,
    color: theme.colors.WHITE,
    fontSize: hp(14),
    lineHeight: hp(18),
    textTransform: 'uppercase',
  },
  quoteTitleDivider: {
    width: wp(27),
    height: hp(4),
    backgroundColor: theme.colors.WHITE,
    marginVertical: hp(20),
  },
  quoteText: {
    fontFamily: theme.font.DMSansRegular,
    fontSize: hp(15),
    lineHeight: hp(22),
    color: theme.colors.WHITE,
  },
  quoteCreatorContainer: {
    marginTop: hp(23),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quoteCreator: {
    fontFamily: theme.font.DMSansBold,
    fontSize: hp(15),
    lineHeight: hp(19),
    color: theme.colors.WHITE,
  },
  shareIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.OFF_WHITE_300,
  },
});

export default QuoteContainer;
