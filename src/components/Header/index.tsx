import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer, Logo, SearchContainer, Search, Sign, Button, UserAvator, UserContainer, UserActionList, UserActionListItem } from "./style";
import LogoImg2 from "../../assets/Logo2.png";
import DefaultAvator from "../../assets/defaultAvator.png";
import { useRecoilState } from "recoil";
import { USER } from "../../store/store.user";
import { userLogout } from "../../api/user";

type tState = {
  state: tUesrId;
};

type tUesrId = {
  userId: number;
};

export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const [userInfo] = useRecoilState(USER);
  const [toggleUser, setToggleUser] = useState<number>(0);
  const props: tState = { state: { userId: userInfo.id } };

  const navagateHome = () => {
    navigate("/");
  };
  const navagateLogin = () => {
    navigate("/login");
  };

  const navagateMy = () => {
    navigate(`/@${userInfo.username}`, props);
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
    console.log("asdasd", Number(!toggleUser));
    setToggleUser(Number(!toggleUser));
  };

  return (
    <HeaderContainer>
      <Logo onClick={navagateHome}>
        <img src={LogoImg2} style={{ width: "50px", height: "25%", objectFit: "cover", overflow: "auto" }} alt="Logo"></img>
      </Logo>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Sign>
        {userInfo.username === "" ? (
          <>
            <Button onClick={navagateLogin}>로그인</Button>
            &nbsp;|&nbsp;
            <Button>회원가입</Button>
          </>
        ) : (
          <UserContainer onClick={toggleUserInfo}>
            <UserAvator>
              <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
            </UserAvator>
            <UserActionList scale={toggleUser}>
              <UserActionListItem onClick={navagateMy}>My Home</UserActionListItem>
              <UserActionListItem onClick={navagateSetting}>설정</UserActionListItem>
              <UserActionListItem onClick={navagateEditor}>글쓰기</UserActionListItem>
              <UserActionListItem onClick={logout}>로그아웃</UserActionListItem>
            </UserActionList>
          </UserContainer>
        )}
      </Sign>
    </HeaderContainer>
  );
}
