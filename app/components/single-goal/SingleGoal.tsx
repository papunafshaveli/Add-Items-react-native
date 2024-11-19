import { View, Text, Pressable } from "react-native";
import styles from "./styles";

type SingleGoalProps = {
  itemData: {
    item: { text: string; id: string };
  };
  handleDelete: (id: string) => void;
};

const SingleGoal: React.FC<SingleGoalProps> = ({ itemData, handleDelete }) => {
  const onPressGoal = () => {
    handleDelete(itemData.item.id);
  };

  return (
    <View style={styles.goals}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onPressGoal}
        android_ripple={{ color: "#b95eb9" }}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

export default SingleGoal;
