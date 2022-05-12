import styled from "styled-components";

export const Card = styled.div`
  height: 600px;
  display: grid;
  grid-template-columns: auto;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #1d1d1d;
  color: white;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: justify;
  cursor: pointer;
  margin: 30px;
  transform-style: preserve-3d;
  transform: perspective(1000px);
`;

export const CardImage = styled.img`
  grid-area: "image";

  object-fit: cover;
  height: 360px;
  width: 100%;
  border-radius: 18px 18px 0px 0px;
`;

export const CardText = styled.div`
  grid-area: "text";
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

export const Footer = styled.div`
  grid-area: "stats";

  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;
