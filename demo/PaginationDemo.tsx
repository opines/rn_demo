import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PathsDemo from './Paths';
import CirclesDemo from './Circles';
import EllipsesDemo from './Ellipses';
import LinesDemo from './Lines';

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(-1);

  const homeList = ['Path', 'Rect', 'Circle', 'Ellipse', 'Polygon', 'Polyline', 'Image', 'Use', 'Line']

  const homeText = homeList.map((text, index) => (
    <Text style={styles.textButtonText}
      onPress={() => { setCurrentPage(index) }}>{text}</Text>
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
        return <PathsDemo />;
      case 1:
      // return <RectsDemo />;
      case 2:
        return <CirclesDemo />;
      case 3:
        return <EllipsesDemo />;
      case 4:
      // return <PolygonsDemo />;
      case 5:
      // return <PolylinesDemo />;
      case 6:
      // return <ImagesDemo />;
      case 7:
      // return <UsesDemo />;
      case 8:
      // return <LinesDemo />;
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
    flexDirection: 'column',
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
