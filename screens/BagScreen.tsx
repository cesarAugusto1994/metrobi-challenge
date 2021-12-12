import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';

export default function ParadoxScreen({ navigation }: RootStackScreenProps<'NotFound'>) {

  const [carrotTypes] = React.useState([{ kg: 5, price: 100 }, { kg: 7, price: 150 }, { kg: 3, price: 70 }])
  const [capacity] = React.useState(36)

  function getMaxValue(data, target) {
    function iteration(index, bag, weight, total) {
      if (weight > target) return;
      if (weight === target) {
        if (!result || total < result.total) result = { bag, weight, total };
        return;
      }
      let temp = [...bag];
      temp[index]++;
      iteration(index, temp, weight + data[index].kg, total + data[index].price);
      if (++index >= data.length) return;
      iteration(index, bag, weight, total);
    }

    var result;
    iteration(0, data.map(_ => 0), 0, 0);
    return result;
  }

  const bag = getMaxValue(carrotTypes, capacity);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>7 - Think that you have an unlimited number of carrots, but a limited number of carrot
        types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
        weight and a price. Write a function that takes carrotTypes and capacity and return the
        maximum value the bag can hold.
      </Text>

      <Text>
        {`Example:
carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
capacity = 36 //kg
getMaxValue(carrotTypes, capacity)
`}
      </Text>
      <Text>Total: {bag.total}</Text>
      <Text>Capacity: {bag.weight}</Text>

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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
