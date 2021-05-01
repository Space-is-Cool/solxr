/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import SaturnInfo from './SaturnInfo.js';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  image: {
    justifyContent: 'center',
    width: 400,
    height: 400,
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

const SaturnScreen = ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/saturn.jpg')}
      />
      <ScrollView style={styles.info}>
      <SaturnInfo/>
      </ScrollView>
    </View>
  );
};

export default SaturnScreen;
