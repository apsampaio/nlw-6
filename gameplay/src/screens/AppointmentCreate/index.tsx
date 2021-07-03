import React, { useState } from "react";

import { RectButton } from "react-native-gesture-handler";

import {
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { style } from "./styles";

import { Background } from "../../components/Background";
import { CategorySelect } from "../../components/CategorySelect";
import { Header } from "../../components/Header";
import { GuildIcon } from "../../components/GuildIcon";
import { SmallInput } from "../../components/SmallInput";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";

import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";

export const AppointmentCreate: React.FC = () => {
  const [category, setCategory] = useState("");

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={style.container}
    >
      <ScrollView>
        <Background>
          <Header title="Agendar Partida" />
          <Text
            style={[
              style.label,
              {
                marginLeft: 24,
                marginTop: 36,
                marginBottom: 8,
              },
            ]}
          >
            Categoria
          </Text>
          <CategorySelect
            hasCheckbox
            categorySelected={category}
            setCategory={handleCategorySelect}
          />
          <View style={style.form}>
            <RectButton>
              <View style={style.select}>
                {
                  // <View style={style.image} />
                  <GuildIcon urlImage="http://github.com/apsampaio.png" />
                }
                <View style={style.selectBody}>
                  <Text style={style.label}>Selecione um servidor</Text>
                </View>
                <Feather
                  name="chevron-right"
                  size={18}
                  color={theme.colors.heading}
                />
              </View>
            </RectButton>
            <View style={style.field}>
              <View>
                <Text style={style.label}>Dia e mês</Text>
                <View style={style.column}>
                  <SmallInput maxLength={2} />
                  <Text style={style.divider}>/</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>

              <View>
                <Text style={style.label}>Hora e minuto</Text>
                <View style={style.column}>
                  <SmallInput maxLength={2} />
                  <Text style={style.divider}>:</Text>
                  <SmallInput maxLength={2} />
                </View>
              </View>
            </View>

            <View style={[style.field, { marginBottom: 12 }]}>
              <Text style={style.label}>Descriçao</Text>
              <Text style={style.textLimit}>Max 100 Caracteres</Text>
            </View>

            <TextArea
              multiline
              maxLength={100}
              numberOfLines={5}
              autoCorrect={false}
            />

            <View style={style.footer}>
              <Button title="Agendar" />
            </View>
          </View>
        </Background>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
