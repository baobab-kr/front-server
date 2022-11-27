import styled from "styled-components";

export const StepperThird = styled.div`
  display: flex;
  width: 70%;
  margin: 0px auto;

  flex-direction: column;
  gap: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;

  justify-content: space-between;
  z-index: 880;
`;

export const CustomInput = styled.input`
  background: none;
  color: ${({ theme }) => theme.fontColor.color};

  padding: 0px 50px 5px 5px;
  width: 80%;
  font-size: 16px;
`;

export const ConfirmButton = styled.button`
  width: 65px;
  border-radius: 3px;
  background-color: #448fff;

  font-size: 14px;

  color: white;
`;
