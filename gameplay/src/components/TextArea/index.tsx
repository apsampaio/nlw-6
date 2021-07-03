import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { style } from "./styles";

const TextArea: React.FC<TextInputProps> = ({ ...rest }) => {
  return <TextInput style={style.container} {...rest} keyboardType="default" />;
};

export { TextArea };
