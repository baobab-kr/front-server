import React, { Dispatch, SetStateAction, useState, KeyboardEvent, useEffect } from "react";
import API from "../../../api";

import { GitHubLogin, LoginOverlay, LoginContainer, LoginWrapper, CustomInput, VisibilityBtnArea, LoginArea, TitleArea, LoginBtn, CloseBtnArea } from "./style";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import Wave from "./Wave/Wave";
import Swal from "sweetalert2";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

type tOpen = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LoginForm({ open, setOpen }: tOpen): JSX.Element {
  const navigate = useNavigate();
  const [id, setID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);

  const closeOverlay = (e: any) => {
    if (e.target.id === "login-overlay") {
      setOpen(false);
    }
  };

  const prevet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = async () => {
    API.post("/users/login", { userid: id, password: password }, { withCredentials: true })
      .then((res) => {
        console.log("/users/login => ", res);
        localStorage.setItem("atexpires", JSON.stringify(res.headers.atexpires));
        localStorage.setItem("rtexpires", JSON.stringify(res.headers.rtexpires));
        localStorage.setItem("user", JSON.stringify(res.data));
        window.location.reload();
      })
      .catch((err) => {
        Swal.fire({ title: "로그인에 실패하였습니다.", scrollbarPadding: false });
      });
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const githubLogin = () => {
    const url: string = `https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GITHUB_CALLBACK_URL}`;

    document.location.href = url;
  };

  useEffect(() => {
    setID("");
    setPassword("");
    setVisibility(false);
  }, [open]);

  return (
    <LoginOverlay open={open} onMouseDown={closeOverlay} id="login-overlay">
      <LoginContainer onClick={prevet}>
        <Wave />
        <CloseBtnArea
          onClick={() => {
            setOpen(false);
          }}
        >
          <AiOutlineClose />
        </CloseBtnArea>
        <LoginWrapper>
          <TitleArea>
            <p className="start">시작하기</p>
            <p>지금 로그인하고 맞춤 커리어 콘텐츠로 하루를 시작하세요.</p>
            <p>매일 BAOBAB 콘텐츠가 새 탭에서 펼쳐집니다.</p>
          </TitleArea>
          <LoginArea>
            <CustomInput
              type="text"
              placeholder="ID"
              value={id}
              onChange={(e) => {
                setID(e.target.value);
              }}
            />
            <CustomInput
              type={!visibility ? "password" : "text"}
              placeholder="Password"
              value={password}
              onKeyPress={handleKeyPress}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <VisibilityBtnArea>
              {visibility && <MdVisibility onClick={() => setVisibility(false)} size="24" />}
              {!visibility && <MdVisibilityOff onClick={() => setVisibility(true)} size="24" />}
            </VisibilityBtnArea>

            <LoginBtn onClick={handleSubmit}>로그인</LoginBtn>
            <LoginBtn style={{ marginTop: "-25px" }} onClick={githubLogin}>
              <GitHubLogin>
                <AiFillGithub size={20} />
                <p>GitHub로 로그인 하기</p>
              </GitHubLogin>
            </LoginBtn>
          </LoginArea>
        </LoginWrapper>
      </LoginContainer>
    </LoginOverlay>
  );
}
