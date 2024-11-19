import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import SingleGoal from "../single-goal/SingleGoal";

type GoalItemProps = {
  goals: { text: string; id: string }[];
};

const GoalItems: React.FC<GoalItemProps> = ({ goals }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => <SingleGoal itemData={itemData} />}
      />
    </View>
  );
};

export default GoalItems;
