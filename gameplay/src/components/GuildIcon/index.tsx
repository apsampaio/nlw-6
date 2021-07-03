import React from "react";
import { Image } from "react-native";

import { style } from "./styles";

type Props = {
  urlImage?: string;
};

export const GuildIcon: React.FC<Props> = ({ urlImage }) => {
  return (
    <Image source={{ uri: urlImage }} style={style.image} resizeMode="cover" />
  );
};
