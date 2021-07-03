import React from "react";
import { View, Modal, ModalProps } from "react-native";
import { Background } from "../Background";

import { style } from "./styles";

type Props = ModalProps & {
  children: React.ReactNode;
};

const ModalView: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <View style={style.overlay}>
        <View style={style.container}>
          <Background>
            <View style={style.bar} />
            {children}
          </Background>
        </View>
      </View>
    </Modal>
  );
};

export { ModalView };
