import React from "react";

import { View } from "react-native";
import { style } from "./styles";

import { Profile } from "../../components/Profile";

export const Home: React.FC = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Profile />
      </View>
    </View>
  );
};
