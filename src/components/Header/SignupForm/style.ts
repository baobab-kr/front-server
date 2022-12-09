import styled from "styled-components";

type tOpen = {
  open: boolean;
};

export const SignupOverlay = styled.div<tOpen>`
  position: fixed;
  left: 0px;
  top: 60px;
  width: 100%;
  height: calc(100% - 60px);
  background-color: rgba(0, 0, 0, 0.5);
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  transition: 0.3s cubic-bezier(0.65, 0.9, 0.3, 0.95);
`;

export const SignupContainer = styled.div`
  position: relative;
  width: 600px;
  height: 700px;
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColor.subColor};

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  color: ${({ theme }) => theme.fontColor.color};

  @media screen and (max-width: 820px) {
    width: 600px;
  }

  @media screen and (max-width: 620px) {
    top: 45%;
    width: 100%;
    height: 110%;

    min-height: none;
    max-height: none;
  }
`;

export const SignupWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const SiginupArea = styled.div`
  position: absolute;

  width: 100%;
  height: 75%;
  top: 130px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleArea = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;

  color: ${({ theme }) => theme.fontColor.subColor};

  p {
    font-size: 45px;
  }

  @media screen and (max-width: 620px) {
    p {
      font-size: 35px;
    }
  }
`;

export const Button = styled.button`
  width: 80px;
  border-radius: 3px;
  background-color: #448fff;
  height: 80%;

  font-size: 14px;

  color: white;
`;

export const ButtonArea = styled.div`
  width: 70%;
  margin: 0px auto;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CloseBtnArea = styled.div`
  display: none;

  position: fixed;
  top: 30px;
  right: 30px;
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
