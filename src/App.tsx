import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
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
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
