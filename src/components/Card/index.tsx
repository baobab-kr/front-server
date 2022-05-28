import React, { useState, useEffect } from "react";
import { CardWrapper, CardImage, CardText, Date, Content, Footer, User, TagWrapper, TagComponent, LikeComponent, DeleteButton } from "./style";
import { Board, Tag, Like } from "@src/Types/main";
import { useNavigate, useLocation } from "react-router-dom";
import { timeForToday } from "../../util/date";
import { touchLikes, DeleteBoard } from "../../api/board";

import DefaultAvator from "../../assets/defaultAvator.png";

type Props = {
  board: Board;
  width: string;
  height: string;
  isMyHome: boolean;
  deleteBoard: (id: number) => void;
};

type tState = {
  state: tUesrId;
};

type tUesrId = {
  userId: number;
};

export default function Card({ board, width, height, isMyHome, deleteBoard }: Props): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const state: tState = { state: { userId: board.writer!.id } };
  const [likeState, setLikeState] = useState<string>("");
  const navigateIndex = () => {
    if (location.pathname === "/") {
      navigate(`/@${board.writer!.username}/@${board.id}`);
    }
  };
  const navigatePerson = () => {
    if (location.pathname === "/") {
      navigate(`/@${board.writer!.username}`, state);
    }
  };

  useEffect(() => {
    likeIcon(board.likes_count, board.likes);
  }, []);

  const liking = async () => {
    await touchLikes(board.id)
      .then((res) => {
        console.log("liking", res);
        Object.assign(board, { likes: [res] });
        console.log("board.likes[0].likes_status", board.likes[0]);
        const count = board.likes[0].likes_status === 1 ? ++board.likes_count : --board.likes_count;
        likeIcon(count, board.likes);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likeIcon = (count: number, state: Like[]) => {
    if (state.length === 0 || state[0].likes_status === 0) {
      setLikeState(`☘ ${count}`);
      return;
    }
    console.log(state[0].likes_status);

    if (count > 50) setLikeState(`🌿 ${count}`);
    else if (count > 100) setLikeState(`🌴 ${count}`);
    else return setLikeState(`🍃 ${count}`);
  };

  return (
    <CardWrapper width={width} height={height} isHover={location.pathname === "/"}>
      {board.thumbnail !== "" && <CardImage src={board.thumbnail} alt="이미지"></CardImage>}

      <CardText onClick={navigateIndex}>
        <div style={{ height: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <User onClick={navigatePerson}>
            <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "50%", overflow: "hidden" }}>
              <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
            </div>
            {board.writer!.username}
          </User>
          {isMyHome && (
            <DeleteButton
              onClick={() => {
                deleteBoard(board.id);
              }}
            >
              🗑
            </DeleteButton>
          )}
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

        <LikeComponent onClick={liking}>{likeState}</LikeComponent>
        {/* 🍃->🌿->🌴  => 추후 좋아요 수에 따라 이모티콘 변경 예정*/}
      </Footer>
    </CardWrapper>
  );
}
