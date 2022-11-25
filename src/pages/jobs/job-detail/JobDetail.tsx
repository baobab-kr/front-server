import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import JobOption from "pages/business/StepThird/JobOption";
import { WrapperArea, Template, TemplateArea, TitleArea, Title, CompanyName, JobOptionArea, TalentArea, ImageArea, ApplyButton } from "./style";
import tossimage from "baobab-data/toss_job.png";
import TemplateSection from "pages/business/TemplateSection/TemplateSection";
import { user } from "Types/user";
import { USER_TYPE } from "constants/index";
import { deleteJobsBoardForAdmin, getJobsBoardDetail } from "api/jobs";
import { tDetailJob, tJob } from "Types/Jobs";
import moment from "moment";

export default function JobDetail(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const [data, setData] = useState<tDetailJob>();

  const navigate = useNavigate();
  const location = useLocation();
  const talent = [
    "꿈과 열정을 가지고 세계 최고에 도전하는 사람",
    "고객을 최우선으로 생각하고 끊임없이 혁신하는 사람",
    "팀워크를 이루며 자율적이고 창의적으로 일하는 사람",
  ];

  const routeApplyJobPage = () => {
    console.log(location.pathname);
    const id = location.pathname.split("/");
    navigate(`/apply/${id[id.length - 1]}`);
  };

  const jobDelete = async () => {
    const id = location.pathname.split("/");
    console.log(id[id.length - 1]);
    const targetId: number = Number(id[id.length - 1]);
    //TODO Error
    if (targetId === undefined) return;
    await deleteJobsBoardForAdmin(targetId);
    navigate("/jobs");
  };

  useEffect(() => {
    getInfo();
  }, []);

  const getInfo = async () => {
    const id = location.pathname.split("/");
    await getJobsBoardDetail(Number(id[id.length - 1]))
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => {
        console.log("getJobsBoardDetail - error", err);
      });
  };

  const dateOrder = () => {
    if (data?.endDate === undefined || data.startDate === undefined) return "";
    if (data?.endDate === null || data?.startDate === null) {
      return "상시 채용";
    } else {
      return moment(data.endDate).format("YYYY-MM-DD");
    }
  };

  const orderType = (type: number) => {
    switch (type) {
      case 0:
        return "경력무관";
      case 1:
        return "인턴";
      case 2:
        return "신입";
      case 3:
        return "경력";
      default:
        return "경력무관";
    }
  };

  return (
    <WrapperArea>
      <div style={{ width: "60%", margin: "0px auto" }}>
        <Template>
          <TemplateArea>
            <TitleArea>
              <CompanyName>{data?.companyName}</CompanyName>
              {userInfo?.role === USER_TYPE.DEVELOPER && <ApplyButton onClick={routeApplyJobPage}>입사 지원</ApplyButton>}
              {userInfo?.role === USER_TYPE.HEADHUNTER && <ApplyButton onClick={jobDelete}>채용 마감</ApplyButton>}
              {userInfo?.role === USER_TYPE.ADMIN && <ApplyButton onClick={routeApplyJobPage}>승인</ApplyButton>}
            </TitleArea>
            <Title>{data?.title}</Title>
            <div style={{ display: "flex", padding: "6px 0px 6px 0px", color: "rgba(255, 7, 110, 1)" }}>
              <div>마감일 : &nbsp;</div>
              <div>{dateOrder()}</div>
            </div>

            <div style={{ display: "flex", gap: "40px" }}>
              <JobOptionArea>
                <JobOption title="채용 분야" data={data?.field || ""} />
                <JobOption title="근무 지역" data={data?.location || ""} />
              </JobOptionArea>

              <JobOptionArea>
                <JobOption title="경력" data={orderType(data?.careerType || 0)} />
                <JobOption title="급여" data={`${data?.salary} 만원`} />
              </JobOptionArea>
            </div>

            <TalentArea>
              <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>인재상</h1>
              <ul style={{ marginLeft: "15px" }}>
                {data?.talent &&
                  data?.talent.split(",").map((q: string, index) => {
                    if (q === "") return <div key={index}></div>;
                    return (
                      <li style={{ listStyleType: "disc" }} key={index}>
                        {q}
                      </li>
                    );
                  })}
              </ul>
            </TalentArea>
            <TalentArea>
              <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>채용 설명</h1>
              <div style={{ lineHeight: "1.2rem" }}>{data?.message}</div>
            </TalentArea>
          </TemplateArea>
        </Template>
        <div style={{ paddingBottom: "30px" }}>
          <TemplateSection title="정보 더보기" open={true}>
            <TemplateArea>
              <div style={{ display: "flex", marginLeft: "-30px" }}>
                <div> 회사 정보 : &nbsp;</div>
                <a href={data?.url} target="_blank" rel="noopener noreferrer">
                  {data?.url}
                </a>
              </div>
            </TemplateArea>
          </TemplateSection>
        </div>
      </div>
    </WrapperArea>
  );
}
