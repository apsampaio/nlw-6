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
  hasCheckbox?: boolean;
  checked?: boolean;
};

export const Category: React.FC<Props> = ({
  title,
  icon: Icon,
  hasCheckbox = false,
  checked = false,
  ...rest
}) => {
  const { secondary40, secondary50, secondary70, secondary75 } = theme.colors;

  return (
    <RectButton style={style.container} {...rest}>
      <LinearGradient colors={[secondary50, secondary70]}>
        <LinearGradient
          style={[style.content, { opacity: checked ? 1 : 0.5 }]}
          colors={[checked ? secondary75 : secondary50, secondary40]}
        >
          {hasCheckbox && (
            <View style={checked ? style.checked : style.check} />
          )}
          <Icon width={48} height={48} />
          <Text style={style.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};
