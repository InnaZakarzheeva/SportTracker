import { Dimensions, StyleSheet } from "react-native";
import { Colors, Margins } from "@Resources";

const { width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingHorizontal: Margins.marginMiddle,
  },
  addTrainningBtn: { width: "100%" },
  addTrainningBtnText: {
    fontWeight: "300",
    fontFamily: "e-Ukraine-Regular",
  },
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Margins.marginDefault,
  },
  iconWrapper: {
    width: 39,
    height: 39,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.secondary,
    borderRadius: 10,
  },
  flatList: {
    width: width - Margins.marginMiddle * 2,
  },
});
