import styled from "styled-components";

export const MainBanner = styled.div`
  height: 20vh;
  max-height: 400px;
  min-height: 250px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 10;
  margin-top: -20px;

  @media screen and (max-width: 1810px) {
    min-height: 250px;
  }
`;

export const BannerImageArea = styled.div`
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 0;

  &::after {
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
`;

export const BannerTitle = styled.div`
  position: absolute;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 100%;
  top: 60px;
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

export const LinkBtn = styled.button`
  background-color: #3d6aff;

  width: 350px;
  height: 60px;

  border-radius: 75px;

  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

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

export const ItemTitleArea = styled.div`
  color: ${({ theme }) => theme.fontColor.color};
  font-size: 35px;
  font-weight: 700;
  height: 40px;
  margin-bottom: 16px;
  margin-top: 10px;
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
