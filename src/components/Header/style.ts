import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #8fceb1;
  display: flex;
  align-items: center;
  z-index: 999;
`;

export const Logo = styled.div`
  position: fixed;
  color: black;
  left: 35px;
`;

export const SearchContainer = styled.div`
  position: fixed;
  right: 150px;
  padding: 15px;

  &::before {
    content: "검색";
    color: black;
    line-height: 1;
  }
`;

export const Search = styled.input`
  width: 20rem;
  height: 1.9rem;
  border-radius: 8px;
  padding: 0px 30px 0px 15px;
  margin-left: 15px;

  background-image: url("../../data/search.jpg");
  background-repeat: no-repeat;
`;

export const Sign = styled.div`
  color: black;
  position: fixed;
  right: 20px;
`;
