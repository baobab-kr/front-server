import React from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { USER } from "../store/store.user";

interface Props {
  component: React.ComponentType;
  path?: string;
  authentication: boolean; // true = 로그인이 되어야함, false = 모든 경우 가능
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, authentication, path }) => {
  const [userInfo] = useRecoilState(USER);

  if (path === "login" && userInfo.username !== "") return <Navigate to="/" />;

  if (authentication && userInfo.username === "") {
    return <Navigate to="/login" />;
  } else if ((authentication && userInfo.username !== "") || !authentication) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};
