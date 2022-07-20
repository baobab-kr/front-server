import styled from "styled-components";

type tUserActionList = {
  direction: string;
};

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0px 100px;

  @media screen and (max-width: 899px) {
    /* 모바일 세로 */
    padding: 0px 75px;
  }

  @media screen and (max-width: 850px) {
    /* 모바일 세로 */
    padding: 0px 75px;
  }

  @media screen and (max-width: 760px) {
    /* 모바일 세로 */
    padding: 0px 48px;
  }
`;

export const Properties = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 830px) {
    /* 모바일 세로 */
    align-items: center;

    width: 100%;
    height: 100%;
    flex-direction: column;
    gap: 15px;
    & div:nth-child(1) {
      order: 2;
    }
    & div:nth-child(2) {
      order: 1;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: grid;

  grid-template-columns: 0.5fr 750px 0.5fr;
  grid-gap: 20px;
`;

export const TagPlace = styled.div`
  display: flex;

  margin-top: 8px;
  max-height: 96px;
  overflow-y: auto;
`;

export const UserInfo = styled.div`
  /* margin: 30px 35px 0px 20px; */
  display: flex;

  width: 100%;
  min-height: 160px;
  /* max-width: 960px; */

  margin: 13px auto;
  margin-bottom: 20px;

  gap: 20px;

  /* background-color: #252525; */
  /* padding: 15px 0px; */
  /* height: 350px; */
`;

export const UserDiscrtprion = styled.div``;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 50px;
  flex-flow: wrap;
  margin: 25px auto;

  @media screen and (max-width: 830px) {
    /* 모바일 세로 */
    justify-content: center;
  }
`;

export const Input = styled.input`
  width: 320px;
  height: 1.9rem;
  border-radius: 8px;
  padding: 0px 30px 0px 15px;
`;

export const TagList = styled.div`
  display: flex;
  margin: 8px 15px 8px 0px;
  cursor: pointer;
  float: left;
  gap: 15px;

  color: ${({ theme }) => theme.fontColor.color};
`;

export const ThemeText = styled.div`
  color: ${({ theme }) => theme.fontColor.color};
`;

export const DivFlex = styled.div<tUserActionList>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
