import React, { ReactNode } from "react";
import GlobalStyle from "./GlobalStyle";
import Theme from "./Theme";
import { ThemeProvider } from "styled-components";

type props = {
  children?: ReactNode;
};

export default function StyleRoot({ children }: props): JSX.Element {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
