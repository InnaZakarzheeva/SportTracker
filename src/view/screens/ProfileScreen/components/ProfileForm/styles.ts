import { Dimensions, StyleSheet } from "react-native";
import { Colors, Margins } from "@Resources";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  labelWrapper: {
    minWidth: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: width - Margins.marginMiddle * 2,
    position: "absolute",
    bottom: Margins.marginSmall,
  },
  label: {
    color: Colors.white,
    fontSize: 16,
  },
  formWrapper: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Margins.marginMiddle,
    alignItems: "center",
  },
  loginBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "e-Ukraine-Regular",
    textDecorationLine: "underline",
  },
  input: {},
});
