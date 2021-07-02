import React, { useState } from "react";

import { RectButton } from "react-native-gesture-handler";

import { Text, View } from "react-native";
import { style } from "./styles";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";

import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

export const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <Background>
      <Header title="Agendar Partida" />
      <Text
        style={[
          style.label,
          {
            marginLeft: 24,
            marginTop: 36,
            marginBottom: 8,
          },
        ]}
      >
        Categoria
      </Text>
      <CategorySelect
        hasCheckbox
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={style.form}>
        <RectButton>
          <View style={style.select}>
            {
              // <View style={style.image} />
              <GuildIcon urlImage="http://github.com/apsampaio.png" />
            }
            <View style={style.selectBody}>
              <Text style={style.label}>Selecione um servidor</Text>
            </View>
            <Feather
              name="chevron-right"
              size={18}
              color={theme.colors.heading}
            />
          </View>
        </RectButton>
      </View>
    </Background>
  );
};
