import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function CssScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <Text>3 - Write the necessary html-css code for generating the below figure (using flex).</Text>
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.segment}>
          <View style={[styles.card4, { height: 70, backgroundColor: '#985' }]}><Text style={styles.text}>card 1</Text></View>
          <View style={[styles.card6, { height: 100, backgroundColor: '#452' }]}><Text style={styles.text}>card 2</Text></View>
        </View>
        <View style={styles.segment}>
          <View style={[styles.card4, { height: 85, backgroundColor: '#745', marginTop: -32 }]}><Text style={styles.text}>card 3</Text></View>
          <View style={[styles.card6, { height: 53, backgroundColor: '#722' }]}><Text style={styles.text}>card 4</Text></View>
        </View>
        <View style={styles.segment}>
          <View style={[styles.card6, { height: 50, backgroundColor: 'steelblue' }]}><Text style={styles.text}>card 5</Text></View>
          <View style={[styles.card4, { height: 50, backgroundColor: '#852' }]}><Text style={styles.text}>card 6</Text></View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 15
  },
  header: {
    backgroundColor: 'powderblue',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  },
  segment: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  card4: {
    width: '40%'
  },
  card6: {
    width: '60%'
  },
  footer: {
    backgroundColor: 'red',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

});
