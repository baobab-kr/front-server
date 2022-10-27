import React, { useState, useEffect, useRef } from "react";
import { CardWrapper, Card, UserContainer, UserInfo, Comment, CommentFooter, ShowReply, ReplyArea, Textarea, TextActionArea } from "./style";
import { BsFillChatFill } from "react-icons/bs";
import Avator from "components/Avator/Avator";
import ReCommentCard from "components/Comment/CommentCard/ReCommentCard";

export default function CommentCard(): JSX.Element {
  const [replyStatus, setReplyStatus] = useState<boolean>(false);
  const [createReply, setCreateReply] = useState<boolean>(false);
  const textArea = useRef<HTMLTextAreaElement>(null);
  const resize = () => {
    if (textArea.current) {
      textArea.current.style.height = "1px";
      textArea.current.style.height = 12 + textArea.current.scrollHeight + "px";
    }
  };
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
          <ShowReply style={{ cursor: "pointer" }} onClick={() => setReplyStatus(!replyStatus)}>
            <BsFillChatFill />
            {!replyStatus && <div>Show Reply</div>}
            {replyStatus && <div>Hide Reply</div>}
          </ShowReply>
          <div style={{ cursor: "pointer" }} onClick={() => setCreateReply(!createReply)}>
            Reply
          </div>
        </CommentFooter>
        {createReply && (
          <>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Textarea ref={textArea} placeholder="댓글을 입력하세요!" onKeyDown={resize} onKeyUp={resize} maxLength={4000}></Textarea>
              <TextActionArea>
                <div>Cancel</div>
                <div className="respond">Respond</div>
              </TextActionArea>
            </div>
          </>
        )}
        <ReplyArea>{replyStatus && <ReCommentCard />}</ReplyArea>
      </Card>
    </CardWrapper>
  );
}
