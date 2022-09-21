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
  height: 600px;
  border-radius: 16px;
  background: ${({ theme }) => theme.backgroundColor.subColor};

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
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
`;

export const VisibilityBtnArea = styled.div`
  position: absolute;
  right: 150px;
  margin-bottom: 15px;

  cursor: pointer;
`;