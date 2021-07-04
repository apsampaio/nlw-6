import React from "react";
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from "react-native";
import { Background } from "../Background";

import { style } from "./styles";

type Props = ModalProps & {
  children: React.ReactNode;
  closeModal: () => void;
};

const ModalView: React.FC<Props> = ({ children, closeModal, ...rest }) => {
  return (
    <Modal transparent animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={style.overlay}>
          <View style={style.container}>
            <Background>
              <View style={style.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export { ModalView };
