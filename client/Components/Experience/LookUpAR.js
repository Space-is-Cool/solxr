'use strict';

import React, { Component, useState } from 'react';

import {
  ViroARScene,
  ViroAmbientLight,
  ViroSpotLight,
  ViroMaterials,
  ViroAnimations,
  ViroSphere,
  ViroARSceneNavigator,
  ViroARPlaneSelector,
  ViroOrbitCamera
} from 'react-viro';


const LookUp = ({navigation, route}) => {

  const SolarSystem = () => {

    const scale = 300;
    const segments = 20;

  
    const bodies = [
      {position: 0, name: 'sun', radius: 109.2},
      {position: 1, name: 'mercury', radius: 10.97},
      {position: 2, name: 'venus', radius: 0.9499},
      {position: 3, name: 'earth', radius: 1},
      {position: 4, name: 'moon', radius: 0.2727},
      {position: 5, name: 'mars', radius: 0.3829},
      {position: 6, name: 'jupiter', radius: 10.97},
      {position: 7, name: 'saturn', radius: 9.140},
      {position: 8, name: 'uranus', radius: 3.981},
      {position: 9, name: 'neptune', radius: 3.865},
    ];
  
    return (
      <ViroARScene>
        {/* <ViroOrbitCamera position={[0, 0, 0]} focalPoint={[0, 0, -10]} active={true} /> */}
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector>
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[0].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0, 1, 0]}
            materials={'sun'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[1].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.013 * scale, 1, 0]}
            materials={'mercury'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[2].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.0241 * scale, 1, 0]}
            materials={'venus'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[3].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.033 * scale, 1, 0]}
            materials={'earth'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[4].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.03 * scale, 1, 0.3]}
            materials={'moon'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[5].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.0508 * scale, 1, 0]}
            materials={'mars'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[6].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.1734 * scale, 1, 0]}
            materials={'jupiter'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[7].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.317 * scale, 1, 0]}
            materials={'saturn'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[8].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0.6393 * scale, 1, 0]}
            materials={'uranus'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            radius={bodies[9].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[1 * scale, 1, 0]}
            materials={'neptune'}
          />
        </ViroARPlaneSelector>

      </ViroARScene>
    );
  };

  ViroMaterials.createMaterials({
    sun: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_sun.jpeg')
    },
    mercury: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_mercury.jpeg')
    },
    venus: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/8k_venus.jpeg')
    },
    earth: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_earth.jpeg')
    },
    moon: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_moon.jpeg')
    },
    mars: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/8k_mars.jpeg')
    },
    jupiter: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_jupiter.jpeg')
    },
    saturn: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_saturn.jpeg')
    },
    uranus: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_uranus.jpeg')
    },
    neptune: { shininess: 2.0,
      // lightingModel: "Constant",
      diffuseTexture: require('./assets/2k_neptune.jpeg')
    }
  });
  
  ViroAnimations.registerAnimations({
    loopRotate: {properties: {rotateY: '+=45'}, duration: 6000},
  });

  return (
    <>
      <ViroARSceneNavigator
        initialScene={{scene: SolarSystem}} />
    </>
  );
};

module.exports = LookUp;
