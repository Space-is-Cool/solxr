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
          {/* front view */}
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/atacoma_desert4k.tiff')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          {/* back view */}
          <ViroPortal position={[0, 0, 1]} scale={[.1, .1, .1]} rotation={[0, 180, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/milky_way.jpeg')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          <ViroPortal position={[1, 0, 0]} scale={[.1, .1, .1]} rotation={[0, 270, 0]} opacity={1}>
            {/* right hand side view */}
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/space_shuttle360.png')} />
        </ViroPortalScene>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={() => {}}>
          {/* left hand side view */}
          <ViroPortal position={[-1, 0, 0]} scale={[.1, .1, .1]} rotation={[0, 90, 0]} opacity={1}>
            <Viro3DObject source={require('./assets/portal_ship.vrx')}
              resources={[require('./assets/portal_ship_diffuse.png'),
                require('./assets/portal_ship_normal.png'),
                require('./assets/portal_ship_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require('./assets/earth_moon.jpeg')} />
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
