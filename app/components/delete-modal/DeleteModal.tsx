import { Modal, Pressable, View, Text } from "react-native";

import styles from "./styles";

type DeleteModalProps = {
  handleDelete: () => void;
  handleDeleteModalClose: () => void;
  isDeleteModalVisible: boolean;
};

const DeleteModal: React.FC<DeleteModalProps> = ({
  handleDeleteModalClose,
  isDeleteModalVisible,
  handleDelete,
}) => {
  return (
    <Modal
      onRequestClose={handleDeleteModalClose}
      visible={isDeleteModalVisible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.buttons}>
            <Pressable onPress={handleDelete}>
              <Text>Yes</Text>
            </Pressable>

            <Text>Delete Goal?</Text>

            <Pressable onPress={handleDeleteModalClose}>
              <Text>No</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
