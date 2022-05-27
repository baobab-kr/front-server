import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./router/PrivateRoute";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import MainPage from "./pages/main/MainPage";
import PersonPage from "./pages/person/PersonPage";
import Setting from "./pages/setting/Setting";
import StyleRoot from "./style/StyleRoot";
import { getUserInfo } from "./api/user";
import { useRecoilState } from "recoil";
import { USER } from "./store/store.user";
import Signup from "./pages/Signup/Signup";

export default function App(): JSX.Element {
  const [_, setUserInfo] = useRecoilState(USER);

  useEffect(() => {
    getUserInfoFnc();
    console.log("asd");
  }, []);

  const getUserInfoFnc = async () => {
    await getUserInfo()
      .then((data) => {
        // localStorage.setItem("user", JSON.stringify(data));
        setUserInfo(data);
      })
      .catch((err) => {
        console.log("로그인 실패", err);
      });
  };

  return (
    <StyleRoot>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/@:id" element={<PrivateRoute authentication={true} component={PersonPage} />} />
          <Route path="/Signup" element={<PrivateRoute authentication={false} component={Signup} path="signup" />} />
          <Route path="/login" element={<PrivateRoute authentication={false} component={Login} path="login" />} />
          <Route path="/setting" element={<PrivateRoute authentication={true} component={Setting} />} />
        </Routes>
      </BrowserRouter>
    </StyleRoot>
  );
}
