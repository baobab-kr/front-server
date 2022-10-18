import styled from "styled-components";

type tOpen = {
  open: Boolean;
};

export const ListHeader = styled.div<tOpen>`
  cursor: pointer;
  color: ${({ theme }) => theme.fontColor.color};
  padding: 15px;
  border-radius: 8px;
  background-color: ${({ theme, open }) => (!open ? "transparent" : theme.backgroundColor.subColor)};
  /*${({ theme }) => theme.backgroundColor.subColor};*/
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor.subColor};
  }
`;

export const List = styled.ul<tOpen>`
  display: ${(props) => (props.open ? "flex" : "none")};
  transform: scaleY(${(props) => (props.open ? 1 : 0)});
  float: none;
  flex-direction: column;
  gap: 10px;
  margin-left: 15px;
  transition: 0.4s cubic-bezier(0.65, 0.9, 0.3, 0.95);
  transform-origin: top;
  color: ${({ theme }) => theme.fontColor.subColor};

  cursor: pointer;
`;
