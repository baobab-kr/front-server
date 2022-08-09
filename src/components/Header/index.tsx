import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer, Logo, SearchContainer, ItemWrapper, Sign, Button, UserContainer, Arrow, UserActionList, UserActionListItem } from "./style";
import LogoImg2 from "../../assets/Logo2.png";
import { userLogout } from "../../api/user";
import { user } from "@src/Types/user";
import SearchArea from "./SearchArea/SearchArea";
import Avator from "../Avator/Avator";
import Modal from "./Modal/Modal ";

import { BsSearch } from "react-icons/bs";

type tState = {
  state: tUesrId;
};

type tUesrId = {
  userId: number | null;
};

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  const [toggleUser, setToggleUser] = useState<number>(0);
  const [isModal, setIsModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const props: tState = { state: { userId: userInfo?.id || null } };

  const handleCloseModal = (e: any) => {
    if (!wrapperRef.current || !wrapperRef.current.contains(e.target)) setToggleUser(0);
  };
  useEffect(() => {
    window.addEventListener("click", handleCloseModal);
    return () => {
      window.removeEventListener("click", handleCloseModal);
    };
  }, []);

  const navagateHome = () => {
    navigate("/");
  };
  const navagateLogin = () => {
    navigate("/login");
  };
  const navagateSignup = () => {
    navigate("/signup");
  };

  const navagateMy = () => {
    if (userInfo !== null) navigate(`/@${userInfo.username}`, props);
  };

  const navagateSetting = () => {
    navigate("/setting");
  };

  const navagateEditor = () => {
    navigate("/editor");
  };

  const logout = async () => {
    await userLogout()
      .then((res) => {
        if (location.pathname !== "/") navigate("/");
        window.location.reload();
      })
      .catch((err) => {});
  };

  const toggleUserInfo = () => {
    setToggleUser(Number(!toggleUser));
  };

  const seachClick = () => {
    setOpen(true);
  };

  return (
    <HeaderContainer>
      <Logo onClick={navagateHome}>
        <img src={LogoImg2} style={{ width: "50px", height: "25%", objectFit: "cover", overflow: "auto" }} alt="Logo"></img>
      </Logo>
      <ItemWrapper>
        <SearchContainer>
          <BsSearch onClick={seachClick} />
          <SearchArea open={open} setOpen={setOpen} />
        </SearchContainer>
        <Sign>
          {userInfo === null ? (
            <>
              <Button onClick={navagateLogin}>로그인</Button>
              &nbsp;|&nbsp;
              <Button onClick={navagateSignup}>회원가입</Button>
            </>
          ) : (
            <div ref={wrapperRef} onClick={toggleUserInfo}>
              <Arrow scale={toggleUser} />
              <UserContainer>
                <Avator userId={userInfo.userid} height={"40px"} width={"40px"} />
                <UserActionList scale={toggleUser}>
                  <div style={{ margin: "10px" }}>
                    <Avator userId={userInfo.userid} height={"40px"} width={"40px"} />
                  </div>
                  <hr color="#999999" />
                  <UserActionListItem onClick={navagateMy}>My Home</UserActionListItem>
                  <UserActionListItem onClick={navagateSetting}>설정</UserActionListItem>
                  <UserActionListItem onClick={navagateEditor}>글쓰기</UserActionListItem>
                  <UserActionListItem onClick={logout}>로그아웃</UserActionListItem>
                </UserActionList>
              </UserContainer>
            </div>
          )}
        </Sign>
      </ItemWrapper>
    </HeaderContainer>
  );
}
