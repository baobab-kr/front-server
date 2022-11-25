import React, { useState, useEffect } from "react";
import { HoverArea, Overlay, CardWrapper, CardImage, CardText, Date, Title, Content, Footer, User, TagWrapper, LikeComponent, DeleteButton } from "./style";
import { Board, Tag, Like } from "Types/main";
import { useNavigate, useLocation } from "react-router-dom";
import { timeForToday } from "util/date";
import { getBoardThumbnail, touchLikes } from "api/board";

import Avator from "../Avator/Avator";
import TagComponent from "components/Tag/Tag";
// import de from "../../baobab-data/develop1.jpg";

type Props = {
  board: Board;
  width: string;
  height: string;
  imgHeight: string;
  isMyHome: boolean;
  deleteBoard: (id: number) => void;
};

type tState = {
  state: tUesrId;
};

type tUesrId = {
  userId: number;
};

export default function Card({ board, width, height, isMyHome, deleteBoard, imgHeight }: Props): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const state: tState = { state: { userId: board.writer!.id } };
  const [likeState, setLikeState] = useState<string>("");
  const [isListHover, setIsListHover] = useState<boolean>(false);
  const [imgSrc, setImgSrc] = useState<string>("");

  const navigateIndex = () => {
    navigate(`/@${board.writer!.username}/${board.id}`, state);
  };
  const navigatePerson = () => {
    if (location.pathname === "/") {
      navigate(`/@${board.writer!.username}`, state);
    }
  };

  useEffect(() => {
    likeIcon(board.likes_count, board.likes);

    getThumbnail(board.thumbnail);
  }, []);

  const liking = async () => {
    await touchLikes(board.id)
      .then((res) => {
        Object.assign(board, { likes: [res] });
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

    if (count > 50) setLikeState(`🌿 ${count}`);
    else if (count > 100) setLikeState(`🌴 ${count}`);
    else return setLikeState(`🍃 ${count}`);
  };

  const getThumbnail = async (name: string) => {
    if (board.thumbnail === "") return;

    await getBoardThumbnail(name).then((data) => {
      const blob = new Blob([data.data], { type: data.type });
      const url = URL.createObjectURL(blob);
      setImgSrc(url);
    });
  };
  //

  return (
    <HoverArea isHover={location.pathname === "/"} height={height} width={width}>
      <CardWrapper
        className="card"
        width={width}
        height={height}
        isHover={location.pathname === "/"}
        onMouseEnter={() => {
          setIsListHover(true);
        }} // 마우스엔터 이벤트이면 hide가 false가 된다.
        onMouseLeave={() => {
          setIsListHover(false);
        }}
      >
        {/* {board.thumbnail !== "" && <CardImage onClick={navigateIndex} src={board.thumbnail} alt="이미지"></CardImage>} */}
        {board.thumbnail !== "" && <CardImage imgHeight={imgHeight} src={imgSrc} alt="이미지"></CardImage>}

        <CardText onClick={navigateIndex}>
          <Title>{board.title}</Title>
          <Content>{board.description}</Content>
        </CardText>

        <Date>{timeForToday(board.date)}</Date>

        {isListHover && (
          <>
            <Overlay onClick={navigateIndex} />
            <TagWrapper>
              {board.tags.map((tag: Tag, index: number) => {
                return <TagComponent key={index} tag_name={tag.tag_name} />;
              })}
            </TagWrapper>
          </>
        )}

        {isMyHome && (
          <DeleteButton
            onClick={() => {
              deleteBoard(board.id);
            }}
          >
            🗑
          </DeleteButton>
        )}

        <Footer>
          <User onClick={navigatePerson}>
            {/* <div style={{ width: "1.5rem", height: "1.5rem", borderRadius: "50%", overflow: "hidden" }}>
            <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
          </div> */}
            <Avator userId={board.writer!.userid} width={"1.5rem"} height={"1.5rem"} />
            by {board.writer!.username}
          </User>
          <LikeComponent onClick={liking}>{likeState}</LikeComponent>
          {/* 🍃->🌿->🌴  => 추후 좋아요 수에 따라 이모티콘 변경 예정*/}
        </Footer>
      </CardWrapper>
    </HoverArea>
  );
}
