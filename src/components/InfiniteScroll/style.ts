import styled from "styled-components";

export const TopButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.backgroundColor.subColor};
  color: ${({ theme }) => theme.fontColor.color};

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transition: 0.4s;
    ::after {
      content: "On Top";
      position: absolute;
      top: -25px;
      opacity: 1;
      font-size: 0.7rem;
      transition: font-size 0.2s 0s ease, opacity 0.2s 0.2s ease;

      color: ${({ theme }) => theme.fontColor.color};
    }
  }

  &:after {
    content: "On Top";
    position: absolute;
    top: -25px;
    font-size: 0;
    opacity: 0;
    transition: opacity 0.2s 0s ease, font-size 0.2s 0.2s ease;

    color: ${({ theme }) => theme.fontColor.color};
  }
`;
