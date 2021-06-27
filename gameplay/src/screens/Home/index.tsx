import React from "react";

import { View } from "react-native";
import { style } from "./styles";

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";

export const Home: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect />
      </View>
    </View>
  );
};
