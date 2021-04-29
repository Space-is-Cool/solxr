import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import NasaScreen from "../Components/Home/Nasa/NasaScreen";
import NasaScreen from './Nasa/NasaScreen';
import CommunityScreen from './Community/CommunityScreen';
import FavoritesScreen from './Favorites/FavoritesScreen';




const AppTopNavigator = createMaterialTopTabNavigator();

const HomeTopTab = () => (
  <AppTopNavigator.Navigator
    initialRouteName="NASA"
    tabBarOptions={{
      style: { backgroundColor: '#072852' },
      labelStyle: { fontSize: 14, fontWeight: 'bold' },
      activeTintColor: '#ffffff',
      indicatorStyle: { height: 3, backgroundColor: '#fff', paddingBottom: 6 },
      inactiveTintColor: '#adadad',
      tabStyle: { height: 100, justifyContent: 'flex-end' }
    }}
  >
    <AppTopNavigator.Screen component={NasaScreen} name="HELLO" />
    <AppTopNavigator.Screen component={CommunityScreen} name="COMMUNITY" />
    <AppTopNavigator.Screen component={FavoritesScreen} name="FAVORITES" />
  </AppTopNavigator.Navigator>
);

export default HomeTopTab;
