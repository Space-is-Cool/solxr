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
  ViroARSceneNavigator,
  ViroARPlane,
  ViroARPlaneSelector
} from 'react-viro';

import PlanetMenu from './PlanetMenu';

    


const PlanetSelector = ({navigation, route}) => {

  const [planet, setPlanet] = useState('mercury');

  const selectPlanet = (newPlanet) => {
    console.log('select planet!', planet, newPlanet);
    setPlanet(newPlanet);
  };


  const activePlanet = () => {
    const [material, setMaterial] = useState('sun');
    // const [radius, setRadius] = useState(0.2);
    const changePlanet = () => {
      const bodyArray = ['sun', 'mercury', 'venus', 'earth', 'moon', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];
      const current = bodyArray.indexOf(material);
      console.log(current, material);
      setMaterial(bodyArray[current === 9
        ? 0
        : current + 1]);

      console.log('clack!');


      // material === 'mercury'
      //   ? setRadius(0.534)
      //   : setRadius(0.221);
    };
  
    return (
      <ViroARScene
        // onFuse={() => console.log('fusing')}
        onClick={(p, s) => console.log('click click clickx', p[0], s)}
        onSwipe={((p, s) => console.log(p, s))}
      >
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector
        >
          <ViroSphere
            heightSegmentCount={50}
            widthSegmentCount={50}
            radius={0.5}
            animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0, 1, 0]}
            materials={[material]}
            onClick={changePlanet}
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

        initialScene={{scene: activePlanet}} />
    </>
  );
};

module.exports = PlanetSelector;
