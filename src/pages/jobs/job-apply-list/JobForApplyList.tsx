import React, { useState, useEffect, Suspense } from "react";
import { approvalJobsBoardForAdmin, deleteJobsBoardForAdmin, getApplyJobAll, getJobsBoardDetail, getJobsBoardForAdmin, getMyApplyJobs } from "api/jobs";
import { useNavigate, useLocation } from "react-router-dom";
import { PuffLoader } from "react-spinners";
import { JobsId, tApplyJob, tDetailJob, tJob } from "Types/Jobs";
import { user } from "Types/user";
import { Wrapper, WrapperInner, ContentArea, ItemTitleArea, ItemArea, CustomCard, ActionArea } from "./style";
import InfiniteScroll from "components/InfiniteScroll";
import JobCard from "components/JobCard/JobCard";
import ApplyJobCard from "components/ApplyJobCard/ApplyJobCard";
import Swal from "sweetalert2";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function JobForApplyList(): JSX.Element {
  const navigate = useNavigate();
  const location: any = useLocation();
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [board, setBoard] = useState<tApplyJob[]>([]);
  const [data, setData] = useState<tDetailJob>();

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
    // if (data === undefined) return;
    const id = location.pathname.split("/");
    const data: tDetailJob = location.state.data;

    await getApplyJobAll(Number(id[id.length - 2]))
      .then((res) => {
        setMainState(true);
        const jobs_id: JobsId = {
          id: data.id,
          companyName: data.companyName,
          managerName: "",
          managerContact: "",
          license: "",
          field: data.field,
          title: data.title,
          logo: data.logo,
          location: "",
          message: "",
          talent: "",
          careerType: 0,
          url: "",
          salary: "",
          startDate: "",
          endDate: "",
          approvalStatus: 0,
          jobStatus: 0,
        };
        res.forEach((element) => {
          element.jobs_Id = jobs_id;
        });
        console.log(res);
        setBoard((curInfoArray) => [...curInfoArray, ...res]); // state에 추가
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
        <Wrapper>
          <WrapperInner>
            <ContentArea>
              <div>
                <ItemTitleArea style={{ fontSize: "15px" }}>
                  <span>채용 제목 : {location.state.data?.title}</span>
                </ItemTitleArea>
                <ItemTitleArea style={{ fontSize: "15px" }}>
                  <span>분야 : {location.state.data?.field}</span>
                </ItemTitleArea>
                <ItemTitleArea>
                  <span>채용 입사 지원자 리스트</span>
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
                          editMode={false}
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
