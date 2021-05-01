'use strict';

import React, { Component, useState } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import {
  ViroARScene,
  ViroConstants,
  ViroAmbientLight,
  ViroSpotLight,
  ViroMaterials,
  ViroAnimations,
  ViroSphere,
  ViroARSceneNavigator
} from 'react-viro';

// export default class HelloWorldSceneAR extends Component {
const Mercury = () => {

  const [text, setText] = useState('Initializing AR...');

  const onInitialized = (state, reason) => {
    if (state === ViroConstants.TRACKING_NORMAL) {
      setText('woof arf');
    } else if (state === ViroConstants.TRACKING_NONE) {
      setText('arf arf arf');
    }
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized} >
      <ViroAmbientLight color="#ffffff" intensity={200}/>
      <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
        position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
      <ViroAmbientLight color={'#aaaaaa'} />
      <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
      <ViroSphere
        heightSegmentCount={100}
        widthSegmentCount={100}
        radius={0.5}
        animation={{name: 'loopRotate', run: true, loop: true}} 
        position={[3, 0, -1]}
        materials={['mercury']}
      />
    </ViroARScene>
  );
};
    
ViroMaterials.createMaterials({
  mercury: { shininess: 2.0,
    // lightingModel: "Constant",
    diffuseTexture: require('./assets/2k_mercury.jpeg')
  }
});

ViroAnimations.registerAnimations({
  loopRotate: {properties: {rotateY: '+=45'}, duration: 6000},
});

const MercuryScene = ({navigation, route}) => {
  return (
    <ViroARSceneNavigator
      initialScene={{scene: Mercury}} />
  );
};

module.exports = MercuryScene;
