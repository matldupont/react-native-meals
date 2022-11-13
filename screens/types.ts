import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Drawer: undefined;
  Favourites: undefined;
  Categories: undefined;
  Overview: { categoryId: string };
  Details: { mealId: string };
};

export type UseNavigation = NavigationProp<ReactNavigation.RootParamList>;
