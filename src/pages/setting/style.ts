import styled from "styled-components";

type props = {
  bgColor: string;
};

export const UserInfo = styled.div`
  margin: 30px 35px 0px 20px;
  display: grid;

  width: 650px;

  margin: 0px auto;
  margin-bottom: 20px;

  grid-template-columns: 150px 1fr;
  gap: 20px;
`;

export const ImageButton = styled.div<props>`
  text-align: center;
  margin-top: 8px;
  padding: 5px;
  border-radius: 3px;
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
`;

export const EditButton = styled.div`
  width: 60px;
  text-align: center;
  margin-top: 8px;
  padding: 5px;
  border-radius: 3px;
  background-color: #2f2f2f;
  cursor: pointer;
`;
