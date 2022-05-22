import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import EditorPage from "./pages/editor/editorPage";
import MainPage from "./pages/main/MainPage";
import PersonPage from "./pages/person/PersonPage";

import StyleRoot from "./style/StyleRoot";
export default function App(): JSX.Element {
  return (
    <StyleRoot>
      <BrowserRouter>
        <Header />
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/@:id" element={<PersonPage />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </StyleRoot>
  );
}
