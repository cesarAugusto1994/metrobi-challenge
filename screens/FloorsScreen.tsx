import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function ParadoxScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>5 - A building has 100 floors. One of the floors is the highest floor an egg can be dropped
        from without breaking. If an egg is dropped from above that floor, it will break. If it is
        dropped from that floor or below, it will be completely undamaged and you can drop the egg again. Given two eggs, find the highest floor an egg can be dropped from without
        breaking, with as few drops as possible on the worst-case scenario.</Text>

        <Text style={styles.response}>Response: 39º Floor</Text>
        <Text style={styles.response}>Worst Case: 14 Times</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
  },
  response: {
    margin: 20,
    fontSize: 20
  }
});
