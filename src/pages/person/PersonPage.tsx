import React, { Suspense, useEffect, useState } from "react";
import {
  Wrapper,
  DivFlex,
  Properties,
  ThemeText,
  TagPlace,
  UserInfo,
  Content,
  Input,
  TagList,
  UserDiscrtprion,
  TagListTItle,
  UserDescriptionChild,
} from "./style";
import Card from "../../components/Card/index";
import { Board, TagCount, Writer } from "Types/main";
import { getPersonalBoard, getBoardPersonalTag, DeleteBoard, getBoardPersonalTagCount, getBoardPersonalWriter } from "api/board";
import InfiniteScroll from "components/InfiniteScroll";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { user } from "Types/user";
import Avator from "components/Avator/Avator";
import { USER_TYPE } from "constants/index";
import Swal from "sweetalert2";

type tState = {
  userId: number;
};

export default function PersonPage(): JSX.Element {
  const [tag, setTag] = useState<TagCount[]>([]);
  const [writer, setWriter] = useState<Writer>();
  const [board, setBoard] = useState<Board[]>([]);
  const [page, setPage] = useState<number>(0);
  const [tagMode, setTagMode] = useState<string>("ALL");
  const [mainState, setMainState] = useState<boolean>(false);
  const [isMyHome, setIsMyHome] = useState<boolean>(false);

  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  const location = useLocation();

  const modeSelector = async (mode: string) => {
    setTagMode(mode);
    setBoard([]);
    setMainState(false);
    await setPage(0);
    await getBoardInfo();
  };

  const getBoardInfo = async () => {
    if (mainState) return;
    const userId = location.state as tState;
    if (tagMode === "ALL") {
      await getPersonalBoard(page, userId.userId)
        .then((data) => {
          if (!data) return;
          const mBoard: Board[] = data.board.map((item) => {
            return Object.assign(item, { writer: data.writer });
          });

          setPage(page + 1);
          setBoard((curInfoArray) => [...curInfoArray, ...mBoard]); // state에 추가
          getTagCount();
          if (board.length === 0) setTag([]);
        })
        .catch((err) => {
          setMainState(true);
          if (board.length === 0) setTag([]);
        });
    } else {
      await getBoardPersonalTag(page, userId.userId, [tagMode])
        .then((data) => {
          if (!data) return;
          const mBoard: Board[] = data.map((item) => {
            return Object.assign(item, { writer: writer });
          });

          setPage(page + 1);
          setBoard((curInfoArray) => [...curInfoArray, ...mBoard]); // state에 추가
          getTagCount();
          if (board.length === 0) setTag([]);
        })
        .catch((err) => {
          setMainState(true);
          if (board.length === 0) setTag([]);
        });
    }
  };

  const getWriter = async () => {
    if (mainState) return;
    const userId = location.state as tState;

    await getBoardPersonalWriter(userId.userId)
      .then((data) => {
        if (!data) return;
        setWriter(data);
        if (userInfo!.id === data.id) {
          setIsMyHome(true);
        } else {
          setIsMyHome(false);
        }
      })
      .catch((err) => {});
  };

  const getTagCount = async () => {
    const userId = location.state as tState;

    await getBoardPersonalTagCount(userId.userId)
      .then((data) => {
        setTag(data);
      })
      .catch((err) => {
        setTag([]);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getWriter();
    getTagCount();
  }, []);

  useEffect(() => {
    if (userInfo?.id === undefined || userInfo.userid === undefined) {
      Swal.fire("로그인 정보를 다시 확인 해주세요.");
    }
  }, []);

  const deleteHandler = (id: number) => {
    Swal.fire({
      title: "정말로 삭제 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
      reverseButtons: true, // 버튼 순서 거꾸로
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        await DeleteBoard(id)
          .then((res) => {
            setMainState(false);
            setPage(0);
            modeSelector(tagMode);
          })
          .catch((err) => {});
        Swal.fire("게시글 삭제", "삭제가 완료되었습니다.", "success");
      }
    });
  };

  const moveSocialUrl = (url: string) => {
    window.open(url);
  };

  const fallback = () => {
    return (
      <div style={{ height: "150px", textAlign: "center", color: "black" }}>
        <PuffLoader color="#FF0000" />
      </div>
    );
  };

  return (
    <Suspense fallback={() => fallback()}>
      <Wrapper>
        <UserInfo>
          <div style={{ flexBasis: "15%" }}>
            <DivFlex direction="column" style={{ alignItems: "center", gap: "15px" }}>
              <Avator userId={userInfo!.userid.toString()} width={"100%"} height={"100%"} />
            </DivFlex>
          </div>
          <div style={{ display: "flex", gap: "10px", flexDirection: "column", flexBasis: "85%" }}>
            <UserDiscrtprion>
              <ThemeText style={{ fontSize: "30px", fontWeight: "bold", flexBasis: "25%" }}>{writer?.username ?? ""}</ThemeText>

              <DivFlex direction="column" style={{ gap: "15px", flexBasis: "50%" }}>
                <div style={{ color: "#999999" }}>Description</div>
                <ThemeText>{writer?.description ?? ""}</ThemeText>
              </DivFlex>
              <UserDescriptionChild>
                <DivFlex direction="column" style={{ gap: "15px", flexBasis: "50%" }}>
                  <div style={{ color: "#999999" }}>Expertise</div>
                  <ThemeText>{writer?.techStack ?? ""}</ThemeText>
                </DivFlex>

                <DivFlex direction="column" style={{ gap: "15px", flexBasis: "50%" }}>
                  <div style={{ color: "#999999" }}>Social Media</div>
                  <ThemeText className="draggable" style={{ cursor: "pointer" }} onClick={() => moveSocialUrl(writer?.socialUrl ?? "")}>
                    {writer?.socialUrl ?? ""}
                  </ThemeText>
                </DivFlex>
              </UserDescriptionChild>
            </UserDiscrtprion>
          </div>
        </UserInfo>
        <div>
          <Properties>
            <TagListTItle>
              <ThemeText style={{ width: "320px", gap: "5px", marginBottom: "8px" }} onClick={() => modeSelector("ALL")}>
                태그 목록
              </ThemeText>
              <hr style={{ maxWidth: "100%" }} />
            </TagListTItle>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "15px", width: "100%" }}>
              {/* <Input alt="검색어" placeholder="검색어를 입력해주세요" /> */}
            </div>
          </Properties>
          <TagPlace>
            {tag.length >= 1 &&
              tag.map((t: TagCount, index: number) => {
                return (
                  <TagList key={index} onClick={() => modeSelector(t.tag_name)}>
                    {t.tag_name} {`(${t.tag_count})`}
                  </TagList>
                );
              })}
          </TagPlace>
        </div>
        <Content>
          <InfiniteScroll loadFnc={getBoardInfo} data={board} isLast={mainState} isOnTop={true}>
            {board.map((blogInfo: Board, index: number) => {
              return <Card key={index} board={blogInfo} width={"100%"} height={"495px"} imgHeight={"280px"} isMyHome={isMyHome} deleteBoard={deleteHandler} />;
            })}
          </InfiniteScroll>
        </Content>
      </Wrapper>
    </Suspense>
  );
}
