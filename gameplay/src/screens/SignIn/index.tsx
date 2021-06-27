import React from "react";
import { View, Text, Image } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";

import illustrationImg from "../../assets/illustration.png";

import { style } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  function handleSign() {
    navigation.navigate("Home");
  }

  return (
    <View style={style.container}>
      <Image
        source={illustrationImg}
        style={style.image}
        resizeMode="stretch"
      />
      <View style={style.content}>
        <Text style={style.title}>
          Conecte-se {"\n"}e organize suas {"\n"}
          jogatinas
        </Text>

        <Text style={style.subtitle}>
          Crie grupos para jogar seus games {"\n"}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title="Entrar com Discord" onPress={handleSign} />
      </View>
    </View>
  );
};
