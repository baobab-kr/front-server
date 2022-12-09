import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 80px 30px;
  margin: 0px auto;
  width: 100%;

  max-width: 1370px;
  color: ${({ theme }) => theme.fontColor.color};

  @media screen and (max-width: 600px) {
    padding: 0px 0px 30px;
  }
`;

export const Template = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-top: 30px;

  @media screen and (max-width: 1080px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const FormArea = styled.div`
  width: 75%;
  background-color: ${({ theme }) => theme.backgroundColor.subColor};

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
`;

export const SubTitle = styled.h1`
  font-size: 0.9rem;
`;

export const Custominput = styled.input`
  color: ${({ theme }) => theme.fontColor.color};

  background: none;
  width: 100%;
  height: 80px;
  margin: -15px auto 0px;
  font-size: 16px;
`;

export const CustomEditinput = styled.input`
  background: none;
  color: ${({ theme }) => theme.fontColor.color};

  width: 80%;
  height: 35px;
  padding-left: 15px;
  font-size: 1rem;
`;

export const SubmitArea = styled.div`
  width: 22%;
  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

export const SubmitBtn = styled.div`
  cursor: pointer;

  width: 80%;
  height: 60px;
  margin: 0px auto;

  display: flex;

  justify-content: center;
  align-items: center;

  background-color: gray;

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

export const CareerButton = styled.div`
  width: 160px;
  height: 50px;
  color: black;
  background-color: white;
  border: 2px solid black;

  .isSelected {
    background-color: #448fff;
  }
  p {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CheckBoxBtn = styled.div`
  width: 25px;
  height: 25px;
  border: 1px solid #35363b;
  border-radius: 3px;
  padding: 0px;
`;

export const ThumbnailArea = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 200px;
  max-width: 130px;
  border-radius: 8px;
  padding: 15%;
  background-color: ${({ theme }) => theme.backgroundColor.subColor};
  margin: 0px auto;
  object-fit: contain;
  overflow: hidden;
`;

export const UserInfoArea = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  .info-area {
    padding: 30px;
  }

  @media screen and (max-width: 830px) {
    flex-direction: column;

    .info-area {
      padding: 0px;
    }
  }
`;

export const TitleArea = styled.div`
  display: flex;
  align-items: end;
  gap: 25px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const EduArea = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;
  gap: 25px;

  .edu-selector {
    width: 30%;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    .edu-selector {
      width: 100%;
    }
  }
`;

export const CareerArea = styled.div`
  padding: 30px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
