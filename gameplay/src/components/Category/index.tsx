import React from "react";
import { View, Text } from "react-native";
import { SvgProps } from "react-native-svg";
import { LinearGradient } from "expo-linear-gradient";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

import { style } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

export const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}) => {
  const { secondary50, secondary70 } = theme.colors;

  return (
    <RectButton style={style.container} {...rest}>
      <LinearGradient colors={[secondary50, secondary70]}>
        <View style={[style.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? style.checked : style.check} />
          <Icon width={48} height={48} />
          <Text style={style.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  );
};
