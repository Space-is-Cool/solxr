/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useEffect, createContext} from 'react';
import { Button, View, Text, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';
import { FontContext } from '../Root/Context';


import PlanetSwitcher from './PlanetSwitcherAR';
import LookUpAR from './LookUpAR';
import PortalAR from './PortalAR';

const SplashAR = ({ navigation }) => {
  const [rendering, setRendering] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setRendering(false);
  }, [isFocused]);

  return (
    
    <FontContext.Consumer>
      {({ Font }) => (
        <>
          <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{...Font, ...{ fontSize: 30 }}}>Choose Your AR Experience</Text>
            <Text></Text>
            <Text></Text>
            <Button
              onPress={() => {
                setRendering(true);
                setTimeout(() => navigation.navigate('PlanetSwitcher'), 10);
              }} title="Planet Clicker"
            />
            <Text></Text>
            <Button
              onPress={() => {
                setRendering(true);
                setTimeout(() => navigation.navigate('LookUp'), 10);
              }}
              title="Look Up"
            />
            <Text></Text>
            <Button
              onPress={() => {
                setRendering(true);
                setTimeout(() => navigation.navigate('Portal'), 10);
              }}
              title="Portal"
            />

          </View>
          <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
            {rendering && (
              <>
                <Text style={{...Font}}>AR Launching: Please standby</Text>
                <Text></Text>
                <ActivityIndicator size="large" color={'#9ee7ff'}/>
              </>
            )}
          </View>
        </>
      )}
    </FontContext.Consumer>
  );
};




const ARExperiences = ({navigation}) => {

  const ARStack = createStackNavigator();

  return (
    <ARStack.Navigator mode="modal" headerMode="none">
      <ARStack.Screen name='SplashAR' component={SplashAR} />
      <ARStack.Screen name='PlanetSwitcher' component={PlanetSwitcher} />
      <ARStack.Screen name='LookUp' component={LookUpAR} />
      <ARStack.Screen name='Portal' component={PortalAR} />
    </ARStack.Navigator>

  );
};

export default ARExperiences;
