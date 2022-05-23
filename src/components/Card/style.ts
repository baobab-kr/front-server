import styled from "styled-components";

type cardInit = {
  width: string;
  height: string;
  isHover: boolean;
};

export const CardWrapper = styled.div<cardInit>`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background: #1d1d1d;
  color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: justify;
  cursor: pointer;
  transition: 0.4s;

  ${(props) =>
    props.isHover
      ? ` &:hover {
    margin-top: -10px;
    transition: 0.4s;
  }`
      : ""};
`;

export const CardImage = styled.img`
  object-fit: cover;
  height: 55%;
  width: 100%;
  border-radius: 18px 18px 0px 0px;
`;

export const CardText = styled.div`
  margin: 25px;
  transform: translateZ(30px);
`;

export const Content = styled.p`
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
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

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;
