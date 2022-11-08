import React, { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";

import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";
import Avator from "components/Avator/Avator";
import CommentCard from "components/Comment/CommentCard/CommentCard";
import { iComment } from "Types/indexPage";
import { createComment, getComments } from "api/indexPage";

type tProps = {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
  boardID: number | undefined;
};

export default function Comment({ status, setStatus, boardID }: tProps): JSX.Element {
  const [comments, setComments] = useState<iComment[]>([]);
  const [page, setPage] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const textArea = useRef<HTMLTextAreaElement>(null);
  const resize = () => {
    if (textArea.current) {
      textArea.current.style.height = "1px";
      textArea.current.style.height = 12 + textArea.current.scrollHeight + "px";
    }
  };

  const onRespond = async () => {
    await createComment(comment, boardID!).then(async () => {
      setComment("");
      await getCommentsFnc();
    });
  };

  useEffect(() => {
    getCommentsFnc();
  }, [page]);

  const getCommentsFnc = async () => {
    await getComments(boardID!, page)
      .then((res: iComment[]) => {
        console.log("getComments", res);
        const ids = comments.map((q) => q.id);
        const result = res.filter((q) => !ids.includes(q.id));
        setComments([...comments, ...result]);
      })
      .catch((err) => {
        console.log("getcommetn err => ", err);
      });
  };

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <S.CommentWrapper status={status}>
      <S.HeaderArea>
        <S.Header>Responese ({30})</S.Header>
        <AiOutlineClose onClick={() => setStatus(false)} />
      </S.HeaderArea>
      <S.UserArea>
        <S.UserContainer>
          <S.UserInfo>
            <Avator height="2em" width="2rem" userId={"1"} />
            <div>tugwon</div>
          </S.UserInfo>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <S.Textarea
              ref={textArea}
              placeholder="댓글을 입력하세요!"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onKeyDown={resize}
              onKeyUp={resize}
              maxLength={4000}
            ></S.Textarea>
            <S.TextActionArea>
              <div>Cancel</div>
              <div className="respond" onClick={onRespond}>
                Respond
              </div>
            </S.TextActionArea>
          </div>
        </S.UserContainer>
      </S.UserArea>

      <S.CommentArea>
        {comments.map((data) => {
          return <CommentCard data={data} comments={comments} setComments={setComments} key={data.id} />;
        })}
        <S.LoadMoreBtn onClick={loadMore}>더보기</S.LoadMoreBtn>
      </S.CommentArea>
    </S.CommentWrapper>
  );
}
