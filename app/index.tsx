import { Text, View, Alert, Pressable, FlatList } from "react-native";
import indexStyles from "./indexStyles";
import { useState } from "react";
import { GoalButton, GoalInput, GoalItems } from "./components";

export default function Index() {
  const [inputText, setInputText] = useState("");

  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  const handleInputTextChange = (text: string) => {
    setInputText(text);
  };

  const handleAddBtnClick = () => {
    if (inputText.trim() === "") {
      Alert.alert("Please enter a goal!");
    } else {
      setGoals((currentGoals) => [
        ...currentGoals,
        { text: inputText, id: Math.random().toString() },
      ]);
      setInputText("");
    }
  };

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
