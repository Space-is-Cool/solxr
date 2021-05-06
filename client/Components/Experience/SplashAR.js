import React, {useState, useEffect, createContext} from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


import PlanetSwitcher from './PlanetSwitcherAR';
import LookUpAR from './LookUpAR';

const SplashAR = ({ navigation }) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>Choose Your AR Experience</Text>
      <Button
        onPress={() => navigation.navigate('PlanetSwitcher')}
        title="Planet Clicker"
      />
      <Button
        onPress={() => navigation.navigate('LookUp')}
        title="Look Up"
      />
    </View>
  );
};


const ARExperiences = ({navigation}) => {

  const ARStack = createStackNavigator();

  return (
    <ARStack.Navigator mode="modal" headerMode="none">
      <ARStack.Screen name='SplashAR' component={SplashAR} />
      <ARStack.Screen name='PlanetSwitcher' component={PlanetSwitcher} />
      <ARStack.Screen name='LookUp' component={LookUpAR} />
    </ARStack.Navigator>

  );
};

export default ARExperiences;
