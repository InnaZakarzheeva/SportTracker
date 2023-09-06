import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen, SignUpScreen, SplashScreen } from "@View";

import MainNavigator from "./MainNavigator";
import { Props } from "./index";
import { RootStackParamList } from "./types";

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = (props: Props) => (
  <RootStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="SplashScreen">
    {props.splashShown ? (
      <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    ) : true ? (
      <RootStack.Screen name="MainNavigator" component={MainNavigator} />
    ) : (
      <>
        <RootStack.Screen name="SignInScreen" component={SignInScreen} />
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
      </>
    )}
  </RootStack.Navigator>
);

export default RootNavigator;
