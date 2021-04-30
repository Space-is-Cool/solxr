import React from 'react';
import { ViroARSceneNavigator } from 'react-viro';

import Mercury from './MercuryAR';

const ExpScreen = ({navigation, route}) => {
  return (
    <ViroARSceneNavigator
      initialScene={{scene: Mercury}} />
  );
};

export default ExpScreen;
