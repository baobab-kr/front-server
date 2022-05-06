import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/main/MainPage";
import PersonPage from "./pages/person/PersonPage";

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
            <Route path="/@:id" element={<PersonPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
