import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { user } from "Types/user";
import AdminMgmt from "pages/jobs/JobManagement/Admin/AdminMgmt";
import HeadHunterMgmt from "pages/jobs/JobManagement/HeadHunter/HeadHunterMgmt";
import { USER_TYPE } from "constants/index";

export default function JobMenagement(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userInfo!.role === USER_TYPE.DEVELOPER) {
      navigate(`/@${userInfo?.userid}/my-apply-jobs`);
    }

    const id = location.pathname.split("/");
    if (userInfo!.userid !== id[1].split("@")[1]) {
      navigate("/");
    }
  }, [userInfo]);

  return (
    <>
      {userInfo?.role === USER_TYPE.HEADHUNTER && <HeadHunterMgmt />}
      {userInfo?.role === USER_TYPE.ADMIN && <AdminMgmt />}
    </>
  );
}
