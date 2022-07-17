import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px auto;
  width: 1728px;

  @media screen and (max-width: 1900px) {
    width: 1376px;
  }
  @media screen and (max-width: 1528px) {
    /* 타블렛 가로 */
    width: 1024px;
  }
  @media screen and (max-width: 1178px) {
    /* 모바일 가로, 타블렛 세로 */

    width: 672px;
  }

  @media screen and (max-width: 820px) {
    /* 모바일 세로 */
    width: 320px;
  }
`;

export const FilterContainer = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 820px) {
    /* 모바일 세로 */
    flex-direction: column;
    margin-bottom: 20px;
    gap: 20px;
    height: 96px;
  }
`;

export const Filter = styled.div`
  width: 150px;
  height: 38px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.mainColor.filter};
  color: ${({ theme }) => theme.fontColor.subColor};

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    /* 모바일 세로 */
    width: 100%;
    justify-content: space-evenly;
    height: 38px;
    border-radius: 3px;
  }
`;
