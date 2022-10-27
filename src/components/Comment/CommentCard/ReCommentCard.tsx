import Avator from "components/Avator/Avator";
import React from "react";
import { CardWrapper, Card, UserContainer, UserInfo, Comment, CommentFooter } from "./style";

export default function ReCommentCard(): JSX.Element {
  return (
    <CardWrapper>
      <Card>
        <UserContainer>
          <UserInfo>
            <Avator height="2em" width="2rem" userId={"1"} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>tugwon</div>
              <div>35분전</div>
            </div>
          </UserInfo>
        </UserContainer>
        <Comment>댓글입니다. 댓글입니다.</Comment>
        <CommentFooter>
          <div></div>
          <div style={{ cursor: "pointer" }}>Reply</div>
        </CommentFooter>
      </Card>
    </CardWrapper>
  );
}
