import { useState } from "react";
import { Modal, Pressable, View, Text } from "react-native";

import { useApp } from "./hooks";

import indexStyles from "./indexStyles";
import {
  AddModal,
  DeleteModal,
  GoalButton,
  GoalInput,
  GoalItems,
} from "./components";

export default function Index() {
  const {
    inputText,
    handleInputTextChange,
    handleAddBtnClick,
    goals,
    setGoals,
  } = useApp();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [goalToDelete, setGoalToDelete] = useState("");

  const handleSelectGoal = (id: string) => {
    setGoalToDelete(id);
    setIsDeleteModalVisible(true);
  };

  const handleClose = () => setIsModalVisible(false);

  const deleteGoal = (id: string) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
    setIsDeleteModalVisible(false);
  };

  return (
    <View style={indexStyles.container}>
      {!isModalVisible && (
        <Pressable
          onPress={() => setIsModalVisible(true)}
          style={indexStyles.openModalBtn}
        >
          <Text>Open Modal</Text>
        </Pressable>
      )}
      <AddModal
        handleClose={handleClose}
        isModalVisible={isModalVisible}
        inputText={inputText}
        handleInputTextChange={handleInputTextChange}
        handleAddBtnClick={handleAddBtnClick}
      />
      {isDeleteModalVisible && (
        <DeleteModal
          handleDeleteModalClose={() => setIsDeleteModalVisible(false)}
          handleDelete={() => deleteGoal(goalToDelete)}
          isDeleteModalVisible={isDeleteModalVisible}
        />
      )}
      <GoalItems goals={goals} handleSelectGoal={handleSelectGoal} />
    </View>
  );
}
