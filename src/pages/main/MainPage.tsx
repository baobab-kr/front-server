import React, { useState, useEffect, Suspense } from "react";
import image from "../../data/test.jpg";
import InfiniteScroll from "../../components/InfiniteScroll";
import { Board } from "@src/Types";
import Card from "../../components/Card";
import { getMainBoard } from "../../api/board";

import { Wrapper, FilterContainer, Filter } from "./style";

import ReactTagInput from "@pathofdev/react-tag-input";
import "./tagInputStyle.css";
import { PuffLoader } from "react-spinners";

import Cookies from "js-cookie";

export default function MainPage(): JSX.Element {
  const [board, setBoard] = useState<Board[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [mainState, setMainState] = useState<boolean>(false);

  const getInfo = async () => {
    if (mainState) return;

    await getMainBoard(page)
      .then((data) => {
        setPage(page + 1);
        // console.log(...data);
        if (data.length - 1 === 2) data[2].thumbnail = "asdasd";
        setBoard((curInfoArray) => [...curInfoArray, ...data]); // state에 추가
      })
      .catch((err) => {
        setMainState(true);
        console.log("마지막 페이지", err);
      });
  };

  const filterHandler = () => {
    // alert("filter");
    const refresh = Cookies.get("RefreshToken");
    console.log(refresh);
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
      <div style={{ width: "100%" }}>
        <Wrapper>
          <FilterContainer>
            <Filter>
              <button onClick={filterHandler}>최신순</button>
              &nbsp;|&nbsp;
              <button onClick={filterHandler}>정렬기준</button>
            </Filter>
            <div>
              <ReactTagInput
                tags={tags}
                placeholder="태그를 입력하세요"
                maxTags={4}
                editable={true}
                readOnly={false}
                removeOnBackspace={true}
                onChange={(newTags) => setTags(newTags)}
              />
            </div>
          </FilterContainer>
          <div style={{ margin: "0px auto", display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState}>
              {board?.map((item: Board, index: number) => {
                return <Card key={index} board={item} width={"420px"} height={"500px"} />;
              })}
            </InfiniteScroll>
          </div>
        </Wrapper>
      </div>
    </Suspense>
  );
}
