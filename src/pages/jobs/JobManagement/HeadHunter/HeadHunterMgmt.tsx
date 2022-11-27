import React, { useState, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { Wrapper, WrapperInner, NavArea, ContentArea, ItemTitleArea, ItemArea } from "./style";

import { Board } from "Types/main";
import InfiniteScroll from "components/InfiniteScroll";
import Category from "../../Category/Category";
import { getMainBoard } from "api/board";
import JobCard from "components/JobCard/JobCard";
import { tJob } from "Types/Jobs";
import { getJobsBoardAll, getJobsBoardForHeadHunt } from "api/jobs";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function HeadHunterMgmt(): JSX.Element {
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [board, setBoard] = useState<tJob[]>([]);
  const [mainState, setMainState] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const getInfo = async () => {
    if (mainState) return;

    await getJobsBoardForHeadHunt({})
      .then((data) => {
        // setPage(page + 1);
        setBoard((curInfoArray) => [...curInfoArray, ...data]); // state에 추가
        setMainState(true);
      })
      .catch((err) => {
        setMainState(true);
      });
  };

  const navagateBusiness = () => {
    navigate("/business");
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
      <div style={{ zIndex: "1", height: "100%" }}>
        <Wrapper>
          <WrapperInner>
            {/* <NavArea>
              <Category />
            </NavArea> */}
            <ContentArea>
              <div>
                <ItemTitleArea>
                  <span>나의 채용 공고 리스트</span>
                </ItemTitleArea>
                <ItemArea>
                  <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState} isOnTop={true}>
                    {board?.map((item: tJob, index: number) => {
                      return (
                        <JobCard
                          key={index}
                          jobItem={item}
                          board={item.id}
                          width={windowSize.innerWidth > 1810 ? "320px" : "300px"}
                          height={windowSize.innerWidth > 1810 ? "330px" : "310px"}
                          imgHeight={"45%"}
                          isMyHome={false}
                          previewLogo={""}
                          deleteBoard={() => {}}
                        />
                      );
                    })}
                  </InfiniteScroll>
                </ItemArea>
              </div>
            </ContentArea>
          </WrapperInner>
        </Wrapper>
      </div>
    </Suspense>
  );
}
