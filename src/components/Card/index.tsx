import React, { useState, useEffect } from "react";
import { CardWrapper, CardImage, CardText, Date, Content, Footer, User, TagWrapper, TagComponent, Like } from "./style";
import { Board, Tag } from "@src/Types";
import { useNavigate, useLocation } from "react-router-dom";
import image from "../../data/test.jpg";
import { timeForToday } from "../../util/date";

import DefaultAvator from "../../assets/defaultAvator.png";

type Props = {
  board: Board;
  width: string;
  height: string;
};

type tState = {
  state: tUesrId;
};

type tUesrId = {
  userId: number;
};

export default function Card({ board, width, height }: Props): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const props: tState = { state: { userId: board.writer.id } };

  const navigatePerson = () => {
    if (location.pathname === "/") {
      navigate(`/@${board.writer.username}`, props);
    }
  };

  const liking = () => {};

  const likeIcon = (count: number): string => {
    if (count > 50) return `🌿 ${count}`;
    else if (count > 100) return `🌴 ${count}`;
    else return `🍃 ${count}`;
  };

  return (
    <CardWrapper width={width} height={height} isHover={location.pathname === "/"}>
      {board.thumbnail !== "" && <CardImage src={image} alt="이미지"></CardImage>}

      <CardText>
        <div style={{ height: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <User onClick={navigatePerson}>
            <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "50%", overflow: "hidden" }}>
              <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
            </div>
            {board.writer.username}
          </User>
          <Date>{timeForToday(board.date)}</Date>
        </div>
        <h2 style={{ margin: "15px 0px" }}>{board.title}</h2>
        <Content>{board.description}</Content>
      </CardText>

      <Footer>
        <TagWrapper>
          {board.tags.map((tag: Tag, index: number) => {
            return <TagComponent key={index}>{tag.tag_name}</TagComponent>;
          })}
        </TagWrapper>

        <Like onClick={liking}>{likeIcon(board.likes_count)}</Like>
        {/* 🍃->🌿->🌴  => 추후 좋아요 수에 따라 이모티콘 변경 예정*/}
      </Footer>
    </CardWrapper>
  );
}
