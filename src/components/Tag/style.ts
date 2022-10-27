import styled from "styled-components";

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundColor.subColor};
  color: ${({ theme }) => theme.mainColor.tag};
  border-radius: 5px;

  padding-left: 1rem;
  padding-right: 1rem;
  height: 1.5rem;
  white-space: nowrap;
  font-weight: 100;

  z-index: 110;

  cursor: default;
`;
