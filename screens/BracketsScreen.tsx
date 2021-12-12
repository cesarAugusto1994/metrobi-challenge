import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function BracketsScreen({ navigation }: RootStackScreenProps<'NotFound'>) {

  const [data] = React.useState([
    '{([])}', '([{}])', '(.])', '{[{(.])}]}', '{()}', '{[(>])]}'
  ]);

  const brackets = "[]{}()<>"
  const stored: number[] = []

  const isOpennedOrClosed = (text: string) => {

    for (let bracket of text) {
      const bracketsIndex = brackets.indexOf(bracket)

      if (bracketsIndex % 2 === 0) {
        stored.push(bracketsIndex + 1)
      } else {
        if (stored.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stored.length === 0
  }

  return (
    <View style={styles.container}>
      <Text>{`4 - Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]") 
      opened and closed properly. Example: “{[]}” => true, “{(])}” => false, “{([)]}” => false`}</Text>

      <View style={styles.addedNumbers}>
        <Text style={styles.title}>Analysis</Text>
        {
          data.map(item => <Text style={styles.addedNumbersText}>{item} : {`${isOpennedOrClosed(item)}`},</Text>)
        }
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
