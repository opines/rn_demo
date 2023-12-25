import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Svg, { Circle, Ellipse, Line } from 'react-native-svg';

const CirclesDemo = () => {
  return (
    <Svg height="120" width="120">
      <Circle cx="30" cy="30" r="20" stroke="black" strokeWidth="2" fill="red" />
      <Circle cx="80" cy="60" r="30" stroke="blue" strokeWidth="1.5" fill="yellow" />
      <Circle cx="50" cy="90" r="15" stroke="green" strokeWidth="3" fill="none" />
    </Svg>
  );
};

const EllipsesDemo = () => {
  return (
    <Svg height="150" width="150">
      <Ellipse cx="50" cy="30" rx="40" ry="20" stroke="black" strokeWidth="2" fill="red" />
      <Ellipse cx="100" cy="80" rx="20" ry="30" stroke="blue" strokeWidth="1.5" fill="yellow" />
      <Ellipse cx="70" cy="120" rx="30" ry="15" stroke="green" strokeWidth="3" fill="none" />
    </Svg>
  );
};

const LinesDemo = () => {
  return (
    <Svg height="100" width="100">
      <Line x1="10" y1="10" x2="80" y2="10" stroke="black" strokeWidth="2" />
      <Line x1="30" y1="30" x2="30" y2="90" stroke="blue" strokeWidth="1.5" />
      <Line x1="50" y1="50" x2="90" y2="90" stroke="green" strokeWidth="3" />
    </Svg>
  );
};

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(-1);

  const homeList = ['Circles','Ellipses','Line']

  const homeText = homeList.map((text, index) => (
    <Text style={styles.textButtonText}
          onPress={()=> { setCurrentPage(index) }}>{text}</Text>
  ));

  const Home = () => {
    return (
      <View style={styles.textbox}>
        {homeText}
      </View>
    );
  };

  const renderPage = () => {
    switch (currentPage) {
      case 0:
        return <CirclesDemo />;
      case 1:
        return <EllipsesDemo />;
      case 2:
        return <LinesDemo />;
      default:
        return <Home />;
    }
  };

  const homePage = () => {
    setCurrentPage(-1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={homePage}>
          <Text style={styles.buttonText}>首页</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.svgContainer}>{renderPage()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  svgContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  textbox: {
    flexDirection:'column',
    paddingHorizontal: 40,
  },
  textButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 5
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default PaginationDemo;
