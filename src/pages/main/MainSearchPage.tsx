import React, { useState, useEffect, Suspense } from "react";
import InfiniteScroll from "../../components/InfiniteScroll";
import { Board } from "Types/main";
import Card from "../../components/Card";
import MainJobCard from "../../components/JobCard/MainJobCard";
import { getBoardSearchOfTitle, getMainBoard } from "../../api/board";
import BannerImage from "../../assets/banner2.jpg";
import {
  Wrapper,
  WrapperInner,
  NavArea,
  ContentArea,
  MainBanner,
  BannerTitle,
  BannerDesc,
  BannerImageArea,
  ItemTitleArea,
  ItemArea,
  JobArea,
  JobHeader,
  JobList,
} from "./style";
import { useLocation } from "react-router-dom";
import { IoBusinessSharp } from "react-icons/io5";
import "../../style/tagInputStyle.css";
import { PuffLoader } from "react-spinners";
import Category from "./Category/Category";
import { tJob } from "Types/Jobs";
import { getJobsBoardAll } from "api/jobs";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function MainSearchPage(): JSX.Element {
  const location = useLocation();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [board, setBoard] = useState<Board[]>([]);
  // const [tags, setTags] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [mainState, setMainState] = useState<boolean>(false);
  const [jobs, setJobs] = useState<tJob[]>([]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setBoard([]);
    setPage(0);
    setMainState(false);
  }, [location.search]);

  const getInfo = async () => {
    if (mainState) return;
    const query = queryParse(location.search);

    await getBoardSearchOfTitle(page, query["title"])
      .then((data) => {
        setPage(page + 1);
        setBoard((curInfoArray) => [...curInfoArray, ...data]); // state에 추가
      })
      .catch((err) => {
        setMainState(true);
      });
  };

  const queryParse = (str: string): any => {
    const temp: string[] = str.split("?");
    const buff: any = {};
    temp.forEach((q) => {
      if (q !== "") {
        const t = q.split("=");
        buff[t[0]] = t[1];
      }
    });
    return buff;
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
      <div style={{ zIndex: "1", height: "100%", width: "100%" }}>
        <MainBanner>
          <div>
            <BannerImageArea>
              <img
                style={{ backfaceVisibility: "hidden", height: "100%", objectFit: "cover", objectPosition: "center", width: "100%" }}
                src={BannerImage}
                alt="banner"
              />
            </BannerImageArea>
            <BannerTitle>
              <h1 style={{ fontSize: "45px" }}>매일 성장하고</h1>
              <h1 style={{ fontSize: "45px" }}>더 멋지게 일하세요</h1>
              <p style={{ marginTop: "20px" }}>이제 바오밥에서 커리어를 쌓아보세요.</p>
            </BannerTitle>
            <BannerDesc>
              {/* <h1>Spotify - Moved by Music</h1> */}
              {/* <p>by BAOBAB</p> */}
            </BannerDesc>
          </div>
        </MainBanner>
        <Wrapper>
          <WrapperInner>
            {/* <NavArea>
              <Category />
            </NavArea> */}
            <ContentArea>
              <div>
                <ItemArea>
                  <ItemTitleArea>
                    <span>검색어 : "{queryParse(location.search)["title"]}"</span>
                  </ItemTitleArea>
                  <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState} isOnTop={true}>
                    {board?.map((item: Board, index: number) => {
                      return (
                        <Card
                          key={index}
                          board={item}
                          width={windowSize.innerWidth > 1810 ? "320px" : "300px"}
                          height={windowSize.innerWidth > 1810 ? "330px" : "310px"}
                          imgHeight={"45%"}
                          isMyHome={false}
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
