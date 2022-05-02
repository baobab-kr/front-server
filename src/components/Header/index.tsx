import React from "react";
import { HeaderContainer, Logo, SearchContainer, Search, Sign } from "./style";
export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <SearchContainer>
        <Search />
      </SearchContainer>
      <Sign>
        <button style={{ border: "none", backgroundColor: "transparent" }}>로그인</button>&nbsp;|&nbsp;
        <button style={{ border: "none", backgroundColor: "transparent" }}>회원가입</button>
      </Sign>
    </HeaderContainer>
  );
}
