import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import React, { Component, useEffect, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import { Content, CommentBox, Index, InputComment, Top } from "./indexPageStyle";
import { useRecoilState } from "recoil";
import { USER } from "../../store/store.user";
import { useLocation } from "react-router-dom";
import { createComment, createReComment, getBoardDetail, getComments, getReComments, patchDeleteComment, patchDeleteReComment } from "../../api/indexPage";
import { getComment } from "@src/Types/indexPage";

export default function IndexPage() {
  const location = useLocation();
  const board_id = location.pathname.split("@")[2];
  const [userInfo] = useRecoilState(USER);
  // const test = [
  //   { re_nicname: "장한솔2", re_date: "2022-02-02", recomment_description: "대댓글 내용 1" },
  //   { re_nicname: "답글단사람2", re_date: "2022-02-03", recomment_description: "대댓글 내용 2" },
  // ];

  const [indexPageData, setIndexPageData] = useState({ title: "", content: "", description: "", date: "" });
  const [indexPageTag, setIndexPageTag] = useState({ tag: [] });
  const [commentArray, setCommentArray] = useState<any>({ comments: [] });
  const [reCommentArray, setReCommentArray] = useState<any>({ comments: [] });
  const [te, setTe] = useState("");

  const [comment, setComment] = useState("");
  const [reComment, setReComment] = useState({ content: "", idx: 0 });
  const handleChange = (e: any) => {
    setComment(e.target.value);
  };

  const handleReCommentChange = (e: any, idx: number) => {
    console.log(e, idx);
    setReComment({ content: e.target.value, idx: idx });
  };
  const onSaveComment = () => {
    createComment(comment, parseInt(board_id)).then(() => {
      setComment("");
      getComments(parseInt(board_id))
        .then((res) => {
          setCommentArray({ comments: res });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  const onSaveReComment = (comment_id: number, content: string) => {
    console.log(content);
    console.log(document.querySelector(`.input_${comment_id}`));
    createReComment(content, comment_id).then(() => {
      getReComments(comment_id)
        .then((res) => {
          setReCommentArray({ comments: res });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };
  useEffect(() => {
    const apiGet = async () => {
      await getBoardDetail(parseInt(board_id))
        .then((res) => {
          getComments(parseInt(board_id))
            .then((res) => {
              setCommentArray({ comments: res });
            })
            .catch((err) => {
              console.log(err);
            });
          setIndexPageData({ title: res.title, content: res.content, description: res.description, date: res.date });
          setIndexPageTag({ tag: res.tags });
          document.querySelector(".toastui-editor-contents")!.innerHTML = res.content;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    apiGet();
  }, []);

  // useEffect(() => {
  //   getComments(parseInt(board_id))
  //     .then((res) => {
  //       console.log("test", res);
  //       setCommentArray({ comment: res.comments });
  //       console.log(indexPageTag);
  //       console.log(commentArray);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [onSaveComment]);

  const writeRecomment = (idx: number) => {
    const recommentInput = document.createElement("div");
    recommentInput.className = "writeRecommentBox";
    const line = document.createElement("div");
    line.className = "line";
    recommentInput.appendChild(line);

    const comment_write = document.createElement("div");
    comment_write.className = "comment_write";
    comment_write.textContent = "닷글 작성";
    recommentInput.appendChild(comment_write);

    const input = document.createElement("input");
    input.placeholder = "닷글을 입력해주세요";
    input.className = `input_${idx}`;
    input.value = reComment.content;
    recommentInput.appendChild(input);
    input.addEventListener("input", function (e) {
      handleReCommentChange(e, idx);
    });

    const btn = document.createElement("button");
    btn.className = "saveComment";
    btn.textContent = "닷글 작성";

    btn.addEventListener("click", () => {
      console.log(reComment);
      onSaveReComment(idx, reComment.content);
    });
    recommentInput.appendChild(btn);
    return recommentInput;
  };
  const recommentView = (idx: number) => {
    const comment = document.querySelector(`.comment_${idx} .recommentBox`)!;
    if (comment?.childElementCount >= 1) {
      comment.innerHTML = "";
    } else {
      getReComments(idx).then((res) => {
        setReCommentArray({ comments: res });
        reCommentArray.comments.map((data: any) => {
          const recomment = document.createElement("div");
          recomment.className = "recomment";

          const nickname = document.createElement("div");
          nickname.className = "re_nickname";
          nickname.textContent = data.re_nicname;

          const date = document.createElement("div");
          date.className = "re_date";
          date.textContent = data.re_date;

          const recomment_description = document.createElement("div");
          recomment_description.className = "recomment_description";
          recomment_description.textContent = data.recomment_description;
          if (data.re_nicname === userInfo.username) {
            const recomment_delete = document.createElement("button");
            recomment_delete.className = "deleteReComment";
            recomment_delete.textContent = "삭제";
            recomment.appendChild(recomment_delete);

            recomment_delete.addEventListener("click", () => {
              deleteReComment(data.id, idx);
            });
          }

          recomment.appendChild(nickname);
          recomment.appendChild(date);
          recomment.appendChild(recomment_description);

          const comment = document.querySelector(`.comment_${idx} .recommentBox`)!;
          comment.appendChild(recomment);
        });
      });

      const recommentInput = writeRecomment(idx);
      comment.appendChild(recommentInput);
    }
  };
  const deleteComment = (id: number) => {
    patchDeleteComment(id)
      .then(() => {
        console.log("삭제됨");
        getComments(parseInt(board_id))
          .then((res) => {
            setCommentArray({ comments: res });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err, "오류남");
      });
  };
  const deleteReComment = (id: number, idx: number) => {
    patchDeleteReComment(id)
      .then(() => {
        console.log("삭제됨");
        getReComments(idx)
          .then((res) => {
            setReCommentArray({ comments: res });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err, "오류남");
      });
  };

  return (
    <>
      <Index>
        <Top>
          <div className="title">{indexPageData.title}</div>
          <div className="tag">
            {indexPageTag.tag.map((data: any) => {
              return <div>{data.tag_name}</div>;
            })}
          </div>
          <div className="writer">{indexPageData.description}</div>
          <div className="description">{indexPageData.description}</div>
          <div className="line"></div>
        </Top>
        <Content>
          <div className="toastui-editor-dark">
            <div className="toastui-editor-contents"></div>
          </div>
        </Content>
        <InputComment>
          <div className="line"></div>
          <div className="comment_write">댓글 작성</div>
          <input placeholder="댓글을 입력해주세요" onChange={handleChange} value={comment}></input>
          <button className="saveComment" onClick={() => onSaveComment()}>
            댓글 작성
          </button>
        </InputComment>
        <CommentBox>
          {commentArray.comments.map((data: any, idx: number) => {
            return (
              <>
                <div className={`comment comment_${idx}`}>
                  <div className="nickname">{data.writer.username}</div>
                  <div className="date">{data.date}</div>
                  <div className="comment_description">{data.content}</div>
                  <button className="recommentView" onClick={() => recommentView(idx)}>
                    댓글 보기
                  </button>
                  {data.writer.username === userInfo.username ? (
                    <button className="deleteComment" onClick={() => deleteComment(data.id)}>
                      삭제
                    </button>
                  ) : null}
                  <div className="recommentBox"></div>
                </div>
                <div className="line"></div>
              </>
            );
          })}
        </CommentBox>
      </Index>
    </>
  );
}
