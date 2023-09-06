import {
  Animated,
  ReturnKeyType,
  StyleProp,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { FieldProps } from "formik";

export interface Props extends TextInputProps, FieldProps {
  name: string;
  containerStyle?: StyleProp<ViewStyle>;
  icon?: Element;
  withClear?: boolean;
  withSecureText?: boolean;
  returnKeyType?: ReturnKeyType;
  refs: any;
}

export interface AppInputWithReplacerProps extends Props {
  animValue: Animated.Value;
}

export interface AppInputHandles {
  focus: () => void;
  blur: () => void;
}
