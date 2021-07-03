import React from "react";
import { TextInput, TextInputProps } from "react-native";

import { style } from "./styles";

const SmallInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return <TextInput style={style.container} {...rest} keyboardType="numeric" />;
};

export { SmallInput };
