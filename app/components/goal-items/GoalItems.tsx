import { FlatList, View, Text } from "react-native";

import styles from "./styles";
import { SingleGoal } from "..";

type GoalItemProps = {
  goals: { text: string; id: string }[];
  handleSelectGoal: (id: string) => void;
};

const GoalItems: React.FC<GoalItemProps> = ({ goals, handleSelectGoal }) => {
  return (
    <View style={styles.goalsContainer}>
      <FlatList
        alwaysBounceVertical={false}
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <SingleGoal handleSelectGoal={handleSelectGoal} itemData={itemData} />
        )}
      />
    </View>
  );
};

export default GoalItems;
