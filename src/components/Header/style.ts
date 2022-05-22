import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.backgroundColor.bg};

  display: flex;
  align-items: center;
  z-index: 999;

  border-bottom: 1px solid #ddd;
`;

export const Logo = styled.div`
  position: fixed;
  color: ${({ theme }) => theme.fontColor.white};
  left: 35px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  position: fixed;
  right: 150px;
  padding: 15px;

  &::before {
    content: "검색";
    color: ${({ theme }) => theme.fontColor.white};
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
  color: ${({ theme }) => theme.fontColor.white};
  position: fixed;
  right: 20px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.fontColor.white};
`;
