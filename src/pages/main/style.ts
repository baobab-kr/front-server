import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const WrapperInner = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 340px auto;
  text-align: left;
`;

export const NavArea = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  height: 100vh;
  left: 0;
  /* margin-top: -20px; */
  padding-top: 90px;
  top: 0;
  transition: all 0.15s;
  width: 260px;
`;

export const ContentArea = styled.div`
  position: relative;

  padding: 80px 0 100px;
`;

export const HeadWrapper = styled.div`
  left: 0;
  position: absolute;
  top: 70px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
`;

export const HeadCategoryArea = styled.div`
  left: 0;
  position: absolute;
  top: 0;
  transition: padding 0.2s;
  width: 100%;

  align-items: center;
  background: transparent;
  color: #e4e5e7;
  display: flex;
  font-size: 40px;
  font-weight: 700;
  line-height: 40px;
  pointer-events: none;
  word-break: keep-all;
`;

export const ItemTitleArea = styled.div`
  color: ${({ theme }) => theme.fontColor.color};
  font-size: 20px;
  font-weight: 700;
  height: 30px;
  margin-bottom: 16px;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const ItemArea = styled.div`
  grid-gap: 30px;
  display: grid;
  grid-template-columns: repeat(6, 330px);

  @media screen and (max-width: 2170px) {
    grid-template-columns: repeat(4, 330px);
  }
  @media screen and (max-width: 1810px) {
    grid-gap: 25px;
    grid-template-columns: repeat(4, 300px);
  }
  @media screen and (max-width: 1600px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 300px);
  }
  @media screen and (max-width: 1260px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 300px);
  }
`;

export const JobArea = styled.div`
  grid-column: 4;
  grid-row: 1;
  height: 330px;
  position: relative;
  width: 330px;

  @media screen and (max-width: 1810px) {
    height: 310px;
    width: 300px;
  }
  @media screen and (max-width: 1600px) {
    grid-column: 3;
  }
  @media screen and (max-width: 1260px) {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const JobHeader = styled.div`
  position: absolute;
  top: -44px;
  width: 100%;

  display: flex;
  gap: 15px;
`;

export const JobList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;

export const JobCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: #1d1d1d;
  box-shadow: 2px 2px 8px rgb(0 0 0 / 90%);
  border-radius: 5px;

  display: flex;

  padding: 10px 0px;

  @media screen and (max-width: 1810px) {
    height: 90px;
  }
`;

export const MainBanner = styled.div`
  height: 55vh;
  max-height: 700px;
  min-height: 500px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 10;
  margin-top: -20px;

  @media screen and (max-width: 1810px) {
    min-height: 450px;
  }
`;

export const BannerTitle = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  height: 100%;
  justify-content: center;
  /* top: 70px; */
`;

export const BannerDesc = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  bottom: 40px;
  left: 20px;
`;

export const BannerImageArea = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  &::after {
    background: rgba(26, 27, 30, 0.7);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;
