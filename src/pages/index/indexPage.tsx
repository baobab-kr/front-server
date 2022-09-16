import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";
import React, { createElement, useEffect, useState } from "react";

import { Content, CommentBox, Index, InputComment, Top, Navigate, CommentComponent, CommentViewBtn } from "./indexPageStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { createComment, createReComment, getBoardDetail, getComments, getReComments, patchDeleteComment, patchDeleteReComment } from "../../api/indexPage";
import moment from "moment";
import cancleImg from "./img/comment.png";
import closeIcon from "./img/closeIcon.png";
import { user } from "@src/Types/user";
import { timeForToday } from "../../util/date";
import DefaultAvator from "../../assets/defaultAvator.png";
import Avator from "../../components/Avator/Avator";
type tState = {
  userId: number;
};
export default function IndexPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state as tState;

  const board_witer = location.pathname.split("/")[1];
  const board_id = location.pathname.split("/")[2];
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  const [indexPageData, setIndexPageData] = useState({ title: "", content: "", description: "", date: "" });
  const [indexPageTag, setIndexPageTag] = useState({ tag: [] });
  const [commentArray, setCommentArray] = useState<any>({ comments: [] });
  const [commentArrayNew, setCommentArrayNew] = useState<any>({ comments: [] });
  const [navigateList, setNavigateList] = useState<String[]>([]);
  // let navigateList: String[] = [];

  const [pageNation, setPageNation] = useState(0);
  const [rePageNation, setRePageNation] = useState(0);
  const [commentView, setCommentView] = useState(false);
  const [isCommentView, setIsCommentView] = useState(false);
  const [testIdx, setTestIdx] = useState(0);
  const [testId, setTestId] = useState(0);

  const [comment, setComment] = useState("");

  const handleChange = (e: any) => {
    setComment(e.target.value);
  };

  const onSaveComment = () => {
    if (userInfo === null) {
      // navigate("/login");
    } else {
      createComment(comment, parseInt(board_id)).then(() => {
        setComment("");
        if (pageNation === 0) {
          getComments(parseInt(board_id), pageNation)
            .then((res) => {
              setCommentArray({ comments: res });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          setCommentArray({ comments: [] });
          for (let i = 0; i <= pageNation; i++) {
            getComments(parseInt(board_id), i)
              .then((res) => {
                setCommentArrayNew({ comments: res });
              })
              .catch((err) => {
                console.log(err);
              });
          }
        }
      });
    }
  };
  const onreLoadComment = () => {
    if (userInfo === null) {
      navigate("/login");
    } else {
      setComment("");
      getComments(parseInt(board_id), pageNation + 1)
        .then((res) => {
          setCommentArrayNew({ comments: res });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  useEffect(() => {
    let newArray = [...commentArray.comments, ...commentArrayNew.comments];
    setCommentArray({ comments: newArray });
  }, [commentArrayNew]);
  const onSaveReComment = (id: number, content: string, idx: number) => {
    if (userInfo === null) {
      navigate("/login");
    } else {
      createReComment(content, id)
        .then(() => {
          console.log("답글추가됨");
          document
            .querySelector(`.comment_${idx}`)
            ?.querySelectorAll(".recomment")!
            .forEach((data) => {
              data.remove();
            });
          setTimeout(() => {
            reCommentLoad(id, idx);
          }, 100);
        })
        .catch((err) => {
          console.log("오류남");
        });
    }
  };
  useEffect(() => {
    const apiGet = async () => {
      await getBoardDetail(parseInt(board_id))
        .then((res) => {
          console.log(res);
          getComments(parseInt(board_id), pageNation)
            .then((res) => {
              console.log("comment", res);
              setCommentArray({ comments: res });
            })
            .catch((err) => {
              console.log(err);
            });
          setIndexPageData({ title: res.title, content: res.content, description: res.description, date: res.date });
          setIndexPageTag({ tag: res.tags });
          document.querySelector(".toastui-editor-contents")!.innerHTML = res.content;
          let datas: String[] = [];
          document.querySelectorAll<HTMLElement>(".toastui-editor-contents h1")!.forEach((data) => {
            datas.push(data.innerHTML);
            setNavigateList(datas);
          });
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
    // recommentInput.appendChild(line);

    const comment_write = document.createElement("div");
    comment_write.className = "comment_write";
    comment_write.textContent = "답글 작성";
    recommentInput.appendChild(comment_write);

    const input = document.createElement("textarea");
    input.placeholder = "답글을 입력해주세요";
    input.className = `input_${idx}`;
    input.name = `input_${idx}`;

    recommentInput.appendChild(input);

    const btn = document.createElement("button");
    btn.className = "saveComment";
    btn.textContent = "답글 작성";

    btn.addEventListener("click", () => {
      const inputtest = document.querySelector(`.comment_${idx}`)!;
      const reCommentText = inputtest.querySelector("textarea")!;
      onSaveReComment(id, reCommentText.value, idx);
      inputtest.querySelectorAll("textarea")[idx].value = "";
    });
    recommentInput.appendChild(btn);
    return recommentInput;
  };

  const reCommentMoreBtn = (id: number, idx: number) => {
    const moreBtn = document.createElement("button");
    moreBtn.className = "reComment_more_btn";
    moreBtn.textContent = "답글 더보기";
    moreBtn.addEventListener("click", () => {
      setRePageNation(rePageNation + 1);
      setTestId(id);
      setTestIdx(idx);
    });
    return moreBtn;
  };

  useEffect(() => {
    reCommentLoad(testId, testIdx);
  }, [testId]);

  useEffect(() => {
    console.log("commentView", commentView);
  }, [commentView]);

  const reCommentLoad = (id: number, idx: number) => {
    setTimeout(() => {
      getReComments(id, rePageNation)
        .then((res) => {
          const reCommentObj: any = { comments: res };
          reCommentObj.comments.map((data: any) => {
            console.log(data);
            const line = document.createElement("div");
            line.className = "line";
            const recomment = document.createElement("div");
            recomment.className = "recomment";

            const avator = document.createElement("div");
            const avator_img = document.createElement("img");
            avator.style.width = "40px";
            avator.style.height = "40px";
            avator.style.objectFit = "cover";
            avator_img.src = `${process.env.REACT_APP_API_ROOT}users/read-profile?userid="${data.writer.userid}"`;
            // avator_img.src = DefaultAvator;
            avator_img.alt = "avator";
            avator_img.style.width = "100%";
            avator_img.style.height = "100%";
            avator_img.style.objectFit = "cover";
            avator_img.style.backfaceVisibility = "hidden";

            avator.appendChild(avator_img);

            const userDataInfo = document.createElement("div");
            userDataInfo.className = "userDataInfo";
            const nickname = document.createElement("div");
            nickname.className = "re_nickname";
            nickname.textContent = data.writer.username;

            const date = document.createElement("div");
            date.className = "re_date";
            date.textContent = moment(data.date).format("YYYY년 MM월 DD일");

            const recomment_description = document.createElement("div");
            recomment_description.className = "recomment_description";
            recomment_description.textContent = data.content;
            if (userInfo !== null && data.writer.username === userInfo!.username) {
              const recomment_delete = document.createElement("div");
              recomment_delete.className = "deleteReComment";
              recomment_delete.textContent = "삭제";
              recomment.appendChild(recomment_delete);

              recomment_delete.addEventListener("click", () => {
                deleteReComment(data.id, id, idx);
              });
            }
            const comment = document.querySelector(`.comment_${idx} .recommentBox`)!;
            comment.appendChild(recomment);
            recomment.appendChild(line);

            userDataInfo.appendChild(avator);
            userDataInfo.appendChild(nickname);

            if (userInfo !== null && data.writer.username === userInfo!.username) {
              const my = document.createElement("div");
              my.className = "My";
              my.textContent = "My";
              date.className = "re_date mydate";
              nickname.appendChild(my);
            }

            userDataInfo.appendChild(date);
            recomment.appendChild(userDataInfo);
            recomment.appendChild(recomment_description);

            setTimeout(() => {
              document.querySelector(`.reComment_more_btn`)?.remove();
              document.querySelector(`.input_${idx}`)?.parentElement?.remove();
              const recommentInput = writeRecomment(id, idx);
              const reCommentMoreBtnEl = reCommentMoreBtn(id, idx);
              comment.appendChild(reCommentMoreBtnEl);
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
      document.querySelector(`.comment_${idx} button`)!.innerHTML = "댓글 보기";
      comment.innerHTML = "";
    } else {
      const recommentEls = document.querySelectorAll<HTMLElement>(".recommentView")!;
      recommentEls.forEach((data) => {
        data.innerHTML = "댓글 보기";
      });
      const recommentBoxEls = document.querySelectorAll<HTMLElement>(".recommentBox")!;
      recommentBoxEls.forEach((data) => {
        data.innerHTML = "";
      });
      setRePageNation(0);
      document.querySelector(`.comment_${idx} button`)!.innerHTML = "댓글 숨기기";
      reCommentLoad(id, idx);
      setTimeout(() => {
        const recommentInput = writeRecomment(id, idx);
        comment.appendChild(recommentInput);
      }, 10);
    }
  };
  const deleteComment = (id: number, idx: number) => {
    patchDeleteComment(id);
    if (pageNation === 0) {
      setTimeout(() => {
        getComments(parseInt(board_id), pageNation)
          .then((res) => {
            setCommentArray({ comments: res });
          })
          .catch((err) => {
            console.log(err);
          });
      }, 300);
    } else {
      setTimeout(() => {
        setCommentArray({ comments: [] });
        for (let i = 0; i <= pageNation; i++) {
          getComments(parseInt(board_id), i)
            .then((res) => {
              setCommentArrayNew({ comments: res });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }, 300);
    }
  };
  const deleteReComment = (re_id: number, id: number, idx: number) => {
    patchDeleteReComment(re_id)
      .then(() => {
        console.log("삭제됨");
        document
          .querySelector(`.comment_${idx}`)
          ?.querySelectorAll(".recomment")!
          .forEach((data) => {
            data.remove();
          });
        setTimeout(() => {
          reCommentLoad(id, idx);
        }, 300);
      })
      .catch((err) => {
        console.log("오류남");
      });
  };
  return (
    <>
      <Index>
        <Top>
          {userInfo !== null && decodeURI(board_witer).substring(1) === userInfo.username ? (
            <button className="updateBtn" onClick={() => navigate("/editor", { state: { data: indexPageData, user: userInfo.username, id: board_id } })}>
              수정
            </button>
          ) : null}
          <div className="title">{indexPageData.title}</div>
          <div className="top_data_box">
            <div className="profile">
              <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
            </div>
            <div className="writer" onClick={() => navigate(`/@${decodeURI(board_witer).substring(1)}`, { state: { userId: userId.userId } })}>
              {decodeURI(board_witer).substring(1)}
            </div>
            <div className="date">{timeForToday(indexPageData.date)}</div>
          </div>
          <div className="line"></div>
        </Top>
        <Navigate>
          {navigateList.map((data, idx) => {
            return (
              <span className="naviData">
                <span className="naviNum">{idx + 1}. </span>
                <span
                  className="navi data"
                  onClick={() =>
                    console.log(window.scrollTo(0, document.querySelectorAll<HTMLElement>(".toastui-editor-contents h1")[idx].getBoundingClientRect().y - 70))
                  }
                >
                  {data}
                </span>
              </span>
            );
          })}
        </Navigate>
        <Content>
          <div className={localStorage.getItem("Theme") === "dark" ? "toastui-editor-dark" : "toastui-editor"}>
            <div className="toastui-editor-contents"></div>
          </div>
          <div className="line"></div>
          <div className="tag">
            {indexPageTag.tag.map((data: any, idx: number) => {
              return <div key={idx}>{data.tag_name}</div>;
            })}
          </div>
        </Content>
      </Index>
      {commentView ? (
        <CommentComponent className={`${isCommentView ? "comment_view on" : "comment_view off"}`}>
          <InputComment>
            {userInfo !== null ? (
              <div className="writer_info">
                <div className="avator" style={{ width: "40px", height: "40px" }}>
                  <Avator userId={userInfo?.userid.toString()} width={"100%"} height={"100%"} />
                </div>
                <div className="comment_write">{userInfo?.username}</div>
              </div>
            ) : (
              <>
                <div className="comment_write">로그인을 해주세요</div>
              </>
            )}

            <textarea placeholder="댓글을 입력해주세요" onChange={handleChange} value={comment}></textarea>
            <button className="saveComment" onClick={() => onSaveComment()}>
              댓글 작성
            </button>
          </InputComment>
          <img
            src={closeIcon}
            className="closeComment"
            onClick={() => {
              setIsCommentView(!commentView);
              setTimeout(() => {
                setCommentView(!commentView);
              }, 1000);
            }}
          />
          <CommentBox id="commentBox">
            {commentArray.comments.map((data: any, idx: number) => {
              return (
                <>
                  <div className={`comment comment_${idx}`} key={idx}>
                    <div className="userDataInfo">
                      <div className="avator" style={{ width: "40px", height: "40px" }}>
                        <Avator userId={data.writer.id.toString()} width={"100%"} height={"100%"} />
                      </div>
                      <div
                        className="nickname"
                        onClick={() => navigate(`/@${decodeURI(data.writer.username).substring(1)}`, { state: { userId: data.writer.id } })}
                      >
                        {data.writer.username}
                        {userInfo !== null && data.writer.username === userInfo.username ? <div className="My">My</div> : null}
                      </div>
                      <div className={`date${userInfo !== null && data.writer.username === userInfo.username ? " mydate" : ""}`}>
                        {moment(data.date).format("YYYY년 MM월 DD일")}
                      </div>
                      {userInfo !== null && data.writer.username === userInfo.username ? (
                        <div className="deleteComment" onClick={() => deleteComment(data.id, idx)}>
                          삭제
                        </div>
                      ) : null}
                    </div>
                    <div className="comment_description">{data.content}</div>
                    <button
                      className="recommentView"
                      onClick={() => {
                        recommentView(data.id, idx);
                      }}
                    >
                      답글 보기
                    </button>
                    <div className="recommentBox"></div>
                  </div>
                  <div className="line"></div>
                </>
              );
            })}
            {commentArray.comments.length >= 10 ? (
              <button
                className="moreBtn"
                onClick={() => {
                  setPageNation(pageNation + 1);
                  onreLoadComment();
                }}
              >
                더보기
              </button>
            ) : null}
          </CommentBox>
        </CommentComponent>
      ) : null}
      <CommentViewBtn
        src={cancleImg}
        onClick={() => {
          setCommentView(!commentView);
          setIsCommentView(!commentView);
        }}
      />
    </>
  );
}
