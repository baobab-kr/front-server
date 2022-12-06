import React, { useState, useEffect } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css";

import { useLocation, useNavigate } from "react-router-dom";
import Avator from "components/Avator/Avator";

import * as S from "./style";
import { getBoardDetail, getCommentCount } from "api/indexPage";
import { iIndexPage } from "Types/indexPage";
import moment from "moment";
import { Tag } from "Types/main";
import TagComponent from "components/Tag/Tag";

import { BsFillChatFill } from "react-icons/bs";
import Comment from "components/Comment/Comment";
import Swal from "sweetalert2";

export default function IndexPage(): JSX.Element {
  const navigate = useNavigate();
  const [detail, setDetail] = useState<iIndexPage>();
  const [titleList, setTitleList] = useState<HTMLElement[]>([]);
  const [commentStatus, setCommentStatus] = useState<boolean>(false);
  const [commentCnt, setCommentCnt] = useState<number>(0);
  const location = useLocation();
  const board_id = location.pathname.split("/")[2];

  useEffect(() => {
    const apiGet = async () => {
      await getBoardDetail(parseInt(board_id))
        .then((res) => {
          setDetail(res);
          document.querySelector(".toastui-editor-contents")!.innerHTML = res.content;
          document.querySelectorAll<HTMLElement>(".toastui-editor-contents h1")!.forEach((data) => {
            setTitleList((q) => {
              return [...q, data];
            });
          });
        })
        .catch((err) => {
          Swal.fire("정보", "정보 불러오기를 실패했습니다.", "error");
        });

      await getCommentCount(parseInt(board_id)).then((res) => {
        setCommentCnt(res);
      });
    };
    apiGet();
  }, []);

  const navigateModify = () => {
    navigate(`/editor/${board_id}`, { state: { data: detail, id: board_id } });
  };

  return (
    <>
      <S.WrapperArea>
        <S.CenterPosition>
          <S.TitleArea>
            <S.Title>{detail?.title}</S.Title>
            <div style={{ display: "flex", width: "100%", justifyContent: "flex-end", marginBottom: "-30px", cursor: "pointer" }} onClick={navigateModify}>
              수정
            </div>
            <S.UserArea>
              <Avator userId={"1"} width={"3.3rem"} height={"3.3rem"} />
              <div style={{ display: "flex", justifyContent: "space-around", flexDirection: "column" }}>
                <div>{detail?.writer.username}</div>
                <div>{moment(detail?.date || "").format("YYYY년 MM월 DD일")}</div>
              </div>
            </S.UserArea>
          </S.TitleArea>
        </S.CenterPosition>
        <Spacer />
        <S.CenterPosition>
          <S.ContentArea>
            {titleList.length > 0 && (
              <>
                <S.ContentListTitle>Table Of Contents</S.ContentListTitle>
                <S.ContentListArea>
                  <S.ContentList rows={Math.ceil(titleList.length / 2)}>
                    {titleList.map((item, index) => {
                      return (
                        <div style={{ display: "flex", alignItems: "center" }} key={index}>
                          <S.ContentListItem
                            onClick={() => {
                              window.scrollTo(0, document.querySelectorAll<HTMLElement>(".toastui-editor-contents h1")[index].getBoundingClientRect().y - 70);
                            }}
                          >
                            <div>{index}</div>
                            <div>{item.innerText}</div>
                          </S.ContentListItem>
                        </div>
                      );
                    })}
                  </S.ContentList>
                </S.ContentListArea>
              </>
            )}
            <S.MainContentArea>
              <div className={localStorage.getItem("Theme") === "dark" ? "toastui-editor-dark" : "toastui-editor"}>
                <div className="toastui-editor-contents draggable"></div>
              </div>
            </S.MainContentArea>
            {detail?.tags !== undefined && detail!.tags.length > 0 && (
              <div>
                <S.FooterTagArea>
                  <S.TagContainer>
                    {detail?.tags.map((tag: Tag, index: number) => {
                      return <TagComponent key={index} tag_name={tag.tag_name} />;
                    })}
                  </S.TagContainer>
                </S.FooterTagArea>
              </div>
            )}
            <S.FooterCommentArea>
              <BsFillChatFill
                style={{ margin: "-30px 1rem -30px 0px", cursor: "pointer" }}
                size={20}
                onClick={() => {
                  setCommentStatus(!commentStatus);
                }}
              />
              <div>{commentCnt}</div>
              <Comment status={commentStatus} setStatus={setCommentStatus} boardID={Number(board_id)} commentCnt={commentCnt} setCommentCnt={setCommentCnt} />
            </S.FooterCommentArea>
          </S.ContentArea>
        </S.CenterPosition>
      </S.WrapperArea>
      <S.CommentOverlay
        opacity={commentStatus ? 0.23 : 0}
        open={commentStatus ? "visible" : "hidden"}
        onClick={() => {
          setCommentStatus(false);
        }}
      />
    </>
  );
}

const Spacer = () => {
  return <div style={{ width: "100%", height: "3rem" }}></div>;
};
