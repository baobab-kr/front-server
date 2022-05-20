import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, SearchContainer, Search, Sign, Button } from "./style";
export default function Header(): JSX.Element {
  const navigate = useNavigate();
  const navagateHome = () => {
    navigate("/");
  };

  return (
    <HeaderContainer>
      <Logo onClick={navagateHome}>Logo</Logo>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Sign>
        <Button>로그인</Button>
        &nbsp;|&nbsp;
        <Button>회원가입</Button>
      </Sign>
    </HeaderContainer>
  );
}
