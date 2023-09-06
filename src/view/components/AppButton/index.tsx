import { useLayout } from "@react-native-community/hooks";
import React from "react";
import {
  ColorValue,
  Pressable,
  PressableStateCallbackType,
  Platform,
  PressableAndroidRippleConfig,
} from "react-native";

import { Colors, Component, Margins } from "@Resources";

import AppText from "../AppText";
import Props from "./types";

const AppButton = (props: Props) => {
  const { onLayout, ...layout } = useLayout();

  let backgroundColor: string | "transparent";
  let borderColor: ColorValue;
  let height: number = props.height || Component.appButtonHeight;
  let borderWidth = 0;
  let titleColor = Colors.white;
  let rippleColor: ColorValue = Colors.white;

  switch (props.styleMode) {
    case "contained":
      backgroundColor = props.disabled ? Colors.mediumGrey : Colors.primary;
      titleColor = props.disabled ? Colors.secondary : Colors.white;
      borderColor = "transparent";
      break;
    case "text":
      backgroundColor = "transparent";
      borderColor = "transparent";
      titleColor = props.disabled ? Colors.mediumGrey : Colors.primary;
      borderWidth = 0;
      height = Component.textButtonHeight;
      rippleColor = Colors.primary;
      break;
    case "outlined":
      backgroundColor = "transparent";
      borderColor = Colors.secondary;
      borderWidth = 1;
      titleColor = Colors.white;
      break;
    default:
      backgroundColor = props.disabled ? Colors.mediumGrey : Colors.primary;
      titleColor = props.disabled ? Colors.secondary : Colors.white;
      borderColor = "transparent";
  }

  const pressableStyle = (state: PressableStateCallbackType): any => {
    return [
      {
        opacity: state.pressed && Platform.OS === "ios" ? 0.8 : 1,
        height,
        backgroundColor,
        borderColor,
        borderWidth,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: Margins.marginSmall,
      },
      props.style,
    ];
  };

  const titleStyle = (): any => [
    {
      color: titleColor,
    },
    props.titleStyle,
  ];

  const ripple = (
    width: number,
    color?: ColorValue
  ): PressableAndroidRippleConfig => ({
    color: color || Colors.white,
    radius: width / 2,
  });

  return (
    <Pressable
      onLayout={onLayout}
      onPress={props.onPress}
      disabled={props.disabled}
      style={pressableStyle}
      android_ripple={ripple(layout.width, rippleColor)}>
      {props.icon}
      <AppText
        fontType="button_title"
        style={titleStyle()}
        ellipsizeMode="tail"
        numberOfLines={1}
        allowFontScaling={false}>
        {props.title}
      </AppText>
    </Pressable>
  );
};

export default AppButton;
