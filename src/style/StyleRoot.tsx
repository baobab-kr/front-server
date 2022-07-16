import React, { ReactNode } from "react";
import GlobalStyle from "./GlobalStyle";
import darkTheme from "./darkTheme";
import lightTheme from "./lightTheme";
import { ThemeProvider } from "styled-components";
import Darkmode from "../store/store.theme";
import { useRecoilState } from "recoil";

type props = {
  children?: ReactNode;
};

export default function StyleRoot({ children }: props): JSX.Element {
  const [darkMode, _] = useRecoilState<boolean>(Darkmode);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
