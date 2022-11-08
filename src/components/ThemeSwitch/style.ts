import styled from "styled-components";

type tSelected = {
  isSelected: boolean;
};

export const SwitchContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 25px;
  height: 130px;
  width: 40px;
  transform: translate(0%, -50%);

  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-items: center;
  z-index: 999;
`;

export const Divider = styled.span`
  background-color: gray;
  height: 1px;
  width: 25px;
`;

export const Mode = styled.p<tSelected>`
  writing-mode: vertical-rl;
  font-size: 14px;
  font-weight: bold;
  color: ${({ theme, isSelected }) => (isSelected ? "#3858F6" : theme.fontColor.subColor)};

  cursor: pointer;
`;
