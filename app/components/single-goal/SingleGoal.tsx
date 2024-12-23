import { View, Text, Pressable } from "react-native";

import styles from "./styles";

type SingleGoalProps = {
  itemData: {
    item: { text: string; id: string };
  };
  handleSelectGoal: (id: string) => void;
  isLastItem?: boolean;
};

const SingleGoal: React.FC<SingleGoalProps> = ({
  itemData,
  handleSelectGoal,
  isLastItem,
}) => {
  const onPressDelete = () => {
    handleSelectGoal(itemData.item.id);
  };

  return (
    <View style={[styles.goals, isLastItem && styles.lastGoalItem]}>
      <Text style={styles.goalText}>{itemData.item.text}</Text>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onPressDelete}
        android_ripple={{ color: "#b95eb9" }}
      >
        <Text style={styles.delete}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default SingleGoal;
