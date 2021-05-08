/* eslint-disable no-unused-vars */
/* eslint-disable react/no-children-prop */
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { IotdContext, FontContext } from './Context';
import axios from 'axios';
import BottomTab from './RootBottomTab';
import LoginModal from './Login';
import { toggle } from '../Settings/SettingsScreen';


const AppNavigation = createStackNavigator();


const RootNavigator = () => {

  const accessibility = {
    normal: {
      fontFamily: 'Helvetica'
    },
    readable: {
      fontFamily: 'Times New Roman'
    }
  };

  const [IoTD, setIoTD] = useState(null);
  const [Font, setFont] = useState(accessibility.normal);

  useEffect(() => {
    getNasa();
    // getAccessible();
  }, []);

  // const getAccessible = () => {
  //   if (toggle.accessibility) {
  //     setFont(accessibility.readable);
  //   } else {
  //     setFont(accessibility.normal);
  //   }
  // };

  const getNasa = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gZClpAd2dIP9dwXkbP5wMsqVMfT1ek5YMnEo7kep')
      .then(({data}) => {
        setIoTD(data);
      });
  };


  return (
    <FontContext.Provider value={{Font, setFont}}>
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
    </FontContext.Provider>

  );
};
export default RootNavigator;
