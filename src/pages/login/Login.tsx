import React, { useState, useEffect } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";

export default function Login(): JSX.Element {
  const Navigate = useNavigate();

  const logincontrol = () => {
    API.post("/users/login", { userid: "tugown", password: "Baobab123@" }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));

        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ padding: "150px", display: "flex", flexDirection: "column" }}>
      <button style={{ color: "black", background: "white" }} onClick={logincontrol}>
        로그인
      </button>
    </div>
  );
}
