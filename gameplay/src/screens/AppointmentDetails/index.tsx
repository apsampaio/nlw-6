import React from "react";

import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { Text, ImageBackground, View, FlatList } from "react-native";
import { style } from "./styles";

import { Background } from "../../components/Background";
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

import { theme } from "../../global/styles/theme";

import BannerPNG from "../../assets/banner.png";

export const AppointmentDetails: React.FC = () => {
  const members = [
    {
      id: "1",
      username: "Andre",
      avatar_url: "https://github.com/apsampaio.png",
      status: "online",
    },
    {
      id: "2",
      username: "Andre",
      avatar_url: "https://github.com/apsampaio.png",
      status: "offline",
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Feather name="share-2" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={BannerPNG} style={style.banner}>
        <View style={style.bannerContent}>
          <Text style={style.title}>Lendários</Text>
          <Text style={style.subtitle}>
            É hoje que vamos ao challenger sem perder uma partida.
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider />}
        style={style.members}
      />
      <View style={style.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
};
