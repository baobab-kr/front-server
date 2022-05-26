import React, { useEffect, useState } from "react";
import { Container, TagPlace, UserInfo, Content, Input } from "./style";
import Card from "../../components/Card/index";
import DefaultAvator from "../../assets/defaultAvator.png";
import { Board, TagCount } from "@src/Types";
import { getPersonalBoard } from "../../api/board";
import InfiniteScroll from "../../components/InfiniteScroll";
import { useLocation } from "react-router-dom";

type tState = {
  userId: number;
};

export default function PersonPage(): JSX.Element {
  const [tag, setTag] = useState<TagCount[]>([]);
  const [board, setBoard] = useState<Board[]>([]);
  const [page, setPage] = useState<number>(0);
  const [mainState, setMainState] = useState<boolean>(false);
  const location = useLocation();

  const getInfo = async () => {
    if (mainState) return;
    const userId = location.state as tState;
    await getPersonalBoard(page, userId.userId)
      .then((data) => {
        if (!data) return;

        setPage(page + 1);
        setBoard((curInfoArray) => [...curInfoArray, ...data.board]); // state에 추가
        setTag(data.tagCount);
      })
      .catch((err) => {
        setMainState(true);
        console.log("마지막 페이지", err);
      });
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "1324px" }}>
        <UserInfo>
          <div style={{ width: "150px", height: "150px", borderRadius: "70%", overflow: "hidden", justifySelf: "start" }}>
            <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
          </div>
          <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <div style={{ color: "black" }}>
              <h1 style={{ fontSize: "50px", color: "white" }}>{board[0].writer.username}</h1>
            </div>
            <hr />
            <div style={{ marginTop: "10px" }}>
              <h3 style={{ color: "darkgray" }}>{board[0].writer.description}</h3>
            </div>
          </div>
        </UserInfo>

        <Container>
          <TagPlace>
            <div style={{ margin: "0px 0px 8px 0px" }}>태그 목록</div>
            <hr />
            <ul style={{ paddingTop: "8px" }}>
              {tag.map((t: TagCount, index: number) => {
                return (
                  <li key={index} style={{ margin: "8px 0px", cursor: "pointer" }}>
                    {t.tag_name} &nbsp;{`(${t.tag_count})`}
                  </li>
                );
              })}
            </ul>
          </TagPlace>
          <div>
            <Content>
              <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState}>
                {board.map((blogInfo: Board, index: number) => {
                  return <Card key={index} board={blogInfo} width={"650px"} height={"500px"} />;
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
  );
}
