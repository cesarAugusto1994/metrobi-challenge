import * as React from 'react';
import { StyleSheet, TextInput, Button, ScrollView, FlatList } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

const renderItem = ({ item }) => {
  return (
    <Text style={styles.cardText}>{item}</Text>
  );
};

export default function AsyncScreen({ navigation }: RootStackScreenProps<'NotFound'>) {

  const [data] = React.useState(["A", "B", "C", "D", "E", "F", "G", "H"]);
  const [show, setShow] = React.useState("")
  const [log, setLog] = React.useState([]);

  const init = () => {
    setShow("")
    data.forEach((item, index) => {
      setTimeout(() => {
        setShow(item)
        const string = `${item} was printed after ${Math.pow(2, index)} seconds.`
        setLog([...log, string])
      }, 1000 * Math.pow(2, index))
    })
  }

  React.useEffect(() => {
    init();
    () => setLog([])
  }, [])

  return (
    <View style={styles.container}>
      <Text>2 - Write an async javascript function that writes every item in any given array with 1, 2,
        4, 8, ... seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
        seconds, “c” is printed in 4 seconds, ...</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Array</Text>
        <Text style={styles.cardText}>
          [{
            data.map(item => <>{item},</>)
          }]
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Async</Text>
        <Text style={styles.cardText}>{show}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Log</Text>
        <FlatList
          data={log}
          renderItem={renderItem}
          keyExtractor={(item) => Math.random()}
        />
      </View>

    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20
  },
  title: {
    fontSize: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
  },
  card: {
    marginTop: 20,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 16
  }
});
