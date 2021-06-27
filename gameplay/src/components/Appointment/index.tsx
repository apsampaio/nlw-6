import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { style } from "./styles";
import PlayerInfoSVG from "../../assets/player.svg";
import CalendarSVG from "../../assets/calendar.svg";

import { GuildIcon } from "../GuildIcon";
import { categories } from "../../utils/categories";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: React.FC<SvgProps> | null;
  owner: boolean;
};

export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

export const Appointment: React.FC<Props> = ({ data, ...rest }) => {
  const [category] = categories.filter((item) => item.id === data.category);
  const { owner } = data.guild;

  const { primary, on } = theme.colors;
  return (
    <RectButton {...rest}>
      <View style={style.container}>
        <GuildIcon urlImage="https://avatars.githubusercontent.com/u/51516616?v=4" />
        <View style={style.content}>
          <View style={style.header}>
            <Text style={style.title}>{data.guild.name}</Text>
            <Text style={style.category}>{category.title}</Text>
          </View>
          <View style={style.footer}>
            <View style={style.dateInfo}>
              <CalendarSVG />
              <Text style={style.date}>{data.date}</Text>
            </View>
            <View style={style.playerInfo}>
              <PlayerInfoSVG fill={owner ? primary : on} />
              <Text style={[style.player, { color: owner ? primary : on }]}>
                {owner ? "Anfitrião" : "Visitante"}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  );
};
