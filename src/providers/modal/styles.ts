import { StyleSheet } from "react-native";
import { Margins, Colors } from "@Resources";

export const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.secondaryBlur,
    alignItems: "center",
    padding: Margins.marginMiddle,
  },
  modal: {
    width: "100%",
    height: 250,
    justifyContent: "space-around",
    alignItems: "center",
    padding: Margins.marginMiddle,
    backgroundColor: Colors.secondary,
    borderRadius: 15,
  },
  message: {
    color: Colors.red,
  },
  button: {
    width: "100%",
  },
});
