import { Colors, Margins } from "@Resources";
import { StyleSheet, ViewStyle } from "react-native";

const styles = StyleSheet.create({
  itemWrapper: {
    flex: 1,
    width: "100%",
    minHeight: 100,
    marginBottom: Margins.marginSmall,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingHorizontal: Margins.marginDefault,
    paddingVertical: Margins.marginDefault,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  infoWrapper: {
    width: "85%",
    justifyContent: "space-around",
    height: "100%",
  },
  progressWrapper: {
    height: 8,
    width: "100%",
    backgroundColor: Colors.background,
    borderRadius: 10,
  },
});

export const progressInner = (dificulty: number): ViewStyle => {
  switch (dificulty) {
    case 0:
      return {
        width: "33%",
        height: 8,
        backgroundColor: Colors.green,
        borderRadius: 10,
      };
    case 1:
      return {
        width: "50%",
        height: 8,
        backgroundColor: Colors.yellow,
        borderRadius: 10,
      };
    case 2:
      return {
        width: "100%",
        height: 8,
        backgroundColor: Colors.red,
        borderRadius: 10,
      };
    default:
      return {};
  }
};

export default styles;
