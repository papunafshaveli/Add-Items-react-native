import { useState } from "react";
import { Pressable, View, Text, ScrollView } from "react-native";

import { useApp } from "./hooks";

import indexStyles from "./indexStyles";
import { AddModal, DeleteModal, GoalItems } from "./components";
import { StatusBar } from "expo-status-bar";

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

  const handleAddModalOpen = () => {
    setIsModalVisible(true);
  };

  return (
    <>
      <StatusBar style="dark" />
      <View style={indexStyles.container}>
        {!isModalVisible && (
          <Pressable
            onPress={handleAddModalOpen}
            style={indexStyles.openModalBtn}
          >
            <Text style={indexStyles.openModalText}>Add New Goals!</Text>
          </Pressable>
        )}

        <GoalItems goals={goals} handleSelectGoal={handleSelectGoal} />

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
      </View>
    </>
  );
}
