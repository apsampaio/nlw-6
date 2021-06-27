import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { style } from "./styles";
import { theme } from "../../global/styles/theme";

type Props = {
  children: ReactNode;
};

export const Background: React.FC<Props> = ({ children }) => {
  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient
      style={style.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
};
