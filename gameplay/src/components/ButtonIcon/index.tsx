import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { Text, Image, View } from "react-native";

import { style } from "./styles";
import DiscordImg from "../../assets/discord.png";

type Props = RectButtonProps & {
  title: string;
};

export const ButtonIcon: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <RectButton style={style.container} {...rest}>
      <View style={style.iconWrapper}>
        <Image source={DiscordImg} style={style.icon} />
      </View>

      <Text style={style.title}>{title}</Text>
    </RectButton>
  );
};
