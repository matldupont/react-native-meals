import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ListProps = {
  items: string[];
};

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items?.map((item) => (
        <View key={item} style={styles.item}>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: '#e2b497',
  },
  text: {
    color: '#351401',
  },
});

export { List };
