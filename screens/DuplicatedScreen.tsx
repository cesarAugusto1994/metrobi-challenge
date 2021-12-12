import * as React from 'react';
import { StyleSheet, TextInput, Button } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function DuplicatedScreen({ navigation }: RootStackScreenProps<'NotFound'>) {

  const [input, onChangeInput] = React.useState("");
  const [data, setData] = React.useState([]);
  const [duplicates, setDuplicates] = React.useState([]);

  const handleAddNumberIntoArray = () => {
    if (input) {
      setData([...data, input])
    }
    onChangeInput("")
  }

  React.useEffect(() => {

    let sorted = data.slice().sort();
    const result = []

    for (let i = 0; i < sorted.length - 1; i++) {
      if (sorted[i + 1] === sorted[i]) {
        result.push(sorted[i])
      }
    }

    setDuplicates(result)

  }, [data])

  return (
    <View style={styles.container}>
      <Text>1 - Write a javascript function that finds the duplicate items in any given array.</Text>

      <View style={styles.addedNumbers}>
        <Text style={styles.title}>Added Numbers</Text>
        <Text style={styles.addedNumbersText}>
          [{
            data.map(item => <>{item},</>)
          }]
        </Text>
      </View>

      <View style={styles.addedNumbers}>
        <Text style={styles.title}>Duplicated Numbers</Text>
        <Text style={styles.addedNumbersText}>
          [{
            duplicates.map(item => <>{item},</>)
          }]
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeInput}
          value={input}
          focusable
          keyboardType="numeric"
        />
        <Button
          title="Add"
          onPress={handleAddNumberIntoArray}
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
  addedNumbers: {
    flexDirection: 'column',
    marginTop: 20,
    alignItems: 'center'
  },
  addedNumbersText: {
    fontSize: 16
  }
});
