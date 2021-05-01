import React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



import Mercury from './MercuryAR';
import Sun from './SunAR';

// const PlanetDrawer = createDrawerNavigator();
const PlanetDrawer = createMaterialTopTabNavigator();


const SolarSystem = () => (
  <PlanetDrawer.Navigator
    initialRouteName="Mercury"
    tabBarOptions={{
      style: { backgroundColor: '#072852' },
      labelStyle: { fontSize: 14, fontWeight: 'bold' },
      activeTintColor: '#ffffff',
      indicatorStyle: { height: 3, backgroundColor: '#fff', paddingBottom: 6 },
      inactiveTintColor: '#adadad',
      tabStyle: { height: 100, justifyContent: 'flex-end' }
    }}
  >
    <PlanetDrawer.Screen name="Sun" component={Sun} />
  </PlanetDrawer.Navigator>


);

const ExpScreen = ({navigation, route}) => {
  return (
    <ViroARSceneNavigator
      initialScene={{scene: Mercury}} />
  );
};

export default SolarSystem;
