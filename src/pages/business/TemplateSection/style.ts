import styled from "styled-components";

export const Template = styled.div`
  background: ${({ theme }) => theme.backgroundColor.subColor};
  border-radius: 10px;
  box-shadow: 10px 20px 20px 0 rgb(11 12 14 / 8%);
  margin-top: 30px;
  color: ${({ theme }) => theme.fontColor.color};
`;

type Props = {
  beforeOpen: boolean;
};

export const SectionTitleArea = styled.div<Props>`
  padding: 30px;
  position: relative;

  ${(props) =>
    props.beforeOpen
      ? `
  ::before {
    background: #3d6aff;
    border-radius: 10px;
    content: "";
    height: 68px;
    left: 8px;
    position: absolute;
    top: 6px;
    width: 4px;
  }`
      : `  
      ::before {
        content: none;
      }
      `};
`;

export const SectionTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.fontColor.color};
`;
