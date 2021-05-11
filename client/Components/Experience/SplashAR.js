import React, {useState, useEffect, createContext} from 'react';
import { Button, View, Text, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useIsFocused } from '@react-navigation/native';



import PlanetSwitcher from './PlanetSwitcherAR';
import LookUpAR from './LookUpAR';

const SplashAR = ({ navigation }) => {
  const [rendering, setRendering] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    setRendering(false);
  }, [isFocused]);

  return (
    <>
      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>Choose Your AR Experience</Text>
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

      </View>
      <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
        {rendering && (
          <>
            <Text>AR Launching: Please standby</Text>
            <Text></Text>
            <ActivityIndicator size="large" color={'#9ee7ff'}/>
          </>
        )}
      </View>
    </>
  );
};




const ARExperiences = ({navigation}) => {

  const ARStack = createStackNavigator();

  return (
    <ARStack.Navigator mode="modal" headerMode="none">
      <ARStack.Screen name='SplashAR' component={SplashAR} />
      <ARStack.Screen name='PlanetSwitcher' component={PlanetSwitcher} />
      <ARStack.Screen name='LookUp' component={LookUpAR} />
    </ARStack.Navigator>

  );
};

export default ARExperiences;
