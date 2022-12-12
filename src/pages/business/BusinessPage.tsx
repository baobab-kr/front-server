import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import JobCard from "../../components/JobCard/JobCard";
// import MainJobCard from "../../components/JobCard/MainJobCard";
import MainJobCard from "components/JobCard/MainJobCard";

import { tStepFirst, tStepSecond } from "Types/Business";

import { tJob } from "Types/Jobs";
import { USER_TYPE } from "constants/index";
import { checkUserRole, userLogout } from "api/user";
import { user } from "Types/user";
import Swal from "sweetalert2";

export default function BusinessPage(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const navigate = useNavigate();
  const location: any = useLocation();
  const [isModify, setIsModify] = useState<boolean>(false);
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
    StartDate: "",
    EndDate: "",
    Salary: "",
    InfoURL: "",
    talent: "",
    Type: 0,
  });
  const [previewLogo, setPreviewLogo] = useState<string>("");

  const [previewData, setPreviewData] = useState<tJob>({
    id: 0,
    companyName: " ",
    managerName: "",
    managerContact: "",
    license: "",
    field: " ",
    title: "",
    logo: "",
    location: "",
    message: "",
    talent: "",
    careerType: 0,
    url: "",
    salary: "",
    startDate: null,
    endDate: null,
    approvalStatus: 0,
    jobStatus: 0,
  });

  const checkRole = async () => {
    if (userInfo !== null) {
      await checkUserRole(userInfo?.userid).then(async (res) => {
        if (res !== USER_TYPE.HEADHUNTER) {
          Swal.fire("접근불가", "비정상적인 접근입니다.", "error");
          await userLogout().then((res) => {
            navigate("/");
            window.location.reload();
          });
        }
      });
    }
  };

  useEffect(() => {
    checkRole();
  }, []);

  useEffect(() => {
    if (stepSecond.CompanyLogo !== null && stepSecond.CompanyLogo !== undefined) {
      console.log(typeof stepSecond.CompanyLogo);
      if (typeof stepSecond.CompanyLogo !== typeof "") {
        window.URL.revokeObjectURL(previewLogo);
        setPreviewLogo(URL.createObjectURL(stepSecond!.CompanyLogo[0]));
      } else {
        setPreviewLogo(stepSecond!.CompanyLogo);
      }
    }
    setPreviewData((curr) => {
      return {
        ...curr,
        field: stepSecond.Field,
        title: stepSecond.Title,
        companyName: stepSecond.CompanyName,
        location: stepSecond.Location,
        message: stepSecond.Message,
        salary: stepSecond.Salary,
        careerType: stepSecond.Type,
      };
    });
  }, [stepSecond]);

  useEffect(() => {
    if (location.state !== null && isModify === false) {
      const data: tJob = location.state.data;

      setStepFirst({
        BusinessLicense: null, //data.license,
        ManagerEMail: "",
        ManagerName: data.managerName,
        ManagerPhone: data.managerContact,
        URL: "",
      });

      // const techStack = JOB_GROUP.find((q: any) => q.label === data.field);
      console.log(data.field);
      setStepSecond({
        CompanyLogo: `${process.env.REACT_APP_API_ROOT}/users/read-profile?userid="${data.logo}"`,
        CompanyName: data.companyName,
        EndDate: data.endDate,
        Field: data.field,
        Image: null,
        InfoURL: data.url,
        Location: data.location,
        Message: data.message,
        Salary: data.salary,
        StartDate: data.startDate,
        talent: data.talent,
        Title: data.title,
        Type: data.careerType,
      });
    } else {
      setStepFirst({
        BusinessLicense: null, //data.license,
        ManagerEMail: "",
        ManagerName: stepFirst.ManagerName,
        ManagerPhone: stepFirst.ManagerPhone,
        URL: "",
      });
    }
  }, []);

  const stepperController = (value: number) => {
    window.scrollTo({ top: 0, behavior: "auto" });

    if (value < 0) {
      setStepper(Math.max(stepper - 1, 0));
    } else {
      setStepper(Math.min(stepper + 1, 2));
    }
  };
  return (
    <JobsBusinessWrap>
      <div>
        <div className="container">
          <TemplateOneSidebar>
            <ColumnLeft>
              <PreviewJobsWrap>
                <PreviewJobsBanner>
                  <h5 style={{ marginBottom: "15px" }}>홈피드 배너 미리보기</h5>
                  <JobCard
                    jobItem={previewData}
                    previewLogo={previewLogo}
                    board={-1}
                    width={"300px"}
                    height={"310px"}
                    imgHeight={"45%"}
                    isMyHome={false}
                    deleteBoard={() => {}}
                  />
                </PreviewJobsBanner>
                <PreviewJobsCard>
                  <h5 style={{ marginBottom: "15px" }}>채용 탭 카드 미리보기</h5>
                  <MainJobCard
                    id={null}
                    logo={previewLogo !== "" ? <img src={previewLogo} alt="logo" width={55} height={55}></img> : ""}
                    title={stepSecond.Title}
                    wlrrms={`[${stepSecond.CompanyName}] ${stepSecond.Field}`}
                    description={stepSecond.Message}
                  />
                </PreviewJobsCard>
              </PreviewJobsWrap>
            </ColumnLeft>
            <ColumnCenter>
              <div>
                <ColumnTitleArea>
                  <div>채용 신청</div>
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
                    <StepSecond isModify={isModify} value={stepSecond} setValue={setStepSecond} stepperController={stepperController} />
                  </div>
                )}
                {stepper === 2 && (
                  <div className="step-3">
                    <StepThird stepFirst={stepFirst} stepSecond={stepSecond} stepperController={stepperController} />
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
