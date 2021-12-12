import * as React from 'react';
import { Button, Dimensions, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { BarChart, PieChart, ProgressChart } from 'react-native-chart-kit';
import { Text, View } from '../components/Themed';

import { RootStackScreenProps } from '../types';


const chartConfig = {
  backgroundGradientFrom: '#FFF',
  backgroundGradientTo: '#FFF',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`
}

const screenWidth = Dimensions.get('screen').width

export default function ParadoxScreen({ navigation }: RootStackScreenProps<'NotFound'>) {

  const useLiveanimation = (duration) => {

    const [progress, setProgress] = React.useState(0)
    const [startTime, setsStartTime] = React.useState(Date.now())

    React.useEffect(() => {
      let fr = 0
      const animation = () => {
        const now = Date.now() - startTime
        if (now < duration) {
          fr = requestAnimationFrame(animation)
        }
        setProgress(Math.min(1, now / duration))
      }
      animation()
      return () => cancelAnimationFrame(fr)
    }, [startTime, duration])
    const reset = () => { setsStartTime(Date.now()) }
    return [progress, reset]
  }

  const [progress, reset] = useLiveanimation(1000)

  const data = [
    { name: 'Tortoise', score: 49 + progress * 25, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Achilles', score: 0 + progress * 50, color: '#956', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ]

  const data2 = [
    { name: 'Tortoise', score: 74 + progress * 12.5, color: '#345', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Achilles', score: 50 + progress * 25, color: '#852', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  ]

  const data4 = {
    labels: ['Tortoise', 'Achilles', 'Tortoise', 'Achilles'],
    datasets: [{
      data: [(49 + progress * 25), 0 + progress * 50, 74 + progress * 12.5, 50 + progress * 25]
    }]
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an
          interface(we would like to see the paradox demonstrated).</Text>

        <Text>Tortoise progress: {Math.round(progress * 25)}%</Text>
        <Text>Achilles progress: {Math.round(progress * 50)}%</Text>

        <Text>Tortoise progress: {Math.round(progress * 12)}%</Text>
        <Text>Achilles progress: {Math.round(progress * 25)}%</Text>

        <Text>Tortoise progress: {Math.round(progress * 6)}%</Text>
        <Text>Achilles progress: {Math.round(progress * 12)}%</Text>

        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="score"
          backgroundColor="transparent"
          paddingLeft="15"
        />

        <PieChart
          data={data2}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="score"
          backgroundColor="transparent"
          paddingLeft="15"
        />

        <BarChart
          // style={graphStyle}
          data={data4}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />

        <Button title="lets go!" onPress={reset} />

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
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
