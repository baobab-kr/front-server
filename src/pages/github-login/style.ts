import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.fontColor.color};
`;

export const WrapperInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  color: ${({ theme }) => theme.fontColor.color};
  margin-bottom: 100px;
`;
