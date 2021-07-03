import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Text,
} from "react-native";

import { GuildIcon } from "../GuildIcon";
import { Feather } from "@expo/vector-icons";

import { style } from "./styles";
import { theme } from "../../global/styles/theme";

import { GuildProps } from "../Appointment";

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

const Guild: React.FC<Props> = ({ data, ...rest }) => {
  const { icon, name, owner } = data;

  return (
    <TouchableOpacity style={style.container} activeOpacity={0.7} {...rest}>
      <GuildIcon />
      <View style={style.content}>
        <View>
          <Text style={style.title}>{name}</Text>
          <Text style={style.type}>
            {owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>
      <Feather name="chevron-right" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
};

export { Guild };
