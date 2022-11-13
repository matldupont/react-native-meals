import * as React from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { MealDetails } from '../components/MealDetails';
import { List, Subtitle } from '../components/MealDetail';
import { IconButton } from '../components/IconButton';
import { useFavourites } from '../store/context/favourites-context';

type MealDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Details'
>;

const MealDetailsScreen = ({
  route: {
    params: { mealId },
  },
  navigation,
}: MealDetailsScreenProps) => {
  const [selectedMeal, setSelectedMeal] = React.useState<Meal>();

  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const isFavourite = React.useMemo(
    () => !!favourites.includes(mealId),
    [favourites, mealId]
  );

  const handleFavouriteToggle = React.useCallback(() => {
    if (isFavourite) {
      removeFavourite(mealId);
      return;
    }

    addFavourite(mealId);
  }, [isFavourite, mealId, removeFavourite, addFavourite]);

  React.useLayoutEffect(() => {
    if (mealId) {
      const meal = MEALS.find(({ id }) => id === mealId);
      navigation.setOptions({
        title: meal?.title,
        headerRight: () => {
          return (
            <IconButton
              icon={isFavourite ? 'star' : 'star-outline'}
              onPress={handleFavouriteToggle}
            />
          );
        },
      });
      setSelectedMeal(meal);
    }
  }, [mealId, navigation, handleFavouriteToggle]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal?.imageUrl }} />
      <Text style={styles.title}>Meal Details {selectedMeal?.title}</Text>
      <MealDetails meal={selectedMeal} textStyle={styles.detailText} />
      <View style={styles.outerContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>

          <List items={selectedMeal?.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List items={selectedMeal?.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: { height: 350, width: '100%' },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  outerContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});

export { MealDetailsScreen };
