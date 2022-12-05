import styled from "styled-components";

export const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.fontColor.color};
`;
