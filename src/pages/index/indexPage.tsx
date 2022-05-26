import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import React, { useEffect, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import { Content, CommentBox, Index, InputComment, Top } from "./indexPageStyle";

export default function IndexPage() {
  const [comment, setComment] = useState();
  const content = `<p><strong>asdfasdfasdfasdfasdfasdfasdfasdf</strong></p><table><thead><tr><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th></tr></thead><tbody><tr><td><p>gd</p></td><td><p>gd</p></td><td><p>gd gd</p></td><td><p>gd  gd</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr></tbody></table><p>asdf</p><p><strong>asdf</strong></p><table><thead><tr><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th></tr></thead><tbody><tr><td><p>gd</p></td><td><p>gd</p></td><td><p>gd gd</p></td><td><p>gd  gd</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr></tbody></table><p>asdf</p><p><strong>asdf</strong></p><table><thead><tr><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th></tr></thead><tbody><tr><td><p>gd</p></td><td><p>gd</p></td><td><p>gd gd</p></td><td><p>gd  gd</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr></tbody></table><p>asdf</p><p><strong>asdf</strong></p><table><thead><tr><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th><th><p>d</p></th></tr></thead><tbody><tr><td><p>gd</p></td><td><p>gd</p></td><td><p>gd gd</p></td><td><p>gd  gd</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr><tr><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td><td><p>a</p></td></tr></tbody></table><p>asdf</p>`;
  const editorRef: any = React.createRef();

  useEffect(() => {
    document.querySelector(".toastui-editor-contents")!.innerHTML = content;
  });
  const handleChange = (e: any) => {
    setComment(e.target.value);
  };
  const recommentView = (idx: number) => {
    const comment = document.querySelector(`.comment_${idx}`)!;
    console.log(comment.childElementCount);
    if (comment?.childElementCount >= 5) {
      comment.lastChild?.remove();
    } else {
      //map 으로 추가
      const recomment = document.createElement("div");
      recomment.className = "recomment";

      const nickname = document.createElement("div");
      nickname.className = "re_nickname";
      nickname.textContent = "대댓 이름";

      const date = document.createElement("div");
      date.className = "re_date";
      date.textContent = "대댓 날짜";

      const recomment_description = document.createElement("div");
      recomment_description.className = "recomment_description";
      recomment_description.textContent = "대댓 내용";

      recomment.appendChild(nickname);
      recomment.appendChild(date);
      recomment.appendChild(recomment_description);

      document.querySelector(`.comment_${idx}`)?.appendChild(recomment);
    }
  };
  return (
    <>
      {/* <Editor
        previewStyle="vertical"
        ref={editorRef}
        onChange={handleChange}
        plugins={[[colorSyntax, { preset: ["#1F2E3D", "#4c5864", "#ED7675"] }]]}
        theme="dark"
      /> */}
      <Index>
        <Top>
          <div className="title">제목</div>
          <div className="tag">태그 목록, 태그</div>
          <div className="writer">작성자</div>
          <div className="description">설명</div>
          <div className="line"></div>
        </Top>
        <Content>
          <div className="toastui-editor-dark">
            <div className="toastui-editor-contents"></div>
          </div>
        </Content>
        {/* map으로 댓글 추가 */}
        <InputComment>
          <div className="line"></div>
          <div className="comment_write">댓글 작성</div>
          <input placeholder="댓글을 입력해주세요" onChange={handleChange}></input>
          <button className="saveComment" onClick={() => console.log(comment)}>
            댓글 작성
          </button>
        </InputComment>
        <CommentBox>
          <div className="comment comment_1">
            <div className="nickname">이름</div>
            <div className="date">2022-05-25</div>
            <div className="comment_description">댓들에 대한 내용~~~</div>
            <button className="recommentView" onClick={() => recommentView(1)}>
              댓글 보기
            </button>
          </div>
          <div className="line"></div>
          <div className="comment comment_2">
            <div className="nickname">이름</div>
            <div className="date">2022-05-25</div>
            <div className="comment_description">댓들에 대한 내용~~~</div>
            <button className="recommentView" onClick={() => recommentView(2)}>
              댓글 보기
            </button>
          </div>
        </CommentBox>
      </Index>
    </>
  );
}
