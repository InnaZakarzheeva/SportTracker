import React, { PropsWithChildren } from "react";
import { Text, TextProps, TextStyle } from "react-native";
import { Colors } from "@Resources";

export type FontType =
  | "input_label"
  | "input_text"
  | "paragraph_1"
  | "paragraph_2"
  | "paragraph_3"
  | "button_title"
  | "header_1"
  | "header_2";

interface Props extends TextProps {
  fontType: FontType;
  textColor?: Colors;
  onPress?: () => void;
  numberOfLines?: number;
}

const styleByFontType = (type: FontType): TextStyle => {
  switch (type) {
    case "input_label":
      return {
        fontSize: 10,
        lineHeight: 12,
        fontFamily: "e-Ukraine-Regular",
      };
    case "input_text":
      return {
        fontSize: 14,
        lineHeight: 17,
        fontFamily: "e-Ukraine-Regular",
      };
    case "paragraph_1":
      return {
        fontSize: 15,
        lineHeight: 19,
        fontFamily: "e-Ukraine-Regular",
      };
    case "paragraph_2":
      return {
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "300",
        fontFamily: "e-Ukraine-Regular",
      };
    case "paragraph_3":
      return {
        fontSize: 12,
        lineHeight: 16,
        fontWeight: "300",
        fontFamily: "e-Ukraine-Regular",
      };
    case "button_title":
      return {
        fontSize: 20,
        lineHeight: 24,
        fontFamily: "e-Ukraine-Regular",
      };
    case "header_1":
      return {
        fontSize: 24,
        lineHeight: 29,
        fontFamily: "e-UkraineHead-Medium",
      };
    case "header_2":
      return {
        fontSize: 16,
        lineHeight: 22,
        fontWeight: "300",
        fontFamily: "e-Ukraine-Regular",
      };
    default:
      return {
        fontSize: 16,
        fontWeight: "400",
      };
  }
};

const AppText = (props: PropsWithChildren<Props>) => {
  const finalColor = props.textColor || Colors.white;
  const finalStyle = [
    styleByFontType(props.fontType),
    { color: finalColor },
    props.style,
  ];

  return (
    <Text
      style={finalStyle}
      onPress={props.onPress}
      numberOfLines={props.numberOfLines}>
      {props.children}
    </Text>
  );
};

export default AppText;
