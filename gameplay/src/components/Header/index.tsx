import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import { View, Text } from "react-native";
import { style } from "./styles";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/native";

type Props = {
  title: string;
  action?: ReactNode;
};

export const Header: React.FC<Props> = ({ title, action }) => {
  const navigation = useNavigation();

  const { secondary100, secondary40, heading } = theme.colors;

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={style.container}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>
      <Text style={style.title}>{title}</Text>
      {action ? <View>{action}</View> : <View style={{ width: 24 }} />}
    </LinearGradient>
  );
};
