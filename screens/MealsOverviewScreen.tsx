import * as React from 'react';
import { RootStackParamList } from './types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import { MealList } from '../components/MealList';

type MealsOverviewScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Overview'
>;

const MealsOverviewScreen = ({
  route: {
    params: { categoryId },
  },
  navigation,
}: MealsOverviewScreenProps) => {
  const displayedMeals = MEALS.filter(({ categoryIds }) =>
    categoryIds.find((id: string) => id === categoryId)
  );

  React.useLayoutEffect(() => {
    if (categoryId) {
      navigation.setOptions({
        title: CATEGORIES.find(({ id }) => categoryId === id)?.title,
      });
    }
  }, [categoryId, navigation]);

  const handleMealSelection = (mealId: string) => {
    navigation.navigate('Details', { mealId });
  };

  return <MealList meals={displayedMeals} onSelectMeal={handleMealSelection} />;
};

export { MealsOverviewScreen };
