import { Modal, Pressable, View, Text, Image } from "react-native";
import GoalInput from "../goal-input/GoalInput";
import GoalButton from "../goal-button/GoalButton";
import styles from "./styles";

type AddModalProps = {
  handleClose: () => void;
  isModalVisible: boolean;
  inputText: string;
  handleInputTextChange: (text: string) => void;
  handleAddBtnClick: () => void;
};

const AddModal: React.FC<AddModalProps> = ({
  handleClose,
  isModalVisible,
  inputText,
  handleInputTextChange,
  handleAddBtnClick,
}) => {
  return (
    <Modal
      onRequestClose={handleClose}
      visible={isModalVisible}
      transparent={true}
      animationType="slide"
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Image
            source={require("../../../assets/images/goalImage.png")}
            style={styles.image}
          />
          <View style={styles.inputAndButton}>
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
  );
};

export default AddModal;
