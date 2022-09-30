import styled from "styled-components";

export const TemplateSectionFooter = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const InputWrap = styled.div`
  align-items: center;
  border-bottom: 1px solid #35363b;
  display: flex;
  padding: 0 8px;
`;

export const LabelArea = styled.div`
  padding: 30px 0;
  width: 100%;
  color: ${({ theme }) => theme.fontColor.color};

  label {
    display: block;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
  }

  .info {
    color: #7a7c85;
    display: block;
    font-size: 14px;
    line-height: 1.5;
    margin-top: 6px;
  }
`;

export const CustomButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  border-radius: 6px;
  box-shadow: 0 5px 20px 0 rgb(11 12 14 / 10%);
  color: #7a7c85;
  justify-content: center;
  position: relative;
  font-size: 18px;
  font-weight: 600;
  height: 70px;
  padding: 0 32px;
  width: 240px;
  border-radius: 100px;

  :hover {
    background-color: #448fff;
    color: white;
  }
`;

export const InputAreaFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const BackButton = styled.button`
  background: none;
  box-shadow: none;
  color: #7a7c85;
  cursor: pointer;
  font-size: 14px;
  height: 54px;
  margin-left: -20px;
  width: 140px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
