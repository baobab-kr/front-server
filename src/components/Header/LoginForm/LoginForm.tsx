import React, { Dispatch, SetStateAction, useState, KeyboardEvent, useEffect } from "react";
import API from "../../../api";

import { LoginOverlay, LoginContainer, LoginWrapper, CustomInput, VisibilityBtnArea, LoginArea, TitleArea, LoginBtn } from "./style";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import Wave from "./Wave/Wave";
import Swal from "sweetalert2";

type tOpen = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LoginForm({ open, setOpen }: tOpen): JSX.Element {
  const [id, setID] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [visibility, setVisibility] = useState<boolean>(false);

  const closeOverlay = () => {
    setOpen(false);
  };

  const prevet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleSubmit = async () => {
    console.log("asdasdasd");
    API.post("/users/login", { userid: id, password: password }, { withCredentials: true })
      .then((res) => {
        console.log("login res => ", res);
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

  useEffect(() => {
    setID("");
    setPassword("");
    setVisibility(false);
  }, [open]);

  return (
    <LoginOverlay open={open} onClick={closeOverlay}>
      <LoginContainer onClick={prevet}>
        <Wave />

        <LoginWrapper>
          <TitleArea>
            <p style={{ fontSize: "45px" }}>시작하기</p>
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
              {visibility && <MdVisibility onClick={() => setVisibility(false)} size="24" color="#e4e5e7" />}
              {!visibility && <MdVisibilityOff onClick={() => setVisibility(true)} size="24" color="#e4e5e7" />}
            </VisibilityBtnArea>

            <LoginBtn onClick={handleSubmit}>로그인</LoginBtn>
          </LoginArea>
        </LoginWrapper>
      </LoginContainer>
    </LoginOverlay>
  );
}
