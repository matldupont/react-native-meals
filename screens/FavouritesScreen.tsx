import * as React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { View, StyleSheet, Text } from 'react-native';
import { useFavourites } from '../store/context/favourites-context';

import { RootStackParamList } from './types';
import { MEALS } from '../data/dummy-data';
import { MealList } from '../components/MealList';

type FavouritesScreenProps = DrawerScreenProps<
  RootStackParamList,
  'Favourites'
>;

const FavouritesScreen = ({ navigation }: FavouritesScreenProps) => {
  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate('Overview', { categoryId });
  };

  const { favourites } = useFavourites();

  const favouriteMeals = React.useMemo(() => {
    return MEALS.filter((meal) => favourites.includes(meal.id));
  }, [favourites]);

  const handleMealSelection = (mealId: string) => {
    navigation.navigate('Details', { mealId });
  };

  if (!favouriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealList meals={favouriteMeals} onSelectMeal={handleMealSelection} />;
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export { FavouritesScreen };
