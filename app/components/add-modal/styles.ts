import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
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

  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
});

export default styles;
