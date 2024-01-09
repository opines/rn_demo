import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const PathsDemo = () => {
  const demosData = [
    { d: 'M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25', fill: 'red', stroke: 'black', strokeWidth: 2, fillOpacity: 1, strokeOpacity: 1, strokeDasharray: '', strokeLinecap: 'square' },
    { d: 'M50 0 L15 100 L85 100 Z', fill: 'red', stroke: 'green', strokeWidth: 1, fillOpacity: 1, strokeOpacity: 1, strokeDasharray: '', strokeLinecap: 'butt' },
    { d: 'M50 0 L15 100 L85 100 Z', fill: 'red', stroke: 'green', strokeWidth: 5, fillOpacity: 0.5, strokeOpacity: 0.5, strokeDasharray: '10, 5', strokeLinecap: 'square' },
    { d: 'M50 0 L15 100 L85 100 Z', fill: 'red', stroke: 'green', strokeWidth: 10, fillOpacity: 0.2, strokeOpacity: 0.2, strokeDasharray: '', strokeLinecap: 'round ' },
  ];

  const demos = demosData.map((data, index) => (
    <View>
      <Text>{JSON.stringify(data)}</Text>
      <Svg height="100" width="100">
        <Path
          key={'Path' + index}
          d={data.d}
          fill={data.fill}
          stroke={data.stroke}
          strokeWidth={data.strokeWidth}
          fillOpacity={data.fillOpacity}
          strokeOpacity={data.strokeOpacity}
          strokeDasharray={data.strokeDasharray}
          // strokeLinecap={data.strokeLinecap}
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

export default PathsDemo;
