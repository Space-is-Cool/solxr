/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use strict';

import React, { Component } from 'react';

// import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
  ViroMaterials,
  ViroARScene,
  ViroAmbientLight,
  Viro360Video,
  ViroARSceneNavigator,
  Viro360Image,
  ViroUtils,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';
// import Vectors from './Vectors';
// const createReactClass = require('create-react-class');

const Portal = ({navigation, route}) => {

  const Galaxy = () => {

    return (
      <ViroARScene>
        <ViroAmbientLight color="#ffffff" intensity={200} />
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[0, 0, -1]} scale={[1, 1, 1]} opacity={0.5}>
            {/* <Viro3DObject source={require('./assets/pumpkin_tall_10k.obj')}
              type="OBJ" /> */}
            <Viro3DObject source={require('./assets/heart.obj')}
              materials={['heart']} type="OBJ" />
          </ViroPortal>
          <Viro360Image source={require('./assets/milky_way.jpeg')} />
        </ViroPortalScene>
      </ViroARScene>
    );
  };

  ViroMaterials.createMaterials({
    heart: {
      lightingModel: 'Blinn',
      diffuseTexture: require('./assets/Heart_D3.jpeg'),
      specularTexture: require('./assets/Heart_S2.jpeg'),
      writesToDepthBuffer: true,
      readsFromDepthBuffer: true,
      // opacity: [0, 0, 0]
    },
  });

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{scene: Galaxy}} />
    </>
  );

};
  

module.exports = Portal;
