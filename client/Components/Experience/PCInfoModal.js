import React, {useState, useEffect, createContext} from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const PCInfoModal = ({ navigation }) => (
  <>
    <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.h1}>Planet Clicker</Text>
      <Text style={styles.h2}>Description:</Text>
      <Text style={styles.p}>Cycle through the Sun, Moon, and 8 planets of the Solar System</Text>
      <Text style={styles.h2}>Instructions:</Text>
      <Text style={styles.p}>Allow Solxr access to your device camera       </Text>
      <Text style={styles.p}>Point your camera towards a flat, rectangular surface on which to place the 3d models</Text>
      <Text style={styles.p}>When presented with a gray rectangle on the surface, click it!</Text>
      <Text style={styles.p}>Pinch any area of the screen not occupied by a solar body to zoom in and out</Text>
      <Text style={styles.p}>Click each solar body to cycle through all 10  </Text>
    </View>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.navigate('SplashAR')} title= "Back to AR Menu" />
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  h1: {
    fontSize: 30,
    marginVertical: 20
  },
  h2: {
    fontSize: 20,
    marginVertical: 20
  },
  p: {
    fontSize: 16,
    marginVertical: 12,
    textAlign: 'left',
    maxWidth: '80%',
    alignItems: 'flex-start',
  }
});

export default PCInfoModal;