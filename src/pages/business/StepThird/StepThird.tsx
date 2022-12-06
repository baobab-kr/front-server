import React, { Dispatch, SetStateAction } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import {
  Template,
  TemplateArea,
  Title,
  CompanyName,
  JobOptionArea,
  TalentArea,
  JobsDescriptionArea,
  TemplateSectionFooter,
  InputWrap,
  LabelArea,
  CustomButton,
  InputAreaFooter,
  BackButton,
} from "./style";
import TemplateSection from "pages/business/TemplateSection/TemplateSection";
import JobOption from "pages/business/StepThird/JobOption";
import { tStepFirst, tStepSecond } from "Types/Business";

import tossimage from "baobab-data/toss_job.png";

import { AiFillLeftCircle } from "react-icons/ai";
import { CreateJob, UpdateJobs } from "api/jobs";
import { user } from "Types/user";
import API from "api";
import moment from "moment";

type tProps = {
  // value: tStepSecond;
  stepFirst: tStepFirst;
  stepSecond: tStepSecond;
  stepperController: (value: number) => void;
};
export default function StepThird({ stepFirst, stepSecond, stepperController }: tProps): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  const navigate = useNavigate();
  const location: any = useLocation();
  let logo: string = "";
  let image: string = "";

  const saveContorller = () => {
    if (location.state === null) {
      comfiremSwal();
    } else {
      comfiremSwalUpdate();
    }
  };

  const backController = () => {
    stepperController(-1);
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

  function saveLogo(): Promise<string> {
    const formData: any = new FormData();
    formData.append("CompanyLogo", stepSecond.CompanyLogo![0]);
    return new Promise<string>((resolve, reject) => {
      API({
        method: "post",
        url: "/jobs/UploadOfCompanyLogo",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          resolve(response.data);
        })
        .catch(function (response) {
          reject(response);
        });
    });
  }

  const saveLicense = async () => {
    const formData: any = new FormData();
    formData.append("profile", stepSecond.Image![0]);
    API({
      method: "post",
      url: "/users/upload-profile",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        image = response.data;
      })
      .catch(function (response) {
        alert(response);
      });
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        let body = {
          user_id: userInfo!.id,
          companyName: stepSecond.CompanyName,
          managerName: stepFirst.ManagerName,
          managerContact: stepFirst.ManagerPhone,
          field: stepSecond.Field,
          title: stepSecond.Title,
          location: stepSecond.Location,
          message: stepSecond.Message,
          talent: stepSecond.talent,
          careerType: stepSecond.Type,
          url: stepSecond.InfoURL,
          salary: stepSecond.Salary,
          startDate: stepSecond.StartDate,
          endDate: stepSecond.EndDate,
          approvalStatus: 0,
        };

        await saveLogo().then((res) => {
          body = Object.assign(body, { logo: res, license: "test" });
        });

        await CreateJob(body)
          .then((res) => {
            navigate("/jobs");
          })
          .catch((err) => {
            Swal.fire({ title: "생성 실패하였습니다.", scrollbarPadding: false });
          });
      }
    });
  };

  const comfiremSwalUpdate = () => {
    Swal.fire({
      title: "채용 수정",
      text: "수정하시겠습니까?",
      icon: "warning",

      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
      cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
      confirmButtonText: "승인", // confirm 버튼 텍스트 지정
      cancelButtonText: "취소", // cancel 버튼 텍스트 지정

      reverseButtons: true, // 버튼 순서 거꾸로
    }).then(async (result) => {
      if (result.isConfirmed) {
        let body = {
          id: location.state.data.id,
          user_id: userInfo!.id,
          companyName: stepSecond.CompanyName,
          managerName: stepFirst.ManagerName,
          managerContact: stepFirst.ManagerPhone,
          field: stepSecond.Field,
          title: stepSecond.Title,
          location: stepSecond.Location,
          message: stepSecond.Message,
          talent: stepSecond.talent,
          careerType: stepSecond.Type,
          url: stepSecond.InfoURL,
          salary: stepSecond.Salary,
          startDate: stepSecond.StartDate,
          endDate: stepSecond.EndDate,
          approvalStatus: 0,
        };

        await saveLogo().then((res) => {
          body = Object.assign(body, { logo: res, license: "test" });
        });

        await UpdateJobs(body)
          .then((res) => {
            navigate("/jobs");
          })
          .catch((err) => {
            Swal.fire({ title: "생성 실패하였습니다.", scrollbarPadding: false });
          });
      }
    });
  };

  const dateOrder = () => {
    if (stepSecond.EndDate === null || stepSecond.StartDate === null) {
      return "상시 채용";
    } else {
      return moment(stepSecond.EndDate).format("YYYY-MM-DD");
    }
  };

  return (
    <>
      <Template>
        <TemplateArea>
          <div>
            <CompanyName>{stepSecond.CompanyName}</CompanyName>
          </div>
          <Title>{stepSecond.Title}</Title>
          <div style={{ display: "flex", padding: "6px 0px 6px 0px", color: "rgba(255, 7, 110, 1)" }}>
            <div>마감일 : &nbsp;</div>
            <div>{dateOrder()}</div>
          </div>

          <JobsDescriptionArea>
            <JobOptionArea>
              <JobOption title="채용 분야" data={stepSecond.Field || ""} />
              <JobOption title="근무 지역" data={stepSecond.Location || ""} />
            </JobOptionArea>

            <JobOptionArea>
              <JobOption title="경력" data={orderType(stepSecond.Type || 0)} />
              <JobOption title="급여" data={`${stepSecond.Salary} 만원`} />
            </JobOptionArea>
          </JobsDescriptionArea>

          <TalentArea>
            <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>인재상</h1>
            <ul style={{ marginLeft: "15px" }}>
              {stepSecond.talent &&
                stepSecond.talent.split(",").map((q: string, index: number) => {
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
            <div style={{ lineHeight: "1.2rem" }}>{stepSecond.Message}</div>
          </TalentArea>
        </TemplateArea>
      </Template>
      <TemplateSection title="정보 더보기" open={true}>
        <TemplateArea>
          <div style={{ display: "flex", marginLeft: "-30px" }}>
            <div> 회사 정보 : &nbsp;</div>
            <a href={stepSecond.InfoURL} target="_blank" rel="noopener noreferrer">
              {stepSecond.InfoURL}
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
              {location.state === null && <CustomButton onClick={saveContorller}>제출</CustomButton>}
              {location.state !== null && <CustomButton onClick={saveContorller}>수정</CustomButton>}
            </div>
          </InputAreaFooter>
        </InputWrap>
      </TemplateSectionFooter>
    </>
  );
}
