/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {IotdContext} from './Context';
import axios from 'axios';
import BottomTab from './RootBottomTab';
import LoginModal from './Login';


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
    <IotdContext.Provider value={IoTD}>
      {IoTD && 
        <NavigationContainer>
          <AppNavigation.Navigator
            mode="modal"
            initialRouteName="login"
            screenOptions={{
              header: () => null
            }}
          >
            <AppNavigation.Screen name="index" children={BottomTab} />
            <AppNavigation.Screen name="login" component={LoginModal} />
          </AppNavigation.Navigator>
        </NavigationContainer>
      }
    </IotdContext.Provider>
  );
};
export default RootNavigator;
