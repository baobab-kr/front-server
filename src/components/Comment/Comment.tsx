import React, { Dispatch, SetStateAction, useRef } from "react";

import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";
import Avator from "components/Avator/Avator";
import CommentCard from "components/Comment/CommentCard/CommentCard";
import ReCommentCard from "components/Comment/CommentCard/ReCommentCard";

type tProps = {
  status: boolean;
  setStatus: Dispatch<SetStateAction<boolean>>;
  boardID: number | undefined;
};
export default function Comment({ status, setStatus, boardID }: tProps): JSX.Element {
  const textArea = useRef<HTMLTextAreaElement>(null);
  const resize = () => {
    if (textArea.current) {
      textArea.current.style.height = "1px";
      textArea.current.style.height = 12 + textArea.current.scrollHeight + "px";
    }
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
            <S.Textarea ref={textArea} placeholder="댓글을 입력하세요!" onKeyDown={resize} onKeyUp={resize} maxLength={4000}></S.Textarea>
            <S.TextActionArea>
              <div>Cancel</div>
              <div className="respond">Respond</div>
            </S.TextActionArea>
          </div>
        </S.UserContainer>
      </S.UserArea>

      <S.CommentArea>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </S.CommentArea>
    </S.CommentWrapper>
  );
}
