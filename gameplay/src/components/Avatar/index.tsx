import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

import { style } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  urlImage: string;
};

export const Avatar: React.FC<Props> = ({ urlImage }) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <LinearGradient style={style.container} colors={[secondary50, secondary70]}>
      <Image source={{ uri: urlImage }} style={style.avatar} />
    </LinearGradient>
  );
};
