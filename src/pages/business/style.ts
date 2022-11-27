import styled from "styled-components";

export const JobsBusinessWrap = styled.div`
  word-break: keep-all;
`;

export const HeaderLocalComp = styled.div`
  background: ${({ theme }) => theme.backgroundColor.subColor};
  height: 100px;
  padding: 0 20px;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  li {
    cursor: pointer;
    align-items: center;
    display: flex;
    margin: 0 10px;
    position: relative;
    text-align: center;
    width: 120px;
  }

  div {
    color: #7a7c85;
    display: inline-block;
    font-size: 20px;
    font-weight: 500;
    padding: 10px 0;
    transition: all 0.15s;
    width: 100%;
  }

  .active {
    ::after {
      background: #3d6aff;
      bottom: 0;
      content: "";
      height: 4px;
      left: 0;
      position: absolute;
      width: 100%;
    }
    div {
      color: ${({ theme }) => theme.fontColor.color};
    }
  }
`;

export const TemplateOneSidebar = styled.div`
  color: #e4e5e7;
  display: flex;
  justify-content: center;
  margin: 80px auto;
  max-width: 1410px;
  width: 100%;
`;

export const ColumnLeft = styled.div`
  margin: 0 16px;
  max-width: 330px;
  width: 100%;
  @media screen and (max-width: 1810px) {
    width: 300px;
  }

  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const PreviewJobsWrap = styled.div`
  display: inline-block;
  margin-top: 75px;
  position: sticky;
  top: 90px;
  vertical-align: top;
  width: 100%;
`;

export const PreviewJobsBanner = styled.div`
  margin-bottom: 40px;
  color: ${({ theme }) => theme.fontColor.color};
`;

export const PreviewJobsCard = styled.div`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.fontColor.color};
`;

export const ColumnCenter = styled.div`
  margin: 0 16px;
  max-width: 1050px;
  width: 100%;
`;

export const ColumnTitleArea = styled.div`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 30px;
  position: relative;
  color: ${({ theme }) => theme.fontColor.color};
`;

export const StepperArea = styled.div`
  background: ${({ theme }) => theme.backgroundColor.subColor};
  border-radius: 10px;
  box-shadow: 10px 20px 20px 0 rgb(11 12 14 / 8%);
  /* margin-top: 30px; */

  font-size: 15px;
  padding: 50px 0;

  margin-top: 0;
`;

export const ProcessStepsWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin: 0;
  width: 100%;

  ul {
    list-style: none;
    display: inline-flex;
    justify-content: space-between;
    margin: 0;
    width: 100%;
  }

  li {
    overflow: hidden;
    position: relative;
    text-align: center;
    width: 100%;
  }
`;

type tBoardColor = {
  color: string;
};

export const IBordered = styled.span<tBoardColor>`
  background-color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 50%;
  color: #e4e5e7;
  display: inline-block;
  font-weight: 600;
  height: 48px;
  line-height: 46px;
  position: relative;
  text-align: center;
  width: 48px;

  .active {
    color: red;
  }
`;

export const ProcessLabel = styled.span`
  color: ${({ theme }) => theme.fontColor.color};
  display: block;
  margin-top: 12px;

  /* ::after {
    border-top: 2px solid #35363b;
    content: "";
    margin: 0 -24px;
    position: absolute;
    top: 23px;
    width: 50%;
  } */
`;
