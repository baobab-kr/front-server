import { createGlobalStyle } from "styled-components";
import backgroundImage from "../data/background.jpg";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding:0;
    margin:0;
    text-decoration : none;
    list-style: none;
  }

  html {
    width:100%;
    height: 100%;
  }

  body {
    line-height: 1;
    color: white;
    background-image: url(${backgroundImage});
    background-attachment: fixed;
    font-family: "Noto Sans CJK KR", sans-serif !important;

    margin: 0;
    padding: 0;
    width:100%;
    height: 100%;
  }

  /* input 기본 스타일 초기화 */
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }


`;

export default GlobalStyle;
