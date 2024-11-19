import { FlatList, View, Text } from "react-native";
import styles from "./styles";
import SingleGoal from "../single-goal/SingleGoal";

type GoalItemProps = {
  goals: { text: string; id: string }[];
  handleDelete: (id: string) => void;
};

const GoalItems: React.FC<GoalItemProps> = ({ goals, handleDelete }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <SingleGoal handleDelete={handleDelete} itemData={itemData} />
        )}
      />
    </View>
  );
};

export default GoalItems;
