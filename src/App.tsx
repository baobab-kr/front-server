import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./router/PrivateRoute";
import Header from "./components/Header";
import IndexPage from "./pages/index/indexPage";
// import Login from "./pages/login/Login";
import MainPage from "./pages/main/MainPage";
import PersonPage from "./pages/person/PersonPage";
import Setting from "./pages/setting/Setting";
import StyleRoot from "./style/StyleRoot";
import { getUserInfo } from "./api/user";
import { useRecoilState } from "recoil";
import { USER } from "./store/store.user";

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
          <Route path="/@:id/@:boardid" element={<PrivateRoute authentication={false} component={IndexPage} />} />
          {/* <Route path="/@:id/@:boardId" element={<PrivateRoute authentication={true} component={IndexPage} />} /> */}
          {/* <Route path="/login" element={<PrivateRoute authentication={false} component={Login} path="login" />} /> */}
          <Route path="/setting" element={<PrivateRoute authentication={true} component={Setting} />} />
        </Routes>
      </BrowserRouter>
    </StyleRoot>
  );
}
