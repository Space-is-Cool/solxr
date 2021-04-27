import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import IconA from "react-native-vector-icons/Ionicons";
import IconB from "react-native-vector-icons/FontAwesome5";
import IconC from "react-native-vector-icons/FontAwesome";


import HomeTopTab from "../Home/HomeTopTab"
import LearnScreen from "../Learn/LearnScreen";
import ExpScreen from "../Experience/ExpScreen";
import SettingsScreen from "../Settings/SettingsScreen";
import EventsScreen from "../Events/EventsScreen";



const AppBottomNavigator = createMaterialBottomTabNavigator();

  const BottomTab = () => (
    <AppBottomNavigator.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarColor: "#490222"
      }}
    >
      <AppBottomNavigator.Screen
        name="Home"
        children={HomeTopTab}
        options={{
          tabBarIcon: () => <IconA name="earth" size={25} color="#fff" />
        }}
      />
      <AppBottomNavigator.Screen
        name="Learn"
        component={LearnScreen}
        options={{
          tabBarIcon: () => <IconA name="planet" size={25} color="#fff" />
        }}
      />
      <AppBottomNavigator.Screen
        name="Experience"
        component={ExpScreen}
        options={{
          tabBarIcon: () => <IconB name="space-shuttle" size={25} color="#fff" />
        }}
      />
      <AppBottomNavigator.Screen
        name="Events"
        component={EventsScreen}
        options={{
          tabBarIcon: () => <IconC name="wpexplorer" size={25} color="#fff" />
        }}
      />
      <AppBottomNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <IconB name="user-astronaut" size={25} color="#fff" />
        }}
      />
    </AppBottomNavigator.Navigator>
  );
  
  export default BottomTab;