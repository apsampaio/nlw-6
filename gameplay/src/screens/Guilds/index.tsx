import React from "react";
import { View, FlatList } from "react-native";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { GuildProps } from "../../components/Appointment";

import { style } from "./styles";

type Props = {
  handleGuildSelected: (guild: GuildProps) => void;
};

const Guilds: React.FC<Props> = ({ handleGuildSelected }) => {
  const guilds: GuildProps[] = [
    {
      id: "1",
      name: "Lendários",
      icon: "http://github.com/apsampaio.png",
      owner: true,
    },
  ];

  return (
    <View style={style.container}>
      <FlatList
        data={guilds}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelected(item)} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        showsVerticalScrollIndicator={false}
        style={style.guilds}
      />
    </View>
  );
};

export { Guilds };
