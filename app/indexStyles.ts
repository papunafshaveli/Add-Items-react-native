import { StyleSheet } from "react-native";
const indexStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",

    padding: 20,

    backgroundColor: "#C9E6F0",
  },

  inputAndButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "5",

    width: "100%",

    paddingBottom: 20,
    marginBottom: 10,

    borderBottomWidth: 2,
  },
});

export default indexStyles;
