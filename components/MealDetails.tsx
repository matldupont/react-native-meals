import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Meal from '../models/meal';

type MealDetailsProps = {
  meal?: Meal;
  style?: any;
  textStyle?: any;
};

const MealDetails: React.FC<MealDetailsProps> = ({
  meal,
  style,
  textStyle,
}) => {
  const { duration, complexity = '', affordability = '' } = meal || {};
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyle]}>{duration}min</Text>
      <Text style={[styles.detailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.detailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'center',
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export { MealDetails };
