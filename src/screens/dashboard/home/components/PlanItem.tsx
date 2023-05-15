import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../style';
import theme from 'theme';
import { formatAmount } from 'utils';

interface PlanItemProps {
  navigate: any;
  plan: any;
  reduce?: boolean;
}

const PlanItem = ({ navigate, plan, reduce }: PlanItemProps) => {
  return (
    <TouchableOpacity
      style={[styles.spacingRight, reduce && styles.noMargin]}
      activeOpacity={0.6}
      onPress={() =>
        navigate('ViewPlan', { plan_id: plan?.id, fromViewPlans: true })
      }
      key={plan?.id}>
      <Image
        style={[styles.planContainer, reduce && styles.widthStyle]}
        resizeMode="cover"
        source={theme.images['plans-card']}
      />
      <View style={styles.planBodyContainer}>
        <Text style={styles.planName}>{plan.plan_name}</Text>
        <Text style={styles.planAmount}>
          ${formatAmount(plan.total_returns)}
        </Text>
        <Text style={styles.planName}>Mixed assets</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlanItem;
