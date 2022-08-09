import styled from "styled-components";

type tOpen = {
  open: boolean;
};

export const SearchOverlay = styled.div<tOpen>`
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

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 260px;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  padding: 0px 250px;
`;

export const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  left: 50%;
  max-width: 1000px;
  padding: 0 20px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 2;
`;

export const CustomInput = styled.input`
  background: none;
  border: none;
  border-bottom: 2px solid #35363b;
  color: #e4e5e7;
  font-size: 40px;
  font-weight: 500;
  padding: 0px 50px 34px 20px;
  width: 100%;
`;
