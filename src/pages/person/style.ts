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
    padding: 0px 65px;
  }
`;

export const Properties = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (max-width: 830px) {
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

export const TagListTItle = styled.div`
  width: 100%;
  max-width: 320px;

  @media screen and (max-width: 830px) {
    max-width: none;
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
  overflow-y: auto;
  flex-wrap: wrap;
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

  @media screen and (max-width: 862px) {
    flex-direction: column;
  }
  /* background-color: #252525; */
  /* padding: 15px 0px; */
  /* height: 350px; */
`;

export const UserDiscrtprion = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 15px;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const UserDescriptionChild = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  flex-basis: 50%;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  /* width: 100%;

  display: flex;
  align-items: center;
  justify-content: start;
  gap: 50px;
  flex-flow: wrap;
  margin: 25px auto;

  @media screen and (max-width: 830px) {
    justify-content: center;
  } */
  margin: 25px auto;
  width: 100%;
  position: relative;
  grid-gap: 30px;
  display: grid;
  grid-template-columns: repeat(2, 50%);

  @media screen and (max-width: 2170px) {
    grid-template-columns: repeat(2, 50%);
  }
  @media screen and (max-width: 1810px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 50%);
  }
  @media screen and (max-width: 1600px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 50%);
  }
  @media screen and (max-width: 1260px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 50%);
  }

  @media screen and (max-width: 1080px) {
    grid-gap: 25px;
    grid-template-columns: repeat(1, 100%);
  }
`;

export const Input = styled.input`
  width: 320px;
  height: 1.9rem;
  border-radius: 3px;
  padding: 0px 30px 0px 15px;

  @media screen and (max-width: 830px) {
    width: 100%;
  }
`;

export const TagList = styled.div`
  display: flex;
  margin: 8px 15px 8px 0px;
  cursor: pointer;
  float: left;
  gap: 15px;
  white-space: nowrap;

  color: ${({ theme }) => theme.fontColor.color};
`;

export const ThemeText = styled.div`
  color: ${({ theme }) => theme.fontColor.color};
`;

export const DivFlex = styled.div<tUserActionList>`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
