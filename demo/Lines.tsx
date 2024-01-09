import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const LinesDemo = () => {
  const linesData = [
    { x1: 50, y1: 30, x2: 40, y2: 20, stroke: 'black', strokeWidth: 2 },
    { x1: 30, y1: 30, x2: 30, y2: 90, stroke: 'blue', strokeWidth: 1.5 },
    { x1: 50, y1: 50, x2: 90, y2: 90, stroke: 'green', strokeWidth: 3 },
  ];

  const lines = linesData.map((line, index) => (
    <View>
      <Text>{JSON.stringify(line)}</Text>
      <Svg height="150" width="150">
        <Line
          key={index}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={line.stroke}
          strokeWidth={line.strokeWidth}
        />
      </Svg>
    </View>
  ));

  return (
    <ScrollView style={styles.container}>
      {lines}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default LinesDemo;
