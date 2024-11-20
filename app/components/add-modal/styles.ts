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
    backgroundColor: "#B9E5E8",
    borderRadius: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default styles;
