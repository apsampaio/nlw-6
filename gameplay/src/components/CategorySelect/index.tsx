import React from "react";
import { ScrollView } from "react-native";
import { Category } from "../Category";

import { style } from "./styles";

import { categories } from "../../utils/categories";

type Props = {
  categorySelected: string;
  hasCheckbox?: boolean;
  setCategory: (categoryId: string) => void;
};

export const CategorySelect: React.FC<Props> = ({
  categorySelected,
  hasCheckbox = false,
  setCategory,
}) => {
  return (
    <ScrollView
      style={style.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          onPress={() => setCategory(category.id)}
          hasCheckbox={hasCheckbox}
        />
      ))}
    </ScrollView>
  );
};
