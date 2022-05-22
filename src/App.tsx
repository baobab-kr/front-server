import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import EditorPage from "./pages/editor/editorPage";
import MainPage from "./pages/main/MainPage";
import GlobalStyle from "./style/GlobalStyle";
export default function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div style={{ marginTop: "70px" }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/editor" element={<EditorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
