import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';

const EllipsesDemo = () => {
  const demosData = [
    { cx: 50, cy: 30, rx: 40, ry: 20, stroke: 'black', strokeWidth: 2, fill: 'red' },
    { cx: 100, cy: 80, rx: 20, ry: 30, stroke: 'blue', strokeWidth: 1.5, fill: 'yellow' },
    { cx: 70, cy: 120, rx: 30, ry: 15, stroke: 'green', strokeWidth: 3, fill: 'none' },
  ];

  const demos = demosData.map((data, index) => (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      <Svg height="150" width="150">
        <Ellipse
          key={'Ellipse' + index}
          cx={data.cx}
          cy={data.cy}
          rx={data.rx}
          ry={data.ry}
          stroke={data.stroke}
          strokeWidth={data.strokeWidth}
          fill={data.fill}
        />
      </Svg>
    </View>
  ));

  return (
    <ScrollView style={styles.container}>
      {demos}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});

export default EllipsesDemo;
