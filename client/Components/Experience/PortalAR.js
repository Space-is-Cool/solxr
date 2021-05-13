/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
'use strict';

import React, { Component } from 'react';

// import {StyleSheet} from 'react-native';

import {
  ViroSceneNavigator,
  ViroScene,
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
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./assets/pumpkin_tall_10k.obj')}
              type="jpeg" />
          </ViroPortal>
          <Viro360Image source={require('./assets/milky_way.jpeg')} />
        </ViroPortalScene>
      </ViroARScene>
    );
  };

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{scene: Galaxy}} />
    </>
  );

};
  

module.exports = Portal;
