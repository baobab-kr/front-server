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
import { tStepFirst, tStepSecond } from "Types/Business";

import tossimage from "baobab-data/toss_job.png";

import { AiFillLeftCircle } from "react-icons/ai";
import { CreateJob } from "api/jobs";
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
  let logo: string = "";
  let image: string = "";

  const talent = [
    "꿈과 열정을 가지고 세계 최고에 도전하는 사람",
    "고객을 최우선으로 생각하고 끊임없이 혁신하는 사람",
    "팀워크를 이루며 자율적이고 창의적으로 일하는 사람",
  ];
  const saveContorller = () => {
    comfiremSwal();
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

  // const saveLogo = async () => {
  //   const formData: any = new FormData();
  //   formData.append("CompanyLogo", stepSecond.CompanyLogo![0]);
  //   API({
  //     method: "post",
  //     url: "/jobs/UploadOfCompanyLogo",
  //     data: formData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //     .then(function (response) {
  //       logo = response.data;
  //       console.log("saveLogo", logo);
  //     })
  //     .catch(function (response) {
  //       alert(response);
  //     });
  // };

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
          console.log("saveLogo", logo);
        })
        .catch(function (response) {
          reject(response);
        });
    });
  }

  // const saveImage = async () => {
  //   const formData: any = new FormData();
  //   formData.append("profile", stepSecond.Image![0]);
  //   API({
  //     method: "post",
  //     url: "/jobs/UploadOfCompanyImage",
  //     data: formData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //     .then(function (response) {
  //       image = response.data;
  //       console.log("saveLicense", image);

  //     })
  //     .catch(function (response) {
  //       alert(response);
  //     });
  // };

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
        console.log("saveLicense", image);
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
          console.log(res);
          body = Object.assign(body, { logo: res, license: "test" });
          console.log("body", body);
        });

        await CreateJob(body)
          .then((res) => {
            navigate("/jobs");
          })
          .catch((err) => {
            console.log(err);
            Swal.fire({ title: "생성 실패하였습니다.", scrollbarPadding: false });
          });
      }
    });
  };

  const dateOrder = () => {
    console.log(stepSecond);
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
          <CompanyName>TESLA</CompanyName>
          <Title>TESLA 엔지니어 모집</Title>
          <div style={{ display: "flex", padding: "6px 0px 6px 0px", color: "rgba(255, 7, 110, 1)" }}>
            <div>마감일 : &nbsp;</div>
            <div>{dateOrder()}</div>
          </div>

          <div style={{ display: "flex", gap: "40px" }}>
            <JobOptionArea>
              <JobOption title="채용 분야" data={stepSecond.Field} />
              <JobOption title="근무 지역" data={stepSecond.Location} />
            </JobOptionArea>

            <JobOptionArea>
              <JobOption title="경력" data={orderType(stepSecond.Type)} />
              <JobOption title="급여" data={`${stepSecond.Salary} 만원`} />
            </JobOptionArea>
          </div>

          {/* <ImageArea>
            <img src={tossimage} alt="채용 이미지" style={{ width: "100%" }} />
          </ImageArea> */}

          <TalentArea>
            <h1 style={{ fontSize: "18px", marginBottom: "10px" }}>인재상</h1>
            <ul style={{ marginLeft: "15px" }}>
              {stepSecond.talent.split(",").map((q: string, index) => {
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
              <CustomButton onClick={saveContorller}>제출</CustomButton>
            </div>
          </InputAreaFooter>
        </InputWrap>
      </TemplateSectionFooter>
    </>
  );
}
