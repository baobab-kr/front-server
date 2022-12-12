import { githubLoginAPI } from "api/login";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillGithub } from "react-icons/ai";
import { Wrapper, WrapperInner } from "./style";
import { SyncLoader } from "react-spinners";
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
        navigate("/");

        window.location.reload();
      })
      .catch((err) => {
        Swal.fire("로그인 중 오류가 발생했습니다. 다시 시도해주세요");
        navigate("/");
      });
  }, []);

  return (
    <Wrapper>
      <WrapperInner>
        <AiFillGithub size={200} />
        <div>
          <p>로그인중 입니다.</p>
          잠시만 기다려주세요!
        </div>
      </WrapperInner>
      <SyncLoader color={localStorage.getItem("Theme") === "dark" ? "#FFFFFF" : "#000000"} />
    </Wrapper>
  );
}
