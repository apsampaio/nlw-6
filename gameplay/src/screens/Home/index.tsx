import React, { useState } from "react";

import { View, FlatList } from "react-native";
import { style } from "./styles";

import { CategorySelect } from "../../components/CategorySelect";
import { ButtonAdd } from "../../components/ButtonAdd";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { Appointment } from "../../components/Appointment";
import { Background } from "../../components/Background";

import { useNavigation } from "@react-navigation/native";

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const [category, setCategory] = useState("");

  const appointments = [
    {
      id: "1",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: true,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar no challenger sem perder uma partida da md10",
    },
    {
      id: "2",
      guild: {
        id: "1",
        name: "Lendários",
        icon: null,
        owner: false,
      },
      category: "1",
      date: "22/06 às 20:40h",
      description:
        "É hoje que vamos chegar no challenger sem perder uma partida da md10",
    },
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDetails() {
    navigation.navigate("AppointmentDetails");
  }

  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <Background>
      <View style={style.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={style.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment onPress={handleAppointmentDetails} data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={style.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
};
