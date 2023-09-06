import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainStackParamList } from "./types";
import HomeNavigator from "./HomeNavigator";

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => (
  <MainStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="HomeScreen">
    <MainStack.Screen name="HomeScreen" component={HomeNavigator} />
  </MainStack.Navigator>
);

export default MainNavigator;
