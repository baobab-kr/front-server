import { githubLoginAPI } from "api/login";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function GithubLogin(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const code = location.search.split("=")[1];
    if (code === undefined) {
      navigate("/");
    }

    githubLoginAPI(code)
      .then((res: any) => {
        localStorage.setItem("atexpires", JSON.stringify(res.headers.atexpires));
        localStorage.setItem("rtexpires", JSON.stringify(res.headers.rtexpires));
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
        navigate("/");
      })
      .catch((err) => {
        console.log("error catch");
        navigate("/");
      });
  }, []);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      로그인중 입니다. <br />
      잠시만 기다려주세요!
    </div>
  );
}
