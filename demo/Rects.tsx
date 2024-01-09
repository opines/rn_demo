import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const CirclesDemo = () => {
  const circlesData = [
    { cx: 30, cy: 30, r: 20, stroke: 'black', strokeWidth: 2, fill: 'red' },
    { cx: 0, cy: 0, r: 30, stroke: 'green', strokeWidth: 3, fill: 'blue' },
    { cx: 80, cy: 60, r: 30, stroke: 'blue', strokeWidth: 1.5, fill: 'yellow' },
    { cx: 50, cy: 90, r: 15, stroke: 'green', strokeWidth: 3, fill: 'none' },
    { cx: -10, cy: 0, r: 50, stroke: 'green', strokeWidth: 3, fill: 'none' },
  ];

  const circles = circlesData.map((circle, index) => (
    <View>
      <Text>{JSON.stringify(circle)}</Text>
      <Svg height="120" width="120">
        <Circle
          key={'Circle' + index}
          cx={circle.cx}
          cy={circle.cy}
          r={circle.r}
          stroke={circle.stroke}
          strokeWidth={circle.strokeWidth}
          fill={circle.fill}
        />
      </Svg>
    </View>
  ));

  return (
    <ScrollView style={styles.container}>
      {circles}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default CirclesDemo;
