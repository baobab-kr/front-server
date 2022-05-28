import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import React, { useEffect, useState } from "react";

import { Content, CommentBox, Index, InputComment, Top } from "./indexPageStyle";
import { useRecoilState } from "recoil";
import { USER } from "../../store/store.user";
import { useLocation } from "react-router-dom";
import { createComment, createReComment, getBoardDetail, getComments, getReComments, patchDeleteComment, patchDeleteReComment } from "../../api/indexPage";
import moment from "moment";
import { getReComment } from "@src/Types/indexPage";

export default function IndexPage() {
  const location = useLocation();
  const board_witer = location.pathname.split("@")[1];
  const board_id = location.pathname.split("@")[2];
  const [userInfo] = useRecoilState(USER);
  const [indexPageData, setIndexPageData] = useState({ title: "", content: "", description: "", date: "" });
  const [indexPageTag, setIndexPageTag] = useState({ tag: [] });
  const [commentArray, setCommentArray] = useState<any>({ comments: [] });
  const [reCommentArray, setReCommentArray] = useState<any>({ comments: [] });
  const [te, setTe] = useState("");

  const [comment, setComment] = useState("");
  const [reComment, setReComment] = useState("");

  const [isViewIdx, setIsViewId] = useState(0);

  const handleChange = (e: any) => {
    setComment(e.target.value);
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

  const onSaveReComment = (comment_id: number, content: string, idx: number) => {
    console.log(comment_id, content);

    createReComment(content, comment_id)
      .then(() => {
        console.log("답글추가됨");
        document
          .querySelector(`.comment_${idx}`)
          ?.querySelectorAll(".recomment")!
          .forEach((data) => {
            console.log(data);
            data.remove();
          });
        setTimeout(() => {
          reCommentLoad(comment_id, idx);
        }, 100);
      })
      .catch((err) => {
        console.log("오류남");
      });
  };
  useEffect(() => {
    const apiGet = async () => {
      await getBoardDetail(parseInt(board_id))
        .then((res) => {
          console.log(res);
          getComments(parseInt(board_id))
            .then((res) => {
              console.log(res);
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

  const writeRecomment = (id: number, idx: number) => {
    const recommentInput = document.createElement("div");
    recommentInput.className = "writeRecommentBox";
    const line = document.createElement("div");
    line.className = "line";
    recommentInput.appendChild(line);

    const comment_write = document.createElement("div");
    comment_write.className = "comment_write";
    comment_write.textContent = "답글 작성";
    recommentInput.appendChild(comment_write);

    const input = document.createElement("input");
    input.placeholder = "답글을 입력해주세요";
    input.className = `input_${idx}`;
    input.name = `input_${idx}`;

    recommentInput.appendChild(input);

    const btn = document.createElement("button");
    btn.className = "saveComment";
    btn.textContent = "답글 작성";

    btn.addEventListener("click", () => {
      const inputtest = document.querySelector("#commentBox")!;
      console.log(inputtest.querySelectorAll("input"));
      const reCommentText = inputtest.querySelectorAll("input")[idx].value;
      inputtest.querySelectorAll("input")[idx].value = "";
      onSaveReComment(id, reCommentText, idx);
    });
    recommentInput.appendChild(btn);
    return recommentInput;
  };

  const reCommentLoad = (id: number, idx: number) => {
    setTimeout(() => {
      getReComments(id)
        .then((res) => {
          const reCommentObj: any = { comments: res };
          console.log(reCommentObj);
          reCommentObj.comments.map((data: any) => {
            const recomment = document.createElement("div");
            recomment.className = "recomment";

            const nickname = document.createElement("div");
            nickname.className = "re_nickname";
            nickname.textContent = data.writer.username;

            const date = document.createElement("div");
            date.className = "re_date";
            date.textContent = moment(data.date).format("YYYY년 MM월 DD일");

            const recomment_description = document.createElement("div");
            recomment_description.className = "recomment_description";
            recomment_description.textContent = data.content;
            if (data.writer.username === userInfo.username) {
              const recomment_delete = document.createElement("button");
              recomment_delete.className = "deleteReComment";
              recomment_delete.textContent = "삭제";
              recomment.appendChild(recomment_delete);

              recomment_delete.addEventListener("click", () => {
                deleteReComment(data.id, idx);
              });
            }
            const comment = document.querySelector(`.comment_${idx} .recommentBox`)!;
            comment.appendChild(recomment);

            recomment.appendChild(nickname);
            recomment.appendChild(date);
            recomment.appendChild(recomment_description);

            setTimeout(() => {
              document.querySelector(`.input_${idx}`)?.parentElement?.remove();
              const recommentInput = writeRecomment(id, idx);
              comment.appendChild(recommentInput);
            }, 10);
            return;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }, 100);
  };

  const recommentView = async (id: number, idx: number) => {
    const comment = document.querySelector(`.comment_${idx} .recommentBox`)!;
    if (comment?.childElementCount >= 1) {
      comment.innerHTML = "";
    } else {
      reCommentLoad(id, idx);
      setTimeout(() => {
        const recommentInput = writeRecomment(id, idx);
        comment.appendChild(recommentInput);
      }, 10);
    }
  };

  const deleteComment = (id: number, idx: number) => {
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
        setTimeout(() => {
          reCommentLoad(id, idx);
        }, 100);
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
            {indexPageTag.tag.map((data: any, idx: number) => {
              return <div key={idx}>{data.tag_name}</div>;
            })}
          </div>
          <div className="writer">{decodeURI(board_witer).slice(0, -1)}</div>
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
        <CommentBox id="commentBox">
          {commentArray.comments.map((data: any, idx: number) => {
            return (
              <>
                <div className={`comment comment_${idx}`} key={idx}>
                  <div className="nickname">{data.writer.username}</div>
                  <div className="date">{moment(data.date).format("YYYY년 MM월 DD일")}</div>
                  <div className="comment_description">{data.content}</div>
                  <button className="recommentView" onClick={() => recommentView(data.id, idx)}>
                    댓글 보기
                  </button>
                  {data.writer.username === userInfo.username ? (
                    <button className="deleteComment" onClick={() => deleteComment(data.id, idx)}>
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
