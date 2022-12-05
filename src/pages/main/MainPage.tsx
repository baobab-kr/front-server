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
import { tJob } from "Types/Jobs";
import { getJobsBoardAll } from "api/jobs";

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
    getJobsBoardAll({ page: 0 }).then((res) => {
      setJobs(res);
    });
  }, []);

  const getInfo = async () => {
    if (mainState) return;
    console.log(page);

    await getMainBoard(page)
      .then((data) => {
        setPage(page + 1);
        setBoard((curInfoArray) => [...curInfoArray, ...data]); // state에 추가
      })
      .catch((err) => {
        console.log(err);
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
                    <span>최신 아티클</span>
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
                  <JobArea>
                    <div style={{ height: "100%" }}>
                      <JobHeader>
                        <IoBusinessSharp />
                        새로운 채용 공고
                      </JobHeader>
                      <JobList>
                        {jobs.length > 0 && (
                          <MainJobCard
                            id={jobs[0].id}
                            logo={
                              <img
                                src={`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${jobs[0].logo}`}
                                alt="logo"
                                width={55}
                                height={55}
                              ></img>
                            }
                            title={jobs[0].title}
                            wlrrms={`[${jobs[0].companyName}] ${jobs[0].field}`}
                            description={jobs[0].message}
                          />
                        )}
                        {jobs.length > 1 && (
                          <MainJobCard
                            id={jobs[1].id}
                            logo={
                              <img
                                src={`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${jobs[1].logo}`}
                                alt="logo"
                                width={55}
                                height={55}
                              ></img>
                            }
                            title={jobs[1].title}
                            wlrrms={`[${jobs[1].companyName}] ${jobs[1].field}`}
                            description={jobs[1].message}
                          />
                        )}
                        {jobs.length > 2 && (
                          <MainJobCard
                            id={jobs[2].id}
                            logo={
                              <img
                                src={`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${jobs[2].logo}`}
                                alt="logo"
                                width={55}
                                height={55}
                              ></img>
                            }
                            title={jobs[2].title}
                            wlrrms={`[${jobs[2].companyName}] ${jobs[2].field}`}
                            description={jobs[2].message}
                          />
                        )}
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
