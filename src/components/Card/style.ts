import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d5efde;
  width: 420px;
  height: 400px;
  border-radius: 10px;
  color: black;

  &:hover {
    cursor: pointer;
    margin-top: -10px;
    transition: 0.4s;
    -webkit-box-shadow: 0px 9px 8px 1px rgba(0, 0, 0, 0.56);
    box-shadow: 0px 9px 8px 1px rgba(0, 0, 0, 0.56);
  }
`;

export const Content = styled.div`
  display: grid;
  padding: 10px;
  width: 100%;
  height: 100%;

  grid-template-rows: 0.2fr 1fr 0.2fr;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Body = styled.p`
  display: flex;
  align-items: center;

  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
