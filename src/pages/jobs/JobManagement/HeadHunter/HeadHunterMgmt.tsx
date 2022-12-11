import React, { useState, useEffect, Suspense } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { Wrapper, WrapperInner, NavArea, ContentArea, ItemTitleArea, ItemArea, CustomCard, ActionArea } from "./style";

import { Board } from "Types/main";
import InfiniteScroll from "components/InfiniteScroll";
import Category from "../../Category/Category";
import { getMainBoard } from "api/board";
import JobCard from "components/JobCard/JobCard";
import { tJob } from "Types/Jobs";
import { getJobsBoardAll, getJobsBoardForHeadHunt, UpdateJobs } from "api/jobs";
import Swal from "sweetalert2";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function HeadHunterMgmt(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
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

  const endJob = (item: tJob) => {
    Swal.fire({
      title: "정말로 마감 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "마감",
      cancelButtonText: "취소",
      reverseButtons: true, // 버튼 순서 거꾸로
    }).then(async (result: any) => {
      if (result.isConfirmed) {
        await UpdateJobs({ id: item.id, jobStatus: 0 })
          .then((res) => {
            setBoard(board.map((it) => (it.id === item.id ? { ...it, jobStatus: 0 } : it)));
            Swal.fire("채용공고", "마감이 완료되었습니다.", "success");
          })
          .catch((err) => {
            Swal.fire("채용 마감 실패", err, "error");
          });
      }
    });
  };

  const modifyJob = (item: tJob) => {
    navigate(`/business/${item.id}`, { state: { data: item } });
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
                        <CustomCard key={index}>
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
                          <ActionArea>
                            {item.jobStatus === 1 && (
                              <>
                                {item.approvalStatus === 0 && (
                                  <div
                                    className="approval"
                                    onClick={() => {
                                      modifyJob(item);
                                    }}
                                  >
                                    수정
                                  </div>
                                )}
                                <div
                                  className="approval"
                                  onClick={() => {
                                    endJob(item);
                                  }}
                                >
                                  마감
                                </div>
                              </>
                            )}
                            {item.jobStatus === 0 && <div>마감된 채용공고 입니다.</div>}
                          </ActionArea>
                        </CustomCard>
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
