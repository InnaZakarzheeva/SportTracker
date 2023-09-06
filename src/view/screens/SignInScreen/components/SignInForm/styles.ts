import { Dimensions, StyleSheet } from "react-native";
import { Colors, Margins } from "../../../../../resources";
import { isSmallDevice } from "../../../../../utils";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  inputEmail: { marginTop: Margins.marginMiddle },
  inputPassword: { marginTop: Margins.marginMiddle },
  formWrapper: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Margins.marginMiddle,
    alignItems: "center",
  },
  button: {
    width: width - Margins.marginMiddle * 2,
    position: "absolute",
    bottom: Margins.marginSmall,
  },
  labelWrapper: {
    width,
    flexDirection: isSmallDevice() ? "column" : "row",
    alignItems: "center",
    justifyContent: "center",
  },
  createAccountBtnTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "e-Ukraine-Regular",
    textDecorationLine: "underline",
  },
});
