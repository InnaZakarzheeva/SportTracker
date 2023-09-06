import { ViewStyle, TextStyle, StyleProp } from "react-native";

export default interface Props {
  title: string;
  styleMode?: "contained" | "outlined" | "text";
  onPress?: () => void;
  disabled?: boolean;
  height?: number;
  width?: number;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  icon?: Element;
}
