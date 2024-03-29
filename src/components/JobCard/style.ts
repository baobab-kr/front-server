import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  width: 330px;
  height: 380px;

  @media screen and (max-width: 1810px) {
    width: 300px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CardImageArea = styled.div`
  background-color: #26272b;
  border-radius: 12px;
  display: block;
  height: 185px;
  overflow: hidden;
  width: 100%;
  z-index: 10;

  cursor: pointer;

  @media screen and (max-width: 1810px) {
    height: 168px;
  }
`;

export const CardImage = styled.img`
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
`;

export const CardFooter = styled.div`
  padding-top: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardLogo = styled.div`
  box-shadow: 0 5px 20px 0 rgb(11 12 14 / 10%);
  height: 48px;
  left: 0;
  position: absolute;
  top: 20px;
  width: 48px;
  background-color: gray;
  border-radius: 8px;
`;

export const CardLogoImg = styled.img`
  border-radius: 9px;
  overflow: hidden;

  backface-visibility: hidden;
  height: 100%;
  object-fit: cover;
  object-position: center;
  width: 100%;
`;

export const CardTitle = styled.div`
  padding-left: 60px;

  .jobLink {
    color: ${({ theme }) => theme.fontColor.color};

    display: inline-block;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    line-height: 1.3;
    padding-right: 40px;
    position: relative;
    transition: all 0.15s;
    width: 100%;
  }
  div {
    /* color: #e4e5e7; */
    color: ${({ theme }) => theme.fontColor.color};

    float: left;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.15s;
  }
  .location {
    color: ${({ theme }) => theme.fontColor.jobCardColor};
  }
`;

export const CardName = styled.div`
  margin-right: 3px;
  ::after {
    color: ${({ theme }) => theme.fontColor.jobCardColor};

    content: " ・";
  }
`;

export const CardIntro = styled.div`
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: ${({ theme }) => theme.fontColor.jobCardColor};
  display: -webkit-box;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  overflow: hidden;
  padding-top: 4px;
  word-break: keep-all;
`;

export const CardDetail = styled.div`
  padding-top: 14px;

  div {
    margin-bottom: 7px;

    color: ${({ theme }) => theme.fontColor.jobCardColor};

    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    padding-left: 10px;
    position: relative;

    ::before {
      color: ${({ theme }) => theme.fontColor.jobCardColor};

      border-radius: 2px;
      content: "";
      height: 3px;
      left: 0;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 3px;
    }
  }
`;

export const MainJobCardWrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.backgroundColor.bg};
  box-shadow: 2px 2px 8px rgb(0 0 0 / 90%);
  border-radius: 5px;

  display: flex;

  padding: 10px 0px;

  color: ${({ theme }) => theme.fontColor.color};

  cursor: pointer;

  @media screen and (max-width: 1810px) {
    height: 90px;
  }
`;

export const MainCardColor = styled.p`
  color: ${({ theme }) => theme.fontColor.color};
  font-size: 12px;
`;
