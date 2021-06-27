import React from "react";
import { View, Text, Image, StatusBar } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";

import illustrationImg from "../../assets/illustration.png";

import { style } from "./styles";

export const SignIn: React.FC = () => {
  return (
    <View style={style.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={illustrationImg}
        style={style.image}
        resizeMode="stretch"
      />
      <View style={style.content}>
        <Text style={style.title}>
          Organize {"\n"}
          suas jogatinas {"\n"}
          facilmente
        </Text>

        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon />
      </View>
    </View>
  );
};
