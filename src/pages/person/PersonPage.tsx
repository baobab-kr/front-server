import React, { Suspense, useEffect, useState } from "react";
import { Container, TagPlace, UserInfo, Content, Input } from "./style";
import Card from "../../components/Card/index";
import DefaultAvator from "../../assets/defaultAvator.png";
import { Board, TagCount, Writer } from "../../Types/main";
import { getPersonalBoard, getBoardPersonalTag } from "../../api/board";
import InfiniteScroll from "../../components/InfiniteScroll";
import { useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { useRecoilState } from "recoil";
import { USER } from "../../store/store.user";

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

  const [userInfo] = useRecoilState(USER);
  const location = useLocation();

  const modeSelector = async (mode: string) => {
    console.log(mode);
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
        })
        .catch((err) => {
          setMainState(true);
          console.log("마지막 페이지", err);
        });
    } else {
      await getBoardPersonalTag(page, userId.userId, [tagMode])
        .then((data) => {
          if (!data) return;
          const mBoard: Board[] = data.map((item) => {
            return Object.assign(item, { writer: writer });
          });
          console.log("getBoardPersonalTag", mBoard);
          setPage(page + 1);
          setBoard((curInfoArray) => [...curInfoArray, ...mBoard]); // state에 추가
        })
        .catch((err) => {
          setMainState(true);
          console.log("마지막 페이지", err);
        });
    }
  };

  const getWriter = async () => {
    if (mainState) return;
    const userId = location.state as tState;
    await getPersonalBoard(0, userId.userId)
      .then((data) => {
        if (!data) return;
        setTag(data.tagCount);
        setWriter(data.writer);
        if (userInfo.id === data.writer.id) {
          setIsMyHome(true);
        } else {
          setIsMyHome(false);
        }
      })
      .catch((err) => {
        setMainState(true);
        console.log("마지막 페이지", err);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
    getWriter();
  }, []);

  const fallback = () => {
    return (
      <div style={{ height: "150px", textAlign: "center", color: "black" }}>
        <PuffLoader color="#FF0000" />
      </div>
    );
  };

  return (
    <Suspense fallback={() => fallback()}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{ width: "1324px" }}>
          <UserInfo>
            <div style={{ width: "150px", height: "150px", borderRadius: "70%", overflow: "hidden", justifySelf: "start" }}>
              <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
            </div>
            <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
              <div style={{ color: "black" }}>
                <h1 style={{ fontSize: "40px", color: "white" }}>{writer?.username ?? ""}</h1>
              </div>
              <hr />
              <div style={{ marginTop: "10px" }}>
                <h3 style={{ color: "darkgray" }}>{writer?.description ?? ""}</h3>
              </div>
            </div>
          </UserInfo>

          <Container>
            <TagPlace>
              <div style={{ margin: "0px 0px 8px 0px" }} onClick={() => modeSelector("ALL")}>
                전체 태그
              </div>
              <hr />
              <ul style={{ paddingTop: "8px" }}>
                {tag.map((t: TagCount, index: number) => {
                  return (
                    <li key={index} style={{ margin: "8px 0px", cursor: "pointer" }} onClick={() => modeSelector(t.tag_name)}>
                      {t.tag_name} &nbsp;{`(${t.tag_count})`}
                    </li>
                  );
                })}
              </ul>
            </TagPlace>
            <div>
              <Content>
                <InfiniteScroll loadFnc={getBoardInfo} data={board} isLast={mainState}>
                  {board.map((blogInfo: Board, index: number) => {
                    return <Card key={index} board={blogInfo} width={"650px"} height={"500px"} isMyHome={isMyHome} />;
                  })}
                </InfiniteScroll>
              </Content>
            </div>
            <div>
              <Input alt="검색어" placeholder="검색어를 입력해주세요" />
            </div>
          </Container>
        </div>
      </div>
    </Suspense>
  );
}
