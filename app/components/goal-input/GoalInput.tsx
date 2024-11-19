import { TextInput } from "react-native";
import styles from "./styles";

type GoalInputTextProps = {
  handleInputTextChange: (text: string) => void;
  inputText: string;
};

const GoalInput: React.FC<GoalInputTextProps> = ({
  handleInputTextChange,
  inputText,
}) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Write your goal!"
      onChangeText={handleInputTextChange}
      value={inputText}
    />
  );
};

export default GoalInput;
