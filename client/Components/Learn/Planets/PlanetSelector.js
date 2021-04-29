/* eslint-disable no-unused-vars */
import React, {Component, useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SunScreen from './Bodies/SunScreen';
import MercuryScreen from './Bodies/MercuryScreen';
import VenusScreen from './Bodies/VenusScreen';
import Swiper from 'react-native-swiper/src';

const PlanetSelector = () => {
  return (
    <Swiper
      loop={false}
    >
      <SunScreen/>
      <MercuryScreen/>
      <VenusScreen/>
    </Swiper>
  );
};

export default PlanetSelector;
