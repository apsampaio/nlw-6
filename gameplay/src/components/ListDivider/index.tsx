import React from "react";
import { View } from "react-native";

import { style } from "./styles";

type Props = {
  isCentered?: boolean;
};

export const ListDivider: React.FC<Props> = ({ isCentered }) => {
  return (
    <View
      style={[
        style.container,
        isCentered
          ? { marginVertical: 12 }
          : { marginTop: 2, marginBottom: 31 },
      ]}
    />
  );
};
