import React, { useState, useEffect, Dispatch, SetStateAction, useRef } from "react";

import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";
import Avator from "components/Avator/Avator";
import CommentCard from "components/Comment/CommentCard/CommentCard";
import { iComment } from "Types/indexPage";
import { createComment, CreateFilteringComment, getCommentCount, getComments } from "api/indexPage";
import InfiniteScroll from "components/InfiniteScroll";
import { user } from "Types/user";

type tProps = {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
  boardID: number | undefined;
  commentCnt: number;
  setCommentCnt: Dispatch<SetStateAction<number>>;
};

export default function Comment({ status, setStatus, boardID, commentCnt, setCommentCnt }: tProps): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const [comments, setComments] = useState<iComment[]>([]);
  const [page, setPage] = useState<number>(-1);
  const [comment, setComment] = useState<string>("");
  const [isLastPage, setIsLastPage] = useState<boolean>(false);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const resize = () => {
    if (textArea.current) {
      textArea.current.style.height = "1px";
      textArea.current.style.height = 12 + textArea.current.scrollHeight + "px";
    }
  };

  const onRespond = async () => {
    await createComment(comment, boardID!).then(async (res) => {
      console.log("createComment", res);
      setComment("");
      setCommentCnt(commentCnt + 1);
      setIsLastPage(false);
      await getNewCommentsFnc();
      await CreateFilteringComment(res.comment_id, res.content);
    });
  };

  // useEffect(() => {

  // }, [page]);

  const getCommentsFnc = async (page: number) => {
    await getComments(boardID!, page)
      .then((res: iComment[]) => {
        setPage(page);
        const ids = comments.map((q) => q.id);
        const result = res.filter((q) => !ids.includes(q.id));
        if (result.length === 0) {
          throw new Error("is Last Page");
        }
        setComments([...comments, ...result]);
      })
      .catch((err) => {
        console.log("getcommetn err => ", err);
        setIsLastPage(true);
        setPage(page - 1);
      });
  };

  const getNewCommentsFnc = async () => {
    await getComments(boardID!, 0)
      .then((res: iComment[]) => {
        const ids = comments.map((q) => q.id);
        const result = res.filter((q) => !ids.includes(q.id));
        if (result.length === 0) {
          throw new Error("is Last Page");
        }
        setComments([...result, ...comments]);
        getCommentCountFnc();
      })
      .catch((err) => {
        console.log("getcommetn err => ", err);
        setIsLastPage(true);
      });
  };

  const getCommentCountFnc = async () => {
    await getCommentCount(boardID!).then((res) => {
      console.log(res);
    });
  };

  const loadMore = () => {
    if (isLastPage) return;
    console.log(page + 1);
    getCommentsFnc(page + 1);
  };

  return (
    <S.CommentWrapper status={status}>
      <S.HeaderArea>
        <S.Header>Responese ({commentCnt})</S.Header>
        <AiOutlineClose onClick={() => setStatus(false)} />
      </S.HeaderArea>
      <S.UserArea>
        {userInfo !== null && (
          <S.UserContainer>
            <S.UserInfo>
              <Avator height="2em" width="2rem" userId={userInfo.userid} />
              <div>{userInfo.username}</div>
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
        )}
        {userInfo === null && <div style={{ width: "100%", textAlign: "center" }}>댓글 작성을 하려면 로그인이 필요합니다.</div>}
      </S.UserArea>

      <S.CommentArea>
        <InfiniteScroll loadFnc={loadMore} data={comments} isLast={isLastPage} isOnTop={false}>
          {comments.map((data) => {
            return (
              <CommentCard data={data} comments={comments} setComments={setComments} commentCnt={commentCnt} setCommentCnt={setCommentCnt} key={data.id} />
            );
          })}
        </InfiniteScroll>
      </S.CommentArea>
    </S.CommentWrapper>
  );
}
