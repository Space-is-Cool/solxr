/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import SunScreen from './Bodies/SunScreen';
import MercuryScreen from './Bodies/MercuryScreen';
import VenusScreen from './Bodies/VenusScreen';




const PlanetsScreen = ({navigation, route}) => {

  const [bodyIndex, setBodyIndex] = useState(0);
  const bodies = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

  const onSwipeRight = () => {
    console.log('swipe right!!!');
    bodyIndex !== 9 && setBodyIndex(bodyIndex + 1);
  };

  const onSwipeLeft = () => {
    console.log('swipe left!!!');
    bodyIndex && setBodyIndex(bodyIndex - 1);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  const bodySwitcher = () => {
    switch (bodyIndex) {
    case 0 :
      return <SunScreen />;
    case 1 :
      return <MercuryScreen />;
    case 2 :
      return <VenusScreen />;
    }
  };

  //now need to create a giant switcher for rendering screen for each planet card

  return (
    // <View>
    <GestureRecognizer
      config={config}
      onSwipeRight={onSwipeRight}
      onSwipeLeft={onSwipeLeft}
    >
    </GestureRecognizer>
  // <Text>hi</Text>



  // </View>
  );
};

export default PlanetsScreen;
