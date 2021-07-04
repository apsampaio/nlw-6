import React from "react";
import { View, Text, Image, Alert } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Background } from "../../components/Background";

import illustrationImg from "../../assets/illustration.png";

import { style } from "./styles";
import { useAuth } from "../../hooks/Auth";

export const SignIn: React.FC = () => {
  const { signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  };

  return (
    <Background>
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
          <ButtonIcon title="Entrar com Discord" onPress={handleSignIn} />
        </View>
      </View>
    </Background>
  );
};
