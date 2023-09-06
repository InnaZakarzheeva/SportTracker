import { StyleSheet } from "react-native";
import { Colors, Margins } from "@Resources";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: Margins.marginMiddle,
    marginBottom: Margins.marginDefault,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
});
