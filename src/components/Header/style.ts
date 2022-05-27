import styled from "styled-components";

type tUserActionList = {
  scale: number;
};

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
  left: 35px;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  position: fixed;
  right: 150px;
  padding: 15px;

  &::before {
    content: "검색";
    color: ${({ theme }) => theme.fontColor.color};
    line-height: 1;
  }
`;

export const Search = styled.input`
  width: 20rem;
  height: 1.9rem;
  border-radius: 8px;
  padding: 0px 30px 0px 15px;
  margin-left: 15px;

  /* background-image: url("../../data/search.jpg"); */
  /* background-repeat: no-repeat; */
`;

export const Sign = styled.div`
  color: ${({ theme }) => theme.fontColor.color};
  position: fixed;
  right: 20px;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.fontColor.color};
`;

export const UserContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const UserAvator = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 70%;
  overflow: hidden;
  justify-self: start;
`;

export const UserActionList = styled.ul<tUserActionList>`
  position: absolute;
  left: -95px;
  width: 135px;
  background-color: #2f2f2f;
  transform-origin: 85% 0;
  border-radius: 5px;
  transform: scale(${(props) => props.scale});
  transition: 0.4s cubic-bezier(0.65, 0.9, 0.3, 0.95);
`;

export const UserActionListItem = styled.li`
  margin: 8px 0px;
  padding: 8px;

  &:hover {
    background-color: #1d1d1d;
  }
`;
