import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./RootBottomTab";
// import { AllDrawerNavigation } from "./appDrawerNavigator";
// import ThirdScreenNavigation from "./appStackNavigator";


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
      {/* <AppNavigation.Screen name="stack" children={ThirdScreenNavigation} /> */}
      {/* <AppNavigation.Screen name="drawer" children={AllDrawerNavigation} /> */}
    </AppNavigation.Navigator>
  </NavigationContainer>
);
export default RootNavigator;