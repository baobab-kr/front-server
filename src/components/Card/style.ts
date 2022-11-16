import styled from "styled-components";

type cardInit = {
  width: string;
  height: string;
  isHover: boolean;
};

type imgInit = {
  imgHeight: string;
};

export const Overlay = styled.span`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  height: 85%;
`;

export const HoverArea = styled.div<cardInit>`
  &:hover {
    .card {
      transform: translateY(-8px);
      transition: 0.2s;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    }
  }
`;

export const CardWrapper = styled.div<cardInit>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-width: 300px;
  min-height: 310px;
  /* width: 320px;
  height: 330px; */
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  /* background: ${({ theme }) => theme.backgroundColor.subColor}; */
  background-color: #3f3f3f;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.9);
  /* color: ${({ theme }) => theme.fontColor.color}; */
  color: #ffffff;
  text-align: justify;
  cursor: pointer;
  transition: 0.2s;

  /* ${(props) =>
    props.isHover
      ? ` &:hover {
            transform: translateY(-8px); 
            transition: 0.2s;
            box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
          }`
      : ""}; */

  @media screen and (max-width: 1339px) {
    /* 타블렛 가로 */
    &:hover {
      transform: translate(0px, 0px);
      transition: 0s;
    }
  }
`;

export const CardImage = styled.img<imgInit>`
  position: absolute;
  object-fit: cover;
  /* height: ${(props) => props.imgHeight}; */
  height: 85%;
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;

export const CardText = styled.div`
  position: absolute;
  height: 85%;
  width: 100%;
  padding: 0px 20px;
  background-color: rgba(0, 0, 0, 0.6);

  z-index: 95;
`;

export const Title = styled.p`
  position: absolute;
  font-size: 24px;
  font-weight: bold;
  word-break: break-all;

  top: 35%;
  padding-right: 20px;

  text-shadow: 1px 1px 1px gray;
  line-height: 2rem;
`;

export const Content = styled.p`
  position: absolute;
  top: 65%;

  width: calc(100% - 40px);
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

export const Date = styled.p`
  position: absolute;
  top: 15px;
  right: 15px;

  color: rgba(255, 7, 110, 1);
  font-size: 13px;
  font-weight: bold;

  z-index: 100;
`;

export const User = styled.span`
  position: absolute;
  top: 50%;
  left: 18px;

  float: right;
  display: flex;
  gap: 15px;
  align-items: center;

  color: ${({ theme }) => theme.fontColor.color};
  font-size: 11px;

  transform: translateY(-50%);
`;

export const TagWrapper = styled.div`
  position: absolute;
  /* bottom: 10px; */
  /* height: 85%; */
  width: 100%;

  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;

  bottom: 15%;

  gap: 10px;
  padding: 15px;

  max-height: 85%;
  overflow-y: hidden;
  /* overflow-y: auto; */
`;

export const LikeComponent = styled.div`
  position: absolute;
  top: 50%;

  right: 15px;
  display: flex;
  align-items: center;
  justify-content: end;
  width: 12%;

  color: ${({ theme }) => theme.fontColor.subColor};

  transform: translateY(-50%);
`;

export const Footer = styled.div`
  position: absolute;
  transform: translateZ(30px);
  display: flex;
  justify-content: space-between;
  bottom: 0px;
  width: 100%;
  height: 15%;

  background-color: ${({ theme }) => theme.backgroundColor.bg};
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 15px;
  right: -25px;
  color: #fff;
  font-size: 20px;
`;
