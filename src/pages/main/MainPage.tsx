import React, { useState, useEffect, Suspense } from "react";
import InfiniteScroll from "../../components/InfiniteScroll";
import { Board } from "Types/main";
import Card from "../../components/Card";
import MainJobCard from "../../components/JobCard/MainJobCard";
import { getMainBoard } from "../../api/board";
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

import { IoBusinessSharp } from "react-icons/io5";
import "../../style/tagInputStyle.css";
import { PuffLoader } from "react-spinners";
import Category from "./Category/Category";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function MainPage(): JSX.Element {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [board, setBoard] = useState<Board[]>([]);
  // const [tags, setTags] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [mainState, setMainState] = useState<boolean>(false);

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

    await getMainBoard(page)
      .then((data) => {
        setPage(page + 1);
        setBoard((curInfoArray) => [...data, ...curInfoArray].reverse()); // state에 추가
      })
      .catch((err) => {
        setMainState(true);
      });
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
              <h1>Spotify - Moved by Music</h1>
              <p>by BAOBAB</p>
            </BannerDesc>
          </div>
        </MainBanner>
        <Wrapper>
          <WrapperInner>
            <NavArea>
              <Category />
            </NavArea>
            <ContentArea>
              <div>
                <ItemTitleArea>
                  <span>최신 아티클</span>
                </ItemTitleArea>
                <ItemArea>
                  <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState}>
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
                  <JobArea>
                    <div style={{ height: "100%" }}>
                      {windowSize.innerWidth > 1260 && (
                        <JobHeader>
                          <IoBusinessSharp />
                          새로운 채용 공고
                        </JobHeader>
                      )}
                      <JobList>
                        {/* <JobCard>
                          <div style={{ width: "70px", display: "flex", justifyContent: "center" }}>
                            <SiTesla size={45} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                            <p>[Tesla] Field Service Engineer</p>
                            <p style={{ fontSize: "12px" }}>Tesla</p>
                            <p style={{ fontSize: "12px" }}>경력 (3년이상), 대졸이상</p>
                          </div>
                        </JobCard> */}
                        <MainJobCard logo="tesla" title="Tesla" wlrrms="[Tesla] Field Service Engineer" 경력="경력 (3년이상), 대졸이상" />
                        <MainJobCard logo="naver" title="Naver" wlrrms="[NAVER] 프론트엔드 개발자" 경력="경력 신입" />
                        <MainJobCard logo="meta" title="Facebook" wlrrms="[Facebook] 백엔드 개발자" 경력="경력 (3년이상), 대졸이상" />
                      </JobList>
                    </div>
                  </JobArea>
                </ItemArea>
              </div>
            </ContentArea>
          </WrapperInner>
        </Wrapper>
      </div>
    </Suspense>
  );
}
