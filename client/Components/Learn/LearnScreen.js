import React from 'react';
import { View, Text } from 'react-native';
import PlanetsScreen from './Planets/PlanetsScreen.js';

const LearnScreen = ({navigation, route}) => {
//need to create a selective render of either the planet screen or tech screen based on what user clicks
//need to add onClick property to an image??? 
//how do we css the text w/ the image? should we just make an image w/ text baked in?



  return (
    <View>
      <Text>Select Planets</Text>
      <PlanetsScreen />
      <Text>Select Technology</Text>
      {/* <TechScreen /> */}

    </View>
  );
};

export default LearnScreen;
