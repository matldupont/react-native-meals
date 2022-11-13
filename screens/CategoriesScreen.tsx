import { DrawerScreenProps } from '@react-navigation/drawer';
import { FlatList, StyleSheet } from 'react-native';
import { CategoryCard } from '../components/CategoryCard';
import { CATEGORIES } from '../data/dummy-data';
import { RootStackParamList } from './types';

type CategoriesScreenProps = DrawerScreenProps<
  RootStackParamList,
  'Categories'
>;

const CategoriesScreen = ({ navigation }: CategoriesScreenProps) => {
  const handleCategoryPress = (categoryId: string) => {
    navigation.navigate('Overview', { categoryId });
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { title, color, id } }) => (
        <CategoryCard
          title={title}
          color={color}
          onPress={handleCategoryPress.bind(this, id)}
        />
      )}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({});

export { CategoriesScreen };
