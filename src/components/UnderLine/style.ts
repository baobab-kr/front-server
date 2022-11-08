import styled from "styled-components";

type tColor = {
  color: string;
};
export const Line = styled.div<tColor>`
  width: 100%;
  height: 1px;
  opacity: 0.2;
  background: ${(props) => props.color};
`;
