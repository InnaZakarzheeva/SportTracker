import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen } from "@View";
import { AppText } from "@View/components";
import { Colors, HomeSvg, ProfileSvg, Strings } from "@Resources";

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.secondary,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <AppText
              fontType="input_label"
              textColor={focused ? Colors.primary : Colors.mediumGrey}>
              {Strings.home_label}
            </AppText>
          ),
          tabBarIcon: ({ focused }) => (
            <HomeSvg color={focused ? Colors.primary : Colors.mediumGrey} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ focused }) => (
            <AppText
              fontType="input_label"
              textColor={focused ? Colors.primary : Colors.mediumGrey}>
              {Strings.profile_label}
            </AppText>
          ),
          tabBarIcon: ({ focused }) => (
            <ProfileSvg color={focused ? Colors.primary : Colors.mediumGrey} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
