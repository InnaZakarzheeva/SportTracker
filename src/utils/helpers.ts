import { Dimensions } from "react-native";

export const isSmallDevice = () => {
  return Dimensions.get("screen").height <= 660; //568
};
