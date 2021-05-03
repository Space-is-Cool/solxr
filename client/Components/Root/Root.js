/* eslint-disable react/no-children-prop */
import React, {createContext, useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './RootBottomTab';
import Context from './Context';
import axios from 'axios';

const AppNavigation = createStackNavigator();


const RootNavigator = () => {

  const [IoTD, setIoTD] = useState(null);

  useEffect(() => {
    getNasa();
  }, []);

  const getNasa = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gZClpAd2dIP9dwXkbP5wMsqVMfT1ek5YMnEo7kep')
      .then(({data}) => {
        setIoTD(data);
      });
  };

  return (
    <Context.Provider value={IoTD}>
      {IoTD && 
        <NavigationContainer>
          <AppNavigation.Navigator
            initialRouteName="drawer"
            screenOptions={{
              header: () => null
            }}
          >
            <AppNavigation.Screen name="index" children={BottomTab} />
          </AppNavigation.Navigator>
        </NavigationContainer>
      }
    </Context.Provider>
  );
};
export default RootNavigator;
