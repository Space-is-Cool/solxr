// /* eslint-disable no-unused-vars */
// import React, {Component, useState} from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SunScreen from './Bodies/SunScreen';
// import MercuryScreen from './Bodies/MercuryScreen';
// import VenusScreen from './Bodies/VenusScreen';
// import Swiper from 'react-native-swiper/src';



// // const PlanetSelector = () => {
// //   return (
// //     <Swiper style=
// //       loop={false}
// //     >
// //       <SunScreen/>
// //       <MercuryScreen/>
// //       <VenusScreen/>
// //     </Swiper>
// //   );
// // };

// const PlanetSelector = () => {
//   return (
//       <SunScreen/>
//   );
// };

// export default PlanetSelector;


import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Swiper from 'react-native-swiper/src';

const styles = StyleSheet.create({
  wrapper: {
    // marginTop:10,
    height: '100%',
    width: window.width,
    // backgroundColor:'blue'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true} removeClippedSubviews={false}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}
