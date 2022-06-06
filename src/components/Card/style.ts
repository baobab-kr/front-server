import styled from "styled-components";

type cardInit = {
  width: string;
  height: string;
  isHover: boolean;
};

type imgInit = {
  imgHeight: string;
};

export const CardWrapper = styled.div<cardInit>`
  position: relative;
  width: ${(props) => props.width};
  max-height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgroundColor.card};
  color: ${({ theme }) => theme.fontColor.color};
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: justify;
  cursor: pointer;
  transition: 0.4s;

  ${(props) =>
    props.isHover
      ? ` &:hover {
            transform: translate(0px, -15px);
            transition: 0.4s;
          }`
      : ""};

  @media screen and (max-width: 1339px) {
    /* 타블렛 가로 */
    &:hover {
      transform: translate(0px, 0px);
      transition: 0s;
    }
  }
`;

export const CardImage = styled.img<imgInit>`
  object-fit: cover;
  height: ${(props) => props.imgHeight};
  width: 100%;
  border-radius: 8px 8px 0px 0px;
`;

export const CardText = styled.div`
  margin: 25px;
  transform: translateZ(30px);
`;

export const Content = styled.p`
  margin-bottom: 25px;
  height: 4.8rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Date = styled.span`
  color: rgb(255, 7, 110);
  font-size: 13px;
`;

export const User = styled.span`
  float: right;
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const TagWrapper = styled.div`
  width: 80%;
  display: flex;
  gap: 10px;
  padding-bottom: 3px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    height: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: #ddd;
  }
`;

export const TagComponent = styled.div`
  line-height: 1rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.mainColor.main};
  color: ${({ theme }) => theme.fontColor.subColor};
  border-radius: 1rem;

  padding-left: 1rem;
  padding-right: 1rem;
  height: 1.5rem;
`;

export const LikeComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 10%;
`;

export const Footer = styled.div`
  position: absolute;
  padding: 0px 25px;
  transform: translateZ(30px);
  display: flex;
  justify-content: space-between;
  bottom: 10px;
  width: 100%;
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: -18px;
  right: -60px;
  color: #fff;
  font-size: 20px;
`;
