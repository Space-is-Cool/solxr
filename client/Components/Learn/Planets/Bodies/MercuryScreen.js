/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import MercuryInfo from './MercuryInfo.js';
import Swiper from 'react-native-swiper/src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    paddingTop: 20
  },
  image: {
    maxWidth: 375,
    height: 375,

  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  },
  info:{
    paddingLeft: 34
  }
});

const MercuryScreen = ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/mercury.png')}
      />
      <ScrollView style={styles.info}>
      <MercuryInfo/>
      </ScrollView>

    </View>
  );
};

export default MercuryScreen;

