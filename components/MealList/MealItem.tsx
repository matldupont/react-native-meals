import {
  Image,
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Meal from '../../models/meal';
import { MealDetails } from '../MealDetails';

type MealItemProps = {
  meal: Meal;
  onPress: (mealId: string) => void;
};

const MealItem: React.FC<MealItemProps> = ({ meal, onPress }) => {
  const { imageUrl, title, complexity, duration, affordability } = meal;

  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{ color: '#ccc' }}
        style={({ pressed }) =>
          Platform.OS === 'ios' && pressed ? styles.buttonPressed : null
        }
        onPress={onPress.bind(this, meal.id)}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails meal={meal} />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 8,
    backgroundColor: 'white',
    flex: 1,

    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },

  buttonPressed: {
    opacity: 0.5,
  },
  image: { height: 200, width: '100%' },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 8,
  },
});

export { MealItem };
