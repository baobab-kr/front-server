import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./router/PrivateRoute";
import Header from "./components/Header";
import IndexPage from "./pages/index/indexPage";
import EditorPage from "./pages/editor/editorPage";
import Login from "./pages/Login/Login";
import MainPage from "./pages/main/MainPage";
import PersonPage from "./pages/person/PersonPage";
import Setting from "./pages/setting/Setting";
import StyleRoot from "./style/StyleRoot";
import { getUserInfo } from "./api/user";
import Signup from "./pages/Signup/Signup";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import { useRecoilState } from "recoil";
import Darkmode from "./store/store.theme";

export default function App(): JSX.Element {
  const [_, setDarkMode] = useRecoilState<boolean>(Darkmode);

  useEffect(() => {
    getUserInfoFnc();
    const theme = localStorage.getItem("Theme");
    setDarkMode(theme ? (theme === "dark" ? true : false) : false);
  }, []);

  const getUserInfoFnc = async () => {
    await getUserInfo()
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
      })
      .catch((err) => {
        localStorage.removeItem("atexpires");
        localStorage.removeItem("rtexpires");
        localStorage.removeItem("user");
      });
  };

  return (
    <StyleRoot>
      <BrowserRouter>
        <Header />
        <ThemeSwitch />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/@:id" element={<PrivateRoute authentication={true} component={PersonPage} />} />
          <Route path="/@:id/:boardid" element={<PrivateRoute authentication={false} component={IndexPage} />} />
          <Route path="/editor" element={<PrivateRoute authentication={false} component={EditorPage} />} />
          <Route path="/Signup" element={<PrivateRoute authentication={false} component={Signup} path="signup" />} />
          <Route path="/login" element={<PrivateRoute authentication={false} component={Login} path="login" />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/editor" element={<PrivateRoute authentication={false} component={EditorPage} />} />
        </Routes>
      </BrowserRouter>
    </StyleRoot>
  );
}
