import * as React from 'react';
import { Linking, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {

  const handleRirectoToGithub = () => {
    Linking.openURL('https://github.com/cesarAugusto1994/metrobi-challenge')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About me</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text>This project is hosted on Github</Text>
      <TouchableOpacity onPress={handleRirectoToGithub}>
        <Text>https://github.com/cesarAugusto1994/metrobi-challenge</Text>
      </TouchableOpacity>
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
