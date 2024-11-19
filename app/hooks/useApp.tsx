import { useState } from "react";
import { Alert } from "react-native";

const useApp = () => {
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
  return {
    inputText,
    handleInputTextChange,
    handleAddBtnClick,
    goals,
    setGoals,
  };
};

export default useApp;
