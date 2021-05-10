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


const BuggyLookUp = ({navigation, route}) => {

  const SolarSystem = () => {

    const scale = 150;
    const segments = 10;

  
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


    const circle = (radius, steps, arrayX, arrayZ) => {
      for (let i = 0; i < steps; i++) {
        arrayX[i] = (radius * Math.cos(2 * Math.PI * i / steps));
        arrayZ[i] = (radius * Math.sin(2 * Math.PI * i / steps));
      }
    };

    const [sunX, setSunX] = useState(0);
    const [sunZ, setSunZ] = useState(0);
    const [mercuryX, setMercuryX] = useState(0);
    const [mercuryZ, setMercuryZ] = useState(0);
    const [venusX, setVenusX] = useState(0);
    const [venusZ, setVenusZ] = useState(0);
    const [earthX, setEarthX] = useState(0);
    const [earthZ, setEarthZ] = useState(0);
    const [moonX, setMoonX] = useState(0);
    const [moonZ, setMoonZ] = useState(0);
    const [marsX, setMarsX] = useState(0);
    const [marsZ, setMarsZ] = useState(0);
    const [jupiterX, setJupiterX] = useState(0);
    const [jupiterZ, setJupiterZ] = useState(0);
    const [saturnX, setSaturnX] = useState(0);
    const [saturnZ, setSaturnZ] = useState(0);
    const [uranusX, setUranusX] = useState(0);
    const [uranusZ, setUranusZ] = useState(0);
    const [neptuneX, setNeptuneX] = useState(0);
    const [neptuneZ, setNeptuneZ] = useState(0);
    const sunXValues = [0];
    const sunZValues = [0];
    const mercuryXValues = [0];
    const mercuryZValues = [0];
    const venusXValues = [0];
    const venusZValues = [0];
    const earthXValues = [0];
    const earthZValues = [0];
    const moonXValues = [0];
    const moonZValues = [0];
    const marsXValues = [0];
    const marsZValues = [0];
    const jupiterXValues = [0];
    const jupiterZValues = [0];
    const saturnXValues = [0];
    const saturnZValues = [0];
    const uranusXValues = [0];
    const uranusZValues = [0];
    const neptuneXValues = [0];
    const neptuneZValues = [0];
    let sunIndex = 0;
    circle(0, 2000, sunXValues, sunZValues);
    const animateSun = () => {
      setSunX(sunXValues[sunIndex]);
      setSunZ(sunZValues[sunIndex]);
      sunIndex += 1;
      if (sunIndex === 1999) {
        sunIndex = 0;
      }
    };
    let mercuryIndex = 0;
    circle(0.013, 2000, mercuryXValues, mercuryZValues);
    const animateMercury = () => {
      setMercuryX(mercuryXValues[mercuryIndex]);
      setMercuryZ(mercuryZValues[mercuryIndex]);
      mercuryIndex += 1;
      if (mercuryIndex === 1999) {
        mercuryIndex = 0;
      }
    };
    let venusIndex = 0;
    circle(0.0241, 2000, venusXValues, venusZValues);
    const animateVenus = () => {
      setVenusX(venusXValues[venusIndex]);
      setVenusZ(venusZValues[venusIndex]);
      venusIndex += 1;
      if (venusIndex === 1999) {
        venusIndex = 0;
      }
    };
    let earthIndex = 0;
    circle(0.033, 2000, earthXValues, earthZValues);
    const animateEarth = () => {
      setEarthX(earthXValues[earthIndex]);
      setEarthZ(earthZValues[earthIndex]);
      earthIndex += 1;
      if (earthIndex === 1999) {
        earthIndex = 0;
      }
    };
    let moonIndex = 0;
    circle(0.03, 2000, moonXValues, moonZValues);
    const animateMoon = () => {
      setMoonX(moonXValues[moonIndex]);
      setMoonZ(moonZValues[moonIndex]);
      moonIndex += 1;
      if (moonIndex === 1999) {
        moonIndex = 0;
      }
    };
    let marsIndex = 0;
    circle(0.0508, 2000, marsXValues, marsZValues);
    const animateMars = () => {
      setMarsX(marsXValues[marsIndex]);
      setMarsZ(marsZValues[marsIndex]);
      marsIndex += 1;
      if (marsIndex === 1999) {
        marsIndex = 0;
      }
    };
    let jupiterIndex = 0;
    circle(0.1734, 2000, jupiterXValues, jupiterZValues);
    const animateJupiter = () => {
      setJupiterX(jupiterXValues[jupiterIndex]);
      setJupiterZ(jupiterZValues[jupiterIndex]);
      jupiterIndex += 1;
      if (jupiterIndex === 1999) {
        jupiterIndex = 0;
      }
    };
    let saturnIndex = 0;
    circle(0.317, 2000, saturnXValues, saturnZValues);
    const animateSaturn = () => {
      setSaturnX(saturnXValues[saturnIndex]);
      setSaturnZ(saturnZValues[saturnIndex]);
      saturnIndex += 1;
      if (saturnIndex === 1999) {
        saturnIndex = 0;
      }
    };
    let uranusIndex = 0;
    circle(0.6393, 2000, uranusXValues, uranusZValues);
    const animateUranus = () => {
      setUranusX(uranusXValues[uranusIndex]);
      setUranusZ(uranusZValues[uranusIndex]);
      uranusIndex += 1;
      if (uranusIndex === 1999) {
        uranusIndex = 0;
      }
    };
    let neptuneIndex = 0;
    circle(1, 2000, neptuneXValues, neptuneZValues);
    const animateNeptune = () => {
      setNeptuneX(neptuneXValues[neptuneIndex]);
      setNeptuneZ(neptuneZValues[neptuneIndex]);
      neptuneIndex += 1;
      if (neptuneIndex === 1999) {
        neptuneIndex = 0;
      }
    };
  
    return (
      <ViroARScene>
        {/* <ViroOrbitCamera position={[0, 0, 0]} focalPoint={[0, 0, -10]} active={true} /> */}
        <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]}
          position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroAmbientLight color={'#aaaaaa'} />
        <ViroSpotLight innerAngle={5} outerAngle={90} direction={[0, -1, -.2]} position={[0, 3, 1]} color="#ffffff" castsShadow={true} />
        <ViroARPlaneSelector>
          {/* <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateSun, 10)}
            // radius={bodies[0].radius / 50 + 0.4}
            radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[sunX * scale, 1, sunZ * scale]}
            materials={'sun'}
          /> */}
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateMercury, 10)}
            radius={bodies[1].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[mercuryX * scale, 1, mercuryZ * scale]}
            materials={'mercury'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateVenus, 10)}
            radius={bodies[2].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[venusX * scale, 1, venusZ * scale]}
            materials={'venus'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateEarth, 10)}
            radius={bodies[3].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[earthX * scale, 1, earthZ * scale]}
            materials={'earth'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateMoon, 10)}
            radius={bodies[4].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[moonX * scale, 1, moonZ * scale]}
            materials={'moon'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateMars, 10)}
            radius={bodies[5].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[marsX * scale, 1, marsZ * scale]}
            materials={'mars'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateJupiter, 10)}
            radius={bodies[6].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[jupiterX * scale, 1, jupiterZ * scale]}
            materials={'jupiter'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateSaturn, 10)}
            radius={bodies[7].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[saturnX * scale, 1, saturnZ * scale]}
            materials={'saturn'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateUranus, 10)}
            radius={bodies[8].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[uranusX * scale, 1, uranusZ * scale]}
            materials={'uranus'}
          />
          <ViroSphere
            heightSegmentCount={segments}
            widthSegmentCount={segments}
            onClick={() => setInterval(animateNeptune, 10)}
            radius={bodies[9].radius / 50 + 0.4}
            // radius={0.1}
            // animation={{name: 'loopRotate', run: true, loop: true}} 
            position={[neptuneX * scale, 1, neptuneZ * scale]}
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

// module.exports = LookUp;
