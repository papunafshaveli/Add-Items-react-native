import { View, Text } from "react-native";
import styles from "./styles";

type SingleGoalProps = {
  itemData: { item: { text: string } };
};

const SingleGoal: React.FC<SingleGoalProps> = ({ itemData }) => {
  return (
    <View style={styles.goals}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
  );
};

export default SingleGoal;
