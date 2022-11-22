import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./router/PrivateRoute";
import Header from "./components/Header";
import IndexPage from "./pages/index/indexPage";
import EditorPage from "./pages/editor/editorPage";
import MainPage from "./pages/main/MainPage";
import JobsPage from "./pages/jobs/JobsPage";
import ApplyJob from "pages/apply_job/ApplyJob";
import JobDetail from "pages/jobs/job-detail/JobDetail";
import BusinessPage from "./pages/business/BusinessPage";
import PersonPage from "./pages/person/PersonPage";
import Setting from "./pages/setting/Setting";
import StyleRoot from "./style/StyleRoot";
import JobMenagement from "pages/jobs/JobManagement/JobMenagement";
import { getUserInfo } from "./api/user";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import { useRecoilState } from "recoil";
import Darkmode from "./store/store.theme";
import MyApplyJobs from "pages/apply_job/my-apply-jobs/MyApplyJobs";
import NotFound from "pages/NotFound/NotFound";
import { USER_TYPE } from "constants/index";

export default function App(): JSX.Element {
  const [, setDarkMode] = useRecoilState<boolean>(Darkmode);

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
          <Route path="/@:id/my-apply-jobs" element={<PrivateRoute authentication={true} component={MyApplyJobs} role={USER_TYPE.DEVELOPER} />} />
          <Route path="/@:id/job-management" element={<PrivateRoute authentication={true} component={JobMenagement} />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/editor" element={<PrivateRoute authentication={true} component={EditorPage} />} />
          <Route path="/jobs" element={<PrivateRoute authentication={false} component={JobsPage} />} />
          <Route path="/jobs/:id" element={<PrivateRoute authentication={false} component={JobDetail} />} />
          <Route path="/business" element={<PrivateRoute authentication={false} component={BusinessPage} />} />
          <Route path="/apply/:id" element={<PrivateRoute authentication={false} component={ApplyJob} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </StyleRoot>
  );
}
