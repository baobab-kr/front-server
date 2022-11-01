import React, { Suspense, useEffect, useState } from "react";
import { Wrapper, DivFlex, Properties, ThemeText, TagPlace, UserInfo, Content, Input, TagList, UserDiscrtprion } from "./style";
import Card from "../../components/Card/index";
import { Board, TagCount, Writer } from "Types/main";
import { getPersonalBoard, getBoardPersonalTag, DeleteBoard, getBoardPersonalTagCount, getBoardPersonalWriter } from "api/board";
import InfiniteScroll from "components/InfiniteScroll";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { user } from "Types/user";
import Avator from "components/Avator/Avator";

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

  const deleteHandler = (id: number) => {
    DeleteBoard(id)
      .then((res) => {
        setMainState(false);
        setPage(0);
        modeSelector(tagMode);
      })
      .catch((err) => {});
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
            <Avator userId={userInfo!.userid.toString()} width={"100%"} height={"100%"} />
          </div>
          <div style={{ display: "flex", gap: "10px", flexDirection: "column", flexBasis: "85%" }}>
            <ThemeText style={{ fontSize: "30px", fontWeight: "bold" }}>{writer?.username ?? ""}</ThemeText>
            <UserDiscrtprion>
              <DivFlex direction="row" style={{ marginTop: "20px", gap: "15px" }}>
                <DivFlex direction="column" style={{ gap: "15px", flexBasis: "50%" }}>
                  <div style={{ color: "#999999" }}>DATA Analtst</div>
                  <ThemeText>{writer?.description ?? "데이터 분석을 통한 프로덕트 성장에 관심있습니다."}</ThemeText>
                </DivFlex>
                <DivFlex direction="row" style={{ gap: "15px", flexBasis: "50%" }}>
                  <DivFlex direction="column" style={{ gap: "15px", flexBasis: "50%" }}>
                    <div style={{ color: "#999999" }}>Expertise</div>
                    <ThemeText>{writer?.techStack ?? ""}</ThemeText>
                  </DivFlex>

                  <DivFlex direction="column" style={{ gap: "15px", flexBasis: "50%" }}>
                    <div style={{ color: "#999999" }}>Social Media</div>
                    <ThemeText>{writer?.socialUrl ?? ""}</ThemeText>
                  </DivFlex>
                </DivFlex>
              </DivFlex>
            </UserDiscrtprion>
          </div>
        </UserInfo>
        <Properties>
          <div style={{ width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ThemeText style={{ width: "320px", gap: "5px", marginBottom: "8px" }} onClick={() => modeSelector("ALL")}>
                태그 목록
              </ThemeText>

              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                {/* <div>게시글2</div> */}
                <Input alt="검색어" placeholder="검색어를 입력해주세요" />
              </div>
            </div>
            <hr style={{ maxWidth: "350px" }} />
            <TagPlace>
              {tag.map((t: TagCount, index: number) => {
                return (
                  <TagList key={index} onClick={() => modeSelector(t.tag_name)}>
                    {t.tag_name} {`(${t.tag_count})`}
                  </TagList>
                );
              })}
            </TagPlace>
          </div>
        </Properties>

        <Content>
          <InfiniteScroll loadFnc={getBoardInfo} data={board} isLast={mainState}>
            {board.map((blogInfo: Board, index: number) => {
              return (
                <Card
                  key={index}
                  board={blogInfo}
                  width={"calc(50% - 25px)"}
                  height={"495px"}
                  imgHeight={"280px"}
                  isMyHome={isMyHome}
                  deleteBoard={deleteHandler}
                />
              );
            })}
          </InfiniteScroll>
        </Content>
      </Wrapper>
    </Suspense>
  );
}
