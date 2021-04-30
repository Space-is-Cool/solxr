/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import bodies from '../data/bodiesData.js';

class EarthInfo extends Component {


  render() {
    return ( 
      <Text style={styles.text}>{bodies.earth.name}</Text>
    );
  }
}

export default EarthInfo;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#115268'
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  firstHeaderContainer: {
    backgroundColor: '#115268',
  },
  firstHeader: {
    marginHorizontal: 10,
    backgroundColor: '#bcb5ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 50,
  },
  customContent: {
    backgroundColor: '#8ac7db',
    height: 30
  },
  text: {
    textAlign: 'center',
    color: 'white'
  },
  textTwo: {
  }
});
