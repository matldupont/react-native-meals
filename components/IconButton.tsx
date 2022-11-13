import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type IconButtonProps = {
  icon?: React.ComponentProps<typeof Ionicons>['name'];
  color?: string;
  onPress: () => void;
};

const IconButton: React.FC<IconButtonProps> = ({
  icon = 'star',
  color = 'white',
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export { IconButton };
