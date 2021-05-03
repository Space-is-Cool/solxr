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
  ViroARPlaneSelector
} from 'react-viro';


const PlanetSelector = ({navigation, route}) => {

  const PlanetSwitcher = () => {

    const bodies = [
      {position: 0, name: 'sun', radius: 1},
      {position: 1, name: 'mercury', radius: 0.45},
      {position: 2, name: 'venus', radius: 0.48},
      {position: 3, name: 'earth', radius: 0.5},
      {position: 4, name: 'moon', radius: 0.25},
      {position: 5, name: 'mars', radius: 0.387},
      {position: 6, name: 'jupiter', radius: 1.6},
      {position: 7, name: 'saturn', radius: 1.4},
      {position: 8, name: 'uranus', radius: 0.862},
      {position: 9, name: 'neptune', radius: 0.8},
    ];

    const [planet, setPlanet] = useState({position: 0, name: 'sun', radius: 1});


    const changePlanet = () => {
      console.log('change the planet', planet);
      
      setPlanet(planet.position === 9
        ? bodies[0]
        : bodies[planet.position + 1]);
    };
  
    return (
      <ViroARScene
        onClick={(p, s) => console.log('click click clickx', p[0], s)}
        onSwipe={((p, s) => console.log(p, s))}
      >
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector
          onSwipe={() => console.log('the swipe the swipe')}
        >
          <ViroSphere
            onSwipe={value => console.log('theres been a swipe!!!!', value)}
            heightSegmentCount={50}
            widthSegmentCount={50}
            radius={planet.radius * 1}
            animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[0, 2, 0]}
            materials={planet.name}
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
        initialScene={{scene: PlanetSwitcher}} />
    </>
  );
};

module.exports = PlanetSelector;
