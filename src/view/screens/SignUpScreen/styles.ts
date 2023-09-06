import { StyleSheet } from "react-native";
import { Colors, Margins } from "@Resources";
import { isSmallDevice } from "@Utils";

export const PADDING_TOP = isSmallDevice()
  ? Margins.marginBiggest
  : Margins.marginBiggest * 2;

export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  root: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingHorizontal: Margins.marginMiddle,
  },
  registration: {
    color: Colors.white,
    marginBottom: Margins.marginMiddle,
  },
});
