import { Modal, Pressable, View, Text } from "react-native";
import indexStyles from "./indexStyles";
import { GoalButton, GoalInput, GoalItems } from "./components";
import { useApp } from "./hooks";
import { useState } from "react";

export default function Index() {
  const {
    inputText,
    handleInputTextChange,
    handleAddBtnClick,
    goals,
    setGoals,
  } = useApp();

  const onDelete = (id: string) =>
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

  const handleClose = () => setIsModalVisible(false);

  const handleOpenModal = () => setIsModalVisible(true);

  return (
    <View style={indexStyles.container}>
      {!isModalVisible && (
        <Pressable onPress={handleOpenModal} style={indexStyles.openModalBtn}>
          <Text>Open Modal</Text>
        </Pressable>
      )}
      <Modal
        onRequestClose={handleClose}
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={indexStyles.modalOverlay}>
          <View style={indexStyles.modalContent}>
            <View style={indexStyles.inputAndButton}>
              <GoalInput
                handleInputTextChange={handleInputTextChange}
                inputText={inputText}
              />
              <GoalButton handleAddBtnClick={handleAddBtnClick} />
            </View>
            <Pressable onPress={handleClose}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <GoalItems goals={goals} handleDelete={onDelete} />
    </View>
  );
}
