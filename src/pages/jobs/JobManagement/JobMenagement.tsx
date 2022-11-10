import React from "react";
import { user } from "Types/user";
import AdminMgmt from "pages/jobs/JobManagement/Admin/AdminMgmt";
import HeadHunterMgmt from "pages/jobs/JobManagement/HeadHunter/HeadHunterMgmt";
import UserMgmt from "pages/jobs/JobManagement/User/UserMgmt";

export default function JobMenagement(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  return (
    <>
      {userInfo?.role === 0 && <UserMgmt />}
      {userInfo?.role === 1 && <HeadHunterMgmt />}
      {userInfo?.role === 2 && <AdminMgmt />}
    </>
  );
}
