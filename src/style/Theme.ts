import { DefaultTheme } from "styled-components";
/**
 * DarkMode LightMode추가 전 DefaultMode
 */

const fontColor = {
  color: "#FFFFFF",
  subColor: "#000000",
};

const mainColor = {
  main: "#F7F7F7",
  filter: "#F7F7F7",
};

const backgroundColor = {
  bg: "#1D1D1D",
  card: "#1D1D1D",
};

export const Theme: DefaultTheme = {
  fontColor,
  mainColor,
  backgroundColor,
};

export default Theme;
