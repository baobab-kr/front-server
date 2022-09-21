import React, { useState, useEffect } from "react";
import {
  JobsBusinessWrap,
  HeaderLocalComp,
  TemplateOneSidebar,
  ColumnLeft,
  PreviewJobsWrap,
  PreviewJobsBanner,
  PreviewJobsCard,
  ColumnCenter,
  ColumnTitleArea,
  StepperArea,
  ProcessStepsWrapper,
  IBordered,
  ProcessLabel,
} from "./style";

import StepFirst from "./StepFirst/StepFirst";
import StepSecond from "./StepSecond/StepSecond";
import StepThird from "./StepThird/StepThird";

import { tStepFirst, tStepSecond } from "@src/Types/Business";

export default function BusinessPage(): JSX.Element {
  const [stepper, setStepper] = useState<number>(0);
  const [stepFirst, setStepFirst] = useState<tStepFirst>({
    BusinessLicense: null,
    ManagerName: "",
    ManagerEMail: "",
    ManagerPhone: "",
    URL: "",
  });
  const [stepSecond, setStepSecond] = useState<tStepSecond>({
    Field: "",
    Title: "",
    CompanyLogo: null,
    Image: null,
    CompanyName: "",
    Location: "",
    Message: "",
    Description: "",
    EndDate: "",
    Salary: "",
    InfoURL: "",
    Type: "",
  });

  const stepperController = (value: number) => {
    if (value < 0) {
      setStepper(Math.max(stepper - 1, 0));
    } else {
      setStepper(Math.min(stepper + 1, 2));
    }
  };
  return (
    <JobsBusinessWrap>
      <div>
        <HeaderLocalComp>
          <ul>
            <li className="active">
              <div>광고 신청</div>
            </li>
            <li>
              <div>신청 내역</div>
            </li>
          </ul>
        </HeaderLocalComp>
        <div className="container">
          <TemplateOneSidebar>
            <ColumnLeft>
              <PreviewJobsWrap>
                <PreviewJobsBanner>
                  <h5>홈피드 배너 미리보기</h5>
                </PreviewJobsBanner>
                <PreviewJobsCard>
                  <h5>채용 탭 카드 미리보기</h5>
                </PreviewJobsCard>
              </PreviewJobsWrap>
            </ColumnLeft>
            <ColumnCenter>
              <div>
                <ColumnTitleArea>
                  <div>채용 광고 신청</div>
                </ColumnTitleArea>
                <StepperArea>
                  <ProcessStepsWrapper>
                    <ul>
                      <li>
                        <IBordered color={stepper === 0 ? "#448fff" : "#323339"}>1</IBordered>
                        <ProcessLabel>기본 정보 입력</ProcessLabel>
                      </li>
                      <li>
                        <IBordered color={stepper === 1 ? "#448fff" : "#323339"}>2</IBordered>
                        <ProcessLabel>채용 정보 입력</ProcessLabel>
                      </li>
                      <li>
                        <IBordered color={stepper === 2 ? "#448fff" : "#323339"}>3</IBordered>
                        <ProcessLabel>광고 게시</ProcessLabel>
                      </li>
                    </ul>
                  </ProcessStepsWrapper>
                </StepperArea>
              </div>
              <div className="container-area">
                {stepper === 0 && (
                  <div className="step-1">
                    <StepFirst value={stepFirst} setValue={setStepFirst} stepperController={stepperController} />
                  </div>
                )}
                {stepper === 1 && (
                  <div className="step-2">
                    <StepSecond value={stepSecond} setValue={setStepSecond} stepperController={stepperController} />
                  </div>
                )}
                {stepper === 2 && (
                  <div className="step-3">
                    <StepThird />
                  </div>
                )}
              </div>
            </ColumnCenter>
          </TemplateOneSidebar>
        </div>
      </div>
    </JobsBusinessWrap>
  );
}
