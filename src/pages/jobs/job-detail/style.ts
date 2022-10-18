import styled from "styled-components";

export const WrapperArea = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const Template = styled.div`
  background: ${({ theme }) => theme.backgroundColor.subColor};
  border-radius: 10px;
  box-shadow: 10px 20px 20px 0 rgb(11 12 14 / 8%);
  margin-top: 30px;
`;

export const TemplateArea = styled.div`
  padding: 30px;
  position: relative;
`;

export const CompanyName = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
`;

export const JobOptionArea = styled.div`
  border-top: 1px solid white;
  border-bottom: 1px solid white;

  padding: 10px;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TalentArea = styled.div`
  border-top: 1px solid white;

  padding: 10px;
  width: 100%;

  margin-top: 30px;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 30px;
`;

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

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ApplyButton = styled.div`
  width: 250px;
  height: 60px;
  background-color: #448fff;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 1.5rem;
  cursor: pointer;
`;
