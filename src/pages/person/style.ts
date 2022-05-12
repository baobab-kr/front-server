import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: 0.5fr 750px 0.5fr;
  grid-gap: 20px;
`;

export const TagPlace = styled.div`
  margin: 63px 0px 0px 20px;
`;

export const UserInfo = styled.div`
  margin: 30px 35px 0px 20px;
  display: grid;

  grid-template-columns: 150px 1fr;
  gap: 20px;
`;

export const Content = styled.div``;

export const Input = styled.input`
  margin: 85px 0px 0px 0px;
  width: 20rem;
  height: 1.9rem;
  border-radius: 8px;
  padding: 0px 30px 0px 15px;
  margin-left: 15px;
`;
