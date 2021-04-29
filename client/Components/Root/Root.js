/* eslint-disable react/no-children-prop */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from './RootBottomTab';

const AppNavigation = createStackNavigator();

const RootNavigator = () => (
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
);
export default RootNavigator;
