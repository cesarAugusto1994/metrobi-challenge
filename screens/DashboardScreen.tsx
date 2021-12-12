import * as React from 'react';
import { StyleSheet } from 'react-native';
import Dashboard from '../components/Dashboard';

import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function DashboardScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>

      <Dashboard navigation={navigation} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
