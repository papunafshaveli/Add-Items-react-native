import { View } from "react-native";
import indexStyles from "./indexStyles";
import { GoalButton, GoalInput, GoalItems } from "./components";
import { useApp } from "./hooks";

export default function Index() {
  const { inputText, handleInputTextChange, handleAddBtnClick, goals } =
    useApp();

  return (
    <View style={indexStyles.container}>
      <View style={indexStyles.inputAndButton}>
        <GoalInput
          handleInputTextChange={handleInputTextChange}
          inputText={inputText}
        />
        <GoalButton handleAddBtnClick={handleAddBtnClick} />
      </View>
      <GoalItems goals={goals} />
    </View>
  );
}
