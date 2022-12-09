import React, { useState, useEffect, Suspense } from "react";
import { approvalJobsBoardForAdmin, deleteJobsBoardForAdmin, getJobsBoardForAdmin, getMyApplyJobs } from "api/jobs";
import { useNavigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { tApplyJob, tJob } from "Types/Jobs";
import { user } from "Types/user";
import { Wrapper, WrapperInner, ContentArea, ItemTitleArea, ItemArea, CustomCard, ActionArea } from "./style";
import InfiniteScroll from "components/InfiniteScroll";
import JobCard from "components/JobCard/JobCard";
import ApplyJobCard from "components/ApplyJobCard/ApplyJobCard";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function MyApplyJobs(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [board, setBoard] = useState<tApplyJob[]>([]);
  const [mainState, setMainState] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    const path = location.pathname.split("@")[1].split("/")[0];
    if (path !== userInfo?.userid) {
      navigate("/");
    }
  }, [userInfo]);

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

    await getMyApplyJobs()
      .then((data) => {
        setMainState(true);

        setBoard((curInfoArray) => [...curInfoArray, ...data]); // state에 추가
      })
      .catch((err) => {
        setMainState(true);
      });
  };

  // const apply = async (id: number) => {
  //   await approvalJobsBoardForAdmin(id);

  //   setBoard((curInfoArray) => [...curInfoArray.filter((q) => q.id !== id)]);
  // };

  // const deleteJob = async (id: number) => {
  //   await deleteJobsBoardForAdmin(id);

  //   setBoard((curInfoArray) => [...curInfoArray.filter((q) => q.id !== id)]);
  // };

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
            <ContentArea>
              <div>
                <ItemTitleArea>
                  <span>나의 입사 지원 리스트</span>
                </ItemTitleArea>
                <ItemArea>
                  <InfiniteScroll loadFnc={getInfo} data={board} isLast={mainState} isOnTop={true}>
                    {board?.map((item: tApplyJob, index: number) => {
                      return (
                        <ApplyJobCard
                          key={index}
                          jobItem={item}
                          board={item.jobs_Id.id}
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
