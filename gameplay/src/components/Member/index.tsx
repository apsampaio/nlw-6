import React from "react";
import { View, Text } from "react-native";

import { style } from "./styles";
import { theme } from "../../global/styles/theme";

import { Avatar } from "../Avatar";

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

export const Member: React.FC<Props> = ({ data }) => {
  const { primary, on } = theme.colors;
  const isOnline = data.status === "online";
  const { username, status, avatar_url } = data;

  return (
    <View style={style.container}>
      <Avatar urlImage={avatar_url} />
      <View>
        <Text style={style.title}>{username}</Text>
        <View style={style.status}>
          <View
            style={[
              style.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary,
              },
            ]}
          />
          <Text style={style.nameStatus}>
            {isOnline ? "Disponível" : "Ocupado"}
          </Text>
        </View>
      </View>
    </View>
  );
};
