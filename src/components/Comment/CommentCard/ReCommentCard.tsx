import React, { Dispatch, SetStateAction } from "react";
import { iComment } from "Types/indexPage";
import { CardWrapper, Card, UserContainer, UserInfo, Comment, CommentFooter } from "./style";
import Avator from "components/Avator/Avator";
import { user } from "Types/user";
import { patchDeleteReComment } from "api/indexPage";
import { timeForToday } from "util/date";

type tProps = {
  data: iComment;
  reComments: iComment[];
  setReComments: Dispatch<SetStateAction<iComment[]>>;
};

export default function ReCommentCard({ data, reComments, setReComments }: tProps): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const deleteReComment = async () => {
    await patchDeleteReComment(data.id).then(() => {
      setReComments(reComments.filter((q) => q.id !== data.id));
    });
  };

  return (
    <CardWrapper>
      <Card>
        <UserContainer>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <UserInfo>
              <Avator height="2em" width="2rem" userId={"1"} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div>{data.writer.username}</div>
                <div style={{ color: "rgba(255, 7, 110, 1)", fontSize: "12px", marginTop: "5px" }}>{timeForToday(data.date)}</div>
              </div>
            </UserInfo>
            {userInfo?.id === data.writer.id && (
              <div style={{ cursor: "pointer" }} onClick={deleteReComment}>
                삭제
              </div>
            )}
          </div>
        </UserContainer>
        <Comment>{data.content}</Comment>
        <CommentFooter>
          <div></div>
          <div style={{ cursor: "pointer" }}>Reply</div>
        </CommentFooter>
      </Card>
    </CardWrapper>
  );
}
