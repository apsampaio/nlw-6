import React from "react";
import { View, Text } from "react-native";

import { style } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  title: string;
  subtitle: string;
};

export const ListHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>
      <Text style={style.subtitle}>{subtitle}</Text>
    </View>
  );
};
