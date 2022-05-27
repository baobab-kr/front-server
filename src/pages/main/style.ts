import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0px auto;
  width: 1324px;

  @media screen and (max-width: 1339px) {
    /* 타블렛 가로 */
    width: 874px;
  }
  @media screen and (max-width: 919px) {
    /* 모바일 가로, 타블렛 세로 */

    width: 424px;
  }

  @media screen and (max-width: 599px) {
    /* 모바일 세로 */
  }
`;

export const FilterContainer = styled.div`
  height: 60px;
  width: 100%;

  display: flex;
  justify-content: space-between;
`;

export const Filter = styled.div`
  width: 150px;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.mainColor.filter};
  color: ${({ theme }) => theme.fontColor.subColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;
