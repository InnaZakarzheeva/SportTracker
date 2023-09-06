import {
  Animated,
  Dimensions,
  Platform,
  StyleSheet,
  ViewStyle,
} from "react-native";
import _ from "lodash";
import { Colors, Component, Margins } from "@Resources";

const { width } = Dimensions.get("screen");

const ROOT_CONTAINER_HEIGHT = 78;

const styles = StyleSheet.create({
  container: { minHeight: ROOT_CONTAINER_HEIGHT },
  errorLabel: {
    color: "red",
    marginTop: Margins.marginMicro,
  },
  textInput: {
    color: Colors.white,
    paddingHorizontal: 0,
    paddingVertical: 0,
    padding: 0,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: "e-Ukraine-Regular",
  },
  secureIconWrapper: {
    marginLeft: Margins.marginSmall,
  },
  errorText: {
    color: Colors.red,
    fontSize: 12,
    marginLeft: Margins.marginSmall,
  },
});

const labelAnimStyle = (value: Animated.Value | number): any => ({
  position: "absolute",
  left: Margins.marginDefault * 2 + Component.inputIconWidth,
  top: 7,
  opacity: value,
  color: Colors.mediumGrey,
  fontSize: 10,
  lineHeight: 12,
  fontFamily: "e-Ukraine-Regular",
});

const errorContainerStyle = (value: Animated.Value | number) => ({
  opacity: value,
  marginLeft: Margins.marginDefault,
  marginTop: Margins.marginMicro,
});

const textInputContainerStyle = (
  focused: boolean,
  errorLabel: string | null | undefined
): ViewStyle => ({
  width: width - Margins.marginMiddle * 2,
  height: Component.appButtonHeight,
  backgroundColor: Colors.secondary,
  borderRadius: 15,
  paddingTop: 1,
  borderWidth: 1,
  borderColor:
    focused && !_.isNil(errorLabel)
      ? Colors.red
      : focused
      ? Colors.primary
      : "transparent",
  alignItems: "center",
  flexDirection: "row",
  paddingHorizontal: Margins.marginDefault,
});

const textInputAnimStyle = (
  translateY: Animated.Value,
  isAnimate: boolean
): any => ({
  marginHorizontal: Margins.marginDefault,
  flex: 1,
  transform: !isAnimate
    ? [
        {
          translateY: translateY.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 6],
          }),
        },
      ]
    : [],
});

export {
  styles,
  labelAnimStyle,
  errorContainerStyle,
  textInputContainerStyle,
  textInputAnimStyle,
};
