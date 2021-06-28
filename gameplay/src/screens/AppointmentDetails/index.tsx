import React from "react";

import { Feather } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";

import { View, FlatList } from "react-native";
import { style } from "./styles";

import { Background } from "../../components/Background";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";

export const AppointmentDetails: React.FC = () => {
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Feather name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />
    </Background>
  );
};
