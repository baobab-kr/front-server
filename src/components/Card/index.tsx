import React from "react";
import { CardWrapper, CardImage, CardText, Date, Content, Footer, User } from "./style";
import { boardInfo } from "@src/Types";
import { useNavigate, useLocation } from "react-router-dom";

import DefaultAvator from "../../assets/defaultAvator.png";

type Props = {
  borderID: number;
  imgSrc: string;
  board: boardInfo;
  width: string;
  height: string;
};
export default function Card({ board, imgSrc, borderID, width, height }: Props): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const navigatePerson = () => {
    if (location.pathname === "/") {
      navigate(`/@${borderID}`);
    }
  };

  return (
    <CardWrapper width={width} height={height} isHover={location.pathname === "/"}>
      <CardImage src={imgSrc}></CardImage>
      <CardText>
        <div style={{ height: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <User onClick={navigatePerson}>
            <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "50%", overflow: "hidden" }}>
              <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
            </div>
            baobab-kr
          </User>
          <Date>4 days ago</Date>
        </div>
        <h2 style={{ margin: "15px 0px" }}>{board.title}</h2>
        <Content>{board.body}</Content>
        <Footer>
          <div># {board.footer[0]}</div>
          <div>🌴 {board.footer[1]}</div>
          {/* 🍃->🌿->🌴  => 추후 좋아요 수에 따라 이모티콘 변경 예정*/}
        </Footer>
      </CardText>
    </CardWrapper>
  );
}
