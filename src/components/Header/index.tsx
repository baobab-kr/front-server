import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HeaderContainer,
  Logo,
  TabArea,
  Tabs,
  SearchContainer,
  ItemWrapper,
  Sign,
  Button,
  UserContainer,
  Arrow,
  UserActionList,
  UserActionListItem,
} from "./style";
import LogoImg2 from "../../assets/Logo2.png";
import { userLogout } from "../../api/user";
import { user } from "Types/user";
import SearchArea from "./SearchArea/SearchArea";
import Avator from "../Avator/Avator";

import { BsSearch } from "react-icons/bs";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";

import { TITLE_TAB } from "../../constants/index";

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
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [signupModal, setSignupModal] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const props: tState = { state: { userId: userInfo?.id || null } };
  const [tab, setTab] = useState<string>(TITLE_TAB.MAIN);

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
    setLoginModal(true);
    setSignupModal(false);
  };
  const navagateSignup = () => {
    setSignupModal(true);
    setLoginModal(false);
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

  const navagateJob = () => {
    navigate("/jobs");
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

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setTab(TITLE_TAB.MAIN);
    } else if (location.pathname === "/jobs") {
      setTab(TITLE_TAB.JOB);
    } else {
      setTab(TITLE_TAB.NOT);
    }
  }, [location.pathname]);

  return (
    <HeaderContainer>
      <Logo onClick={navagateHome}>
        <img src={LogoImg2} style={{ width: "30px", height: "25%", objectFit: "cover", overflow: "auto" }} alt="Logo"></img>
      </Logo>
      <TabArea>
        <Tabs onClick={navagateHome} current={tab === TITLE_TAB.MAIN}>
          홈 피드
        </Tabs>
        <Tabs onClick={navagateJob} current={tab === TITLE_TAB.JOB}>
          채용
        </Tabs>
      </TabArea>
      <ItemWrapper>
        <SearchContainer>
          <BsSearch onClick={seachClick} />
          <SearchArea open={open} setOpen={setOpen} />
        </SearchContainer>
        <LoginForm open={loginModal} setOpen={setLoginModal} />
        <SignupForm open={signupModal} setOpen={setSignupModal} />
        <Sign>
          {userInfo === null ? (
            <div style={{ display: "flex", gap: "15px" }}>
              <Button onClick={navagateLogin}>로그인</Button>
              <Button onClick={navagateSignup}>회원가입</Button>
            </div>
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
