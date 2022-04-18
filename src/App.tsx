import React from "react";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./style/GlobalStyle";
export default function App(): JSX.Element {
  return (
    <div>
      <GlobalStyle />
      <MainPage />
    </div>
  );
}
