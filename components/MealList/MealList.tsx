import * as React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';
import Meal from '../../models/meal';
import { MealItem } from './MealItem';

type MealListProps = {
  meals: Meal[];
  onSelectMeal: (mealId: string) => void;
};

const MealList: React.FC<MealListProps> = ({ meals, onSelectMeal }) => {
  const handleSelectMeal = (mealId: string) => {
    onSelectMeal(mealId);
  };

  console.log('GOT MEALS', meals);
  return (
    <View style={styles.container}>
      <FlatList
        data={meals}
        keyExtractor={(meal) => meal.id}
        renderItem={({ item: meal }) => (
          <MealItem meal={meal} onPress={handleSelectMeal} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export { MealList };
