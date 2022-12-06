import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";
import { BsFillChatFill } from "react-icons/bs";
import Avator from "components/Avator/Avator";
import ReCommentCard from "components/Comment/CommentCard/ReCommentCard";
import { iComment } from "Types/indexPage";
import { user } from "Types/user";
import { CreateFilteringReComment, createReComment, getReCommentCount, getReComments, patchDeleteComment } from "api/indexPage";
import { CardWrapper, Card, UserContainer, UserInfo, Comment, CommentFooter, ShowReply, ReplyArea, Textarea, TextActionArea, LoadMoreBtn } from "./style";
import { timeForToday } from "util/date";
import Swal from "sweetalert2";

type tProps = {
  data: iComment;
  comments: iComment[];
  setComments: Dispatch<SetStateAction<iComment[]>>;
  commentCnt: number;
  setCommentCnt: Dispatch<SetStateAction<number>>;
};
export default function CommentCard({ data, comments, setComments, commentCnt, setCommentCnt }: tProps): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const [replyStatus, setReplyStatus] = useState<boolean>(false);
  const [createReply, setCreateReply] = useState<boolean>(false);
  const [reComments, setReComments] = useState<iComment[]>([]);
  const [reComment, setReComment] = useState<string>("");
  const [reCommentCnt, setReCommentCnt] = useState<number>(0);

  const [page, setPage] = useState<number>(-1);

  const textArea = useRef<HTMLTextAreaElement>(null);
  const resize = () => {
    if (textArea.current) {
      textArea.current.style.height = "1px";
      textArea.current.style.height = 12 + textArea.current.scrollHeight + "px";
    }
  };

  const replyStatusHandler = (condition: boolean) => {
    setReplyStatus(condition);
    if (!condition) {
      setPage(-1);
    } else {
      loadMore();
    }
  };

  const deleteComment = async () => {
    await patchDeleteComment(data.id).then(() => {
      setComments(comments.filter((q) => q.id !== data.id));
      setCommentCnt(commentCnt - 1);
    });
  };

  // useEffect(() => {
  //   getReCommentsFnc();
  // }, [page]);

  useEffect(() => {
    const apiGet = async () => {
      await getReCommentCount(data.id).then((res) => {
        setReCommentCnt(res);
      });
    };
    apiGet();
  }, []);

  const getReCommentsFnc = async (page: number) => {
    await getReComments(data.id, page)
      .then((res: iComment[]) => {
        setPage(page);

        const ids = reComments.map((q) => q.id);
        const result = res.filter((q) => !ids.includes(q.id));
        if (result.length === 0) {
          throw new Error("is Last Page");
        }
        setReComments([...reComments, ...result]);
      })
      .catch((err) => {
        setPage(page - 1);
      });
  };

  const getNewReCommentsFnc = async () => {
    await getReComments(data.id, 0)
      .then((res: iComment[]) => {
        const ids = reComments.map((q) => q.id);
        const result = res.filter((q) => !ids.includes(q.id));
        setReComments([...result, ...reComments]);
      })
      .catch((err) => {
        Swal.fire("댓글", "댓글 작성을 실패했습니다.", "error");
      });
  };

  const onRespond = async () => {
    await createReComment(reComment, data.id).then(async (res) => {
      setReComment("");
      await getNewReCommentsFnc();
      setCreateReply(false);
      setReCommentCnt(reCommentCnt + 1);

      await CreateFilteringReComment(res.id, res.content);
    });
  };

  const loadMore = () => {
    getReCommentsFnc(page + 1);
  };

  return (
    <CardWrapper>
      <Card>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <UserContainer>
            <UserInfo>
              <Avator height="2em" width="2rem" userId={"1"} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{data.writer.username}</div>
                <div style={{ color: "rgba(255, 7, 110, 1)", fontSize: "12px", marginTop: "5px" }}>{timeForToday(data.date)}</div>
              </div>
            </UserInfo>
          </UserContainer>
          {userInfo?.id === data.writer.id && (
            <div style={{ cursor: "pointer" }} onClick={deleteComment}>
              삭제
            </div>
          )}
        </div>
        <Comment>{data.content}</Comment>
        <CommentFooter>
          <ShowReply style={{ cursor: "pointer" }} onClick={() => replyStatusHandler(!replyStatus)}>
            <BsFillChatFill />
            {!replyStatus && <div>{reCommentCnt} replies</div>}
            {replyStatus && <div>Hide Reply</div>}
          </ShowReply>
          <div style={{ cursor: "pointer" }} onClick={() => setCreateReply(!createReply)}>
            Reply
          </div>
        </CommentFooter>
        {createReply && userInfo !== null && (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Textarea
                ref={textArea}
                placeholder="댓글을 입력하세요!"
                value={reComment}
                onChange={(e) => setReComment(e.target.value)}
                onKeyDown={resize}
                onKeyUp={resize}
                maxLength={4000}
              ></Textarea>
              <TextActionArea>
                <div>Cancel</div>
                <div className="respond" onClick={onRespond}>
                  Respond
                </div>
              </TextActionArea>
            </div>
          </>
        )}

        {createReply && userInfo === null && (
          <div style={{ width: "100%", textAlign: "center", marginTop: "15px" }}>댓글 작성을 하려면 로그인이 필요합니다.</div>
        )}

        <ReplyArea>
          {replyStatus && (
            <>
              {reComments.map((data, index) => {
                return (
                  <ReCommentCard
                    data={data}
                    reComments={reComments}
                    setReComments={setReComments}
                    reCommentCnt={reCommentCnt}
                    setReCommentCnt={setReCommentCnt}
                    key={index}
                  />
                );
              })}
              <LoadMoreBtn onClick={loadMore}>더보기</LoadMoreBtn>
            </>
          )}
        </ReplyArea>
      </Card>
    </CardWrapper>
  );
}
