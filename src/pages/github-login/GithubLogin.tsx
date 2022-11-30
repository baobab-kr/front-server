import { githubLoginAPI } from "api/login";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function GithubLogin(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const code = location.search.split("=")[1];
    if (code === undefined) {
      navigate("/");
    }
    console.log("========================================");
    githubLoginAPI(code)
      .then((res: any) => {
        console.log("성공 ", res);

        localStorage.setItem("atexpires", JSON.stringify(res.headers.atexpires));
        localStorage.setItem("rtexpires", JSON.stringify(res.headers.rtexpires));
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");

        window.location.reload();
      })
      .catch((err) => {
        console.log("error catch", err);
        Swal.fire("로그인 중 오류가 발생했습니다. 다시 시도해주세요");
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
