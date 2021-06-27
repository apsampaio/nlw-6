import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

import { style } from "./styles";
import DiscordImg from "../../assets/discord.png";

export const ButtonIcon: React.FC = () => {
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.iconWrapper}>
        <Image source={DiscordImg} style={style.icon} />
      </View>

      <Text style={style.title}>Entrar com Discord</Text>
    </TouchableOpacity>
  );
};
