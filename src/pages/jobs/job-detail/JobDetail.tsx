import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import JobOption from "pages/business/StepThird/JobOption";
import { WrapperArea, Template, TemplateArea, TitleArea, Title, CompanyName, JobOptionArea, TalentArea, ImageArea, ApplyButton } from "./style";
import tossimage from "baobab-data/toss_job.png";
import TemplateSection from "pages/business/TemplateSection/TemplateSection";

export default function JobDetail(): JSX.Element {
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

  return (
    <WrapperArea>
      <div style={{ width: "60%", margin: "0px auto" }}>
        <Template>
          <TemplateArea>
            <TitleArea>
              <CompanyName>TESLA</CompanyName>
              <ApplyButton onClick={routeApplyJobPage}>입사 지원</ApplyButton>
            </TitleArea>
            <Title>TESLA 엔지니어 모집</Title>
            <div style={{ display: "flex", padding: "6px 0px 6px 0px", color: "rgba(255, 7, 110, 1)" }}>
              <div>마감일 : &nbsp;</div>
              <div>2022-12-15</div>
            </div>

            <div style={{ display: "flex", gap: "40px" }}>
              <JobOptionArea>
                <JobOption title="채용 분야" data="채용 분야" />
                <JobOption title="학력" data="대졸(2,3년제) 이상 부문별 학력조건 다름" />
                <JobOption title="근무 지역" data="경기도 시흥시" />
              </JobOptionArea>

              <JobOptionArea>
                <JobOption title="근무 형태" data="정규직" />
                <JobOption title="경력" data="신입" />
                <JobOption title="급여" data="회사 내규에 따름" />
              </JobOptionArea>
            </div>

            <ImageArea>
              <img src={tossimage} alt="채용 이미지" style={{ width: "100%" }} />
            </ImageArea>

            <TalentArea>
              <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>인재상</h1>
              <ul style={{ marginLeft: "15px" }}>
                {talent.map((q) => {
                  return <li style={{ listStyleType: "disc" }}>{q}</li>;
                })}
              </ul>
            </TalentArea>
            <TalentArea>
              <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>채용 설명</h1>
              <div style={{ lineHeight: "1.2rem" }}>
                세상은 매우 빠르게 변화하고 있습니다. 불과 10여 년 전 기업들의 성공에 도움이 되었던 많은 기술들이 사라졌거나 새로운 기술로 대체되었습니다. 더욱
                더 빠르고 민첩하게 새로운 아이디어를 실험하며, 시장 기회를 포착하는 것은 이제 스타트업 뿐만 아니라 모든 기업에게 생존의 문제가 되었습니다. AWS는
                고객들이 기존의 상용 소프트웨어 및 하드웨어 벤더 에서 벗어날수 있도록, 탄력적이고 안전한 글로벌 인프라 뿐만 아니라 머신러닝, 빅데이터, 분석,
                DevOps 및 컨테이너에서 IoT, 모바일에 이르기까지 모든 기술 분야에 걸쳐 다양한 서비스를 제공하고 있습니다.
              </div>
            </TalentArea>
          </TemplateArea>
        </Template>
        <div style={{ paddingBottom: "30px" }}>
          <TemplateSection title="정보 더보기" open={true}>
            <TemplateArea>
              <div style={{ display: "flex", marginLeft: "-30px" }}>
                <div> 회사 정보 : &nbsp;</div>
                <a href="https://www.notion.so/baobab-tree/Baobab-661df2d661204d1b8cfef17797fee76b" target="_blank" rel="noopener noreferrer">
                  https://www.notion.so/baobab-tree/Baobab-661df2d661204d1b8cfef17797fee76b
                </a>
              </div>
            </TemplateArea>
          </TemplateSection>
        </div>
      </div>
    </WrapperArea>
  );
}
