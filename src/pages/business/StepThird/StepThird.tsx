import React, { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  Template,
  TemplateArea,
  Title,
  CompanyName,
  JobOptionArea,
  TalentArea,
  ImageArea,
  TemplateSectionFooter,
  InputWrap,
  LabelArea,
  CustomButton,
  InputAreaFooter,
  BackButton,
} from "./style";
import TemplateSection from "pages/business/TemplateSection/TemplateSection";
import JobOption from "pages/business/StepThird/JobOption";
import { tStepSecond } from "Types/Business";

import tossimage from "baobab-data/toss_job.png";

import { AiFillLeftCircle } from "react-icons/ai";

type tProps = {
  // value: tStepSecond;
  stepperController: (value: number) => void;
};
export default function StepThird({ stepperController }: tProps): JSX.Element {
  const navigate = useNavigate();

  const logoFileController = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const imageFileController = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const talent = [
    "꿈과 열정을 가지고 세계 최고에 도전하는 사람",
    "고객을 최우선으로 생각하고 끊임없이 혁신하는 사람",
    "팀워크를 이루며 자율적이고 창의적으로 일하는 사람",
  ];
  const saveContorller = () => {
    // Swal.fire("제출하시겠습니까?");0
    comfiremSwal();
  };

  const backController = () => {
    stepperController(-1);
  };

  const comfiremSwal = () => {
    Swal.fire({
      title: "채용 신청",
      text: "제출하시겠습니까?",
      icon: "warning",

      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
      cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
      confirmButtonText: "승인", // confirm 버튼 텍스트 지정
      cancelButtonText: "취소", // cancel 버튼 텍스트 지정

      reverseButtons: true, // 버튼 순서 거꾸로
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/jobs");
      }
    });
  };

  return (
    <>
      <Template>
        <TemplateArea>
          <CompanyName>TESLA</CompanyName>
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
              세상은 매우 빠르게 변화하고 있습니다. 불과 10여 년 전 기업들의 성공에 도움이 되었던 많은 기술들이 사라졌거나 새로운 기술로 대체되었습니다. 더욱 더
              빠르고 민첩하게 새로운 아이디어를 실험하며, 시장 기회를 포착하는 것은 이제 스타트업 뿐만 아니라 모든 기업에게 생존의 문제가 되었습니다. AWS는
              고객들이 기존의 상용 소프트웨어 및 하드웨어 벤더 에서 벗어날수 있도록, 탄력적이고 안전한 글로벌 인프라 뿐만 아니라 머신러닝, 빅데이터, 분석,
              DevOps 및 컨테이너에서 IoT, 모바일에 이르기까지 모든 기술 분야에 걸쳐 다양한 서비스를 제공하고 있습니다.
            </div>
          </TalentArea>
        </TemplateArea>
      </Template>
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
      <TemplateSectionFooter>
        <InputWrap>
          <LabelArea>
            <div>
              <BackButton onClick={backController}>
                <AiFillLeftCircle size={30} />
                <span style={{ paddingLeft: "10px" }}>뒤로가기</span>
              </BackButton>
            </div>
          </LabelArea>
          <InputAreaFooter className="footer">
            <div className="input">
              <CustomButton onClick={saveContorller}>제출</CustomButton>
            </div>
          </InputAreaFooter>
        </InputWrap>
      </TemplateSectionFooter>
    </>
  );
}
