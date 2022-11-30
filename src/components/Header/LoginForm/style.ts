import styled from "styled-components";

type tOpen = {
  open: boolean;
};

export const LoginOverlay = styled.div<tOpen>`
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

export const LoginContainer = styled.div`
  position: relative;
  width: 800px;
  height: 80%;
  min-height: 500px;
  max-height: 600px;
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColor.subColor};

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;

  @media screen and (max-width: 820px) {
    width: 600px;
  }

  @media screen and (max-width: 620px) {
    width: 100%;
    height: 100%;

    min-height: none;
    max-height: none;
  }
`;

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CustomInput = styled.input`
  background: none;
  color: #e4e5e7;
  padding: 0px 50px 15px 15px;
  width: 70%;
  margin: 0px auto;
  font-size: 16px;

  color: ${({ theme }) => theme.fontColor.color};
`;

export const LoginBtn = styled.button`
  width: 70%;
  background-color: white;
  margin: 0px auto;
  height: 35px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

export const CancelArea = styled.div`
  position: absolute;

  top: 30px;
  right: 30px;
`;

export const LoginArea = styled.div`
  position: absolute;

  width: 100%;
  height: 200px;
  top: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`;

export const TitleArea = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15px;

  color: ${({ theme }) => theme.fontColor.subColor};

  width: 100%;

  .start {
    font-size: 45px;
  }
  @media screen and (max-width: 620px) {
    padding: 0px 15px;

    p {
      font-size: 12px;
    }

    .start {
      font-size: 35px;
    }
  }
`;

export const VisibilityBtnArea = styled.div`
  position: absolute;
  right: 130px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.fontColor.color};
  cursor: pointer;

  @media screen and (max-width: 820px) {
    right: 100px;
  }

  @media screen and (max-width: 620px) {
    right: 50px;
  }
`;

export const GitHubLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 100%;
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
