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

export const ItemWrapper = styled.div`
  position: fixed;
  right: 150px;
  right: 20px;

  display: flex;
  gap: 35px;
  align-items: center;
`;

export const SearchContainer = styled.div`
  padding: 5px 0px 0px 0px;
  cursor: pointer;
`;

export const Search = styled.input`
  width: 20rem;
  height: 1.9rem;
  border-radius: 8px;
  padding: 0px 30px 0px 15px;
  margin-left: 15px;

  @media screen and (max-width: 630px) {
    width: 13rem;
  }

  /* background-image: url("../../data/search.jpg"); */
  /* background-repeat: no-repeat; */
`;

export const Sign = styled.div`
  color: ${({ theme }) => theme.fontColor.color};
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

export const Arrow = styled.div<tUserActionList>`
  position: absolute;
  top: 40px;
  right: 14px;
  width: 12px;
  height: 8px;
  border-left: 6px solid transparent;
  border-bottom: 8px solid hsl(230, 6%, 18%);
  border-right: 6px solid transparent;
  transform: scale(${(props) => props.scale});
  transition: 0.4s cubic-bezier(0.65, 0.9, 0.3, 0.95);
  /* background-color: #2f2f2f; */
`;

export const UserActionList = styled.ul<tUserActionList>`
  position: absolute;
  top: 48px;
  right: 0px;
  width: 280px;
  background-color: #2f2f2f;
  transform-origin: 95% -3%;
  border-radius: 8px;
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
