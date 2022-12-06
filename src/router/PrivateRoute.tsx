import { user } from "Types/user";
import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  component: React.ComponentType;
  path?: string;
  authentication: boolean; // true = 로그인이 되어야함, false = 모든 경우 가능
  role?: number;
  //TODO role으로 판별
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, authentication, path, role }) => {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  if (path === "login" && userInfo !== null) return <Navigate to="/" />;
  if (role !== undefined && userInfo?.role !== role) return <Navigate to="/" />;

  if (authentication && userInfo === null) {
    return <Navigate to="/login" />;
  } else if ((authentication && userInfo !== null) || !authentication) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
};
