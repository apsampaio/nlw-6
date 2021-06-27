import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const style = StyleSheet.create({
  container: {
    width: "80%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme.colors.secondary40,
    marginVertical: 21,
    alignSelf: "flex-end",
  },
});
