/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';
import MoonInfo from './MoonInfo.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  image: {
    justifyContent: 'center',
    width: 415,
    height: 415,
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

const MoonScreen = ({navigation, route}) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../assets/moon.jpg')}
      />
      <ScrollView style={styles.info}>
      <MoonInfo/>
      </ScrollView>
    </View>
  );
};

export default MoonScreen;
