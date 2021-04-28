import React, {useState} from 'react';
import { View, Text } from 'react-native';
import data from './data/bodiesData';

const PlanetsScreen = ({navigation, route}) => {

  const {isPlanet, funFacts, specialChars, moons, name, AKA, latin} = data.sun;

  const [planetView, setplanetView] = useState('data');


  //now need to create a giant switcher for rendering screen for each planet card

  return (
    <View>
      <Text>{funFacts}</Text>
    </View>
  );
};

export default PlanetsScreen;
