import styled from "styled-components";

export const CustomInput = styled.input`
  background: none;
  padding: 0px 50px 5px 5px;
  width: 80%;
  font-size: 16px;

  color: ${({ theme }) => theme.fontColor.color};

  @media screen and (max-width: 620px) {
    font-size: 10px;
  }
`;

export const ConfirmButton = styled.button`
  width: 65px;
  border-radius: 3px;
  background-color: #448fff;

  font-size: 14px;

  color: white;
  @media screen and (max-width: 620px) {
    font-size: 13px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;

  justify-content: space-between;
  z-index: 880;
`;

export const StepperFirst = styled.div`
  display: flex;
  width: 70%;
  margin: 0px auto;

  flex-direction: column;
  gap: 20px;

  p {
    margin-bottom: 20px;
  }
  .error {
    font-size: 0.825rem;
    margin-top: 15px;
    margin-bottom: 0px;
  }

  @media screen and (max-width: 620px) {
    gap: 10px;
    p {
      font-size: 12px;
      margin-bottom: 10px;
    }

    .error {
      font-size: 10px;
      margin-top: 10px;
    }
  }
`;

export const VisibilityBtnArea = styled.div`
  position: absolute;
  top: 30px;
  right: 10px;
  cursor: pointer;
  z-index: 990;
  color: ${({ theme }) => theme.fontColor.color};
  @media screen and (max-width: 620px) {
    top: 10px;
  }
`;
