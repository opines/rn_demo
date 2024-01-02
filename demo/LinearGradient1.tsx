import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Ellipse,Defs,LinearGradient,Stop,Path,G } from 'react-native-svg';

function LinearGradient1() {

  return (
    <View style={styles.container}>
      <Svg height="24" width="58" viewBox="0 0 938 938">
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <Stop offset="0" stopColor="#FFD080" stopOpacity="1" />
            <Stop offset="1" stopColor="red" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        <G>
          <Path d="M325.818 651.636c-179.944 0 -325.818 -145.874 -325.818 -325.818 s145.874 -325.818 325.818 -325.818h704c318.116 0 576 257.884 576 257.884 576 576v448c0 -205.651 -171.923 -372.364 -384 -372.364h-0z" fill="url(#grad)"></Path>
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default LinearGradient1;
