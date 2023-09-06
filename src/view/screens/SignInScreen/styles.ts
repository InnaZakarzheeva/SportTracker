import { StyleSheet, Dimensions } from "react-native";
import { Colors, Margins } from "@Resources";
import { isSmallDevice } from "@Utils";

const { height } = Dimensions.get("screen");

export const LOGO_HEIGHT = isSmallDevice() ? height / 3.5 : height / 3;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingTop: isSmallDevice()
      ? Margins.marginBiggest
      : Margins.marginBiggest * 2,
    paddingHorizontal: Margins.marginMiddle,
  },
});
