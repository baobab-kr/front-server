import React, { useState, useEffect, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { MainBanner, BannerTitle, BannerDesc, BannerImageArea, LinkBtn, Wrapper, WrapperInner, NavArea, ContentArea, ItemTitleArea, ItemArea } from "./style";
import BannerImage from "../../assets/JobBanner.jpg";

import { Board } from "Types/main";
import InfiniteScroll from "../../components/InfiniteScroll";
import Category from "./Category/Category";
import { getMainBoard } from "../../api/board";
import JobCard from "../../components/JobCard/JobCard";
import { user } from "Types/user";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function JobsPage(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [board, setBoard] = useState<Board[]>([]);
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

    await getMainBoard(page)
      .then((data) => {
        setPage(page + 1);
        if (data.length - 1 === 2) data[2].thumbnail = "";
        setBoard((curInfoArray) => [...curInfoArray, ...data]); // state에 추가
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
        <MainBanner>
          <div>
            <BannerImageArea>
              <img
                style={{ backfaceVisibility: "hidden", height: "100%", objectFit: "cover", objectPosition: "center", width: "100%" }}
                src={BannerImage}
                alt="banner"
              />
            </BannerImageArea>
            {userInfo?.role === 1 && (
              <BannerTitle>
                <h1 style={{ fontSize: "30px" }}>새로운 인재를 찾고 있나요?</h1>
                <LinkBtn onClick={navagateBusiness}>채용 광고 신청하러 가기</LinkBtn>
              </BannerTitle>
            )}
            <BannerDesc>
              {/* <h1>Spotify - Moved by Music</h1> */}
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
                  <span>전체 채용</span>
                </ItemTitleArea>
                <ItemArea>
                  <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState} isOnTop={true}>
                    {board?.map((item: Board, index: number) => {
                      return (
                        <JobCard
                          key={index}
                          board={index}
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
