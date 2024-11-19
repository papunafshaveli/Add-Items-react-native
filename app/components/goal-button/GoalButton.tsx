import { Pressable, Text } from "react-native";
import styles from "./styles";

type GoalButtonProps = {
  handleAddBtnClick: () => void;
};

const GoalButton: React.FC<GoalButtonProps> = ({ handleAddBtnClick }) => {
  return (
    <Pressable style={styles.btn} onPress={handleAddBtnClick}>
      <Text style={styles.btnText}>Add</Text>
    </Pressable>
  );
};

export default GoalButton;
