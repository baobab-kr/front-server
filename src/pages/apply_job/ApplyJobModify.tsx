import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
  CareerArea,
  EduArea,
  TitleArea,
  Wrapper,
  SubTitle,
  Template,
  FormArea,
  FormWrapper,
  Title,
  Custominput,
  CustomEditinput,
  SubmitArea,
  SubmitBtn,
  CareerButton,
  CheckBoxBtn,
  ThumbnailArea,
  UserInfoArea,
} from "./style";
import Select from "react-select";
import photo from "assets/bg_photo_default.png";
import checkImg from "../../assets/selected.png";
import { JOB_GROUP } from "constants/index";
import { user } from "Types/user";
import Swal from "sweetalert2";
import { CreateApplyJob, getApplyJobDetail, getAutoCompleteAPI, UpdateApplyJob } from "api/jobs";
import { tApplyJob } from "Types/Jobs";

const formatOptionLabel = ({ value, label }: tProps) => (
  <div style={{ display: "flex", color: "black" }}>
    <div>{label}</div>
  </div>
);

export const EDUCATION_GROUP = [
  { value: "0", label: "중학교" },
  { value: "1", label: "고등학교" },
  { value: "2", label: "전문학사" },
  { value: "3", label: "학사" },
  { value: "4", label: "석사" },
  { value: "5", label: "박사" },
];

type tProps = { value: string; label: string };

export default function ApplyJobModify(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const navigate = useNavigate();
  const location = useLocation();

  const [applyJobId, setApplyJobId] = useState<number>(-1);

  const [education, setEducation] = useState<string>(EDUCATION_GROUP[0].value);
  const [educationStatus, setEducationStatus] = useState<number>(0);
  const [careerYear, setCareerYear] = useState<number | null>(null);
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  // const [job, setJob] = useState<string>(JOB_GROUP[0].value);
  const [job, setJob] = useState<{ value: string; label: string }>(JOB_GROUP[0]);

  const [socialUrl, setSocialUrl] = useState<string>("");

  const [fileImage, setFileImage] = useState<string>("");
  const [fileList, setFileList] = useState<FileList>();

  const userTypeHandler = (props: any) => {
    setEducation(props.value);
  };

  const jobHandler = (props: any) => {
    setJob(props);
  };

  const imageSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileLists = e.target.files;
    if (fileLists !== null) {
      // setFileImage(fileImage);
      setFileImage(URL.createObjectURL(fileLists[0]));
      setFileList(fileLists);
      console.log("asd", fileList);
    }
  };

  const submit = async () => {
    const id = location.pathname.split("/");

    if (title === "" || name === "" || email === "" || url === "" || socialUrl === "") {
      Swal.fire("다시 확인해주세요");
      return;
    }
    const body = {
      id: applyJobId,
      jobs_Id: Number(id[id.length - 1]),
      user_id: userInfo?.id,
      title: title,
      name: name,
      email: email,
      techStack: job.label,
      careerYear: careerYear,
      resumeUrl: url,
      socialUrl: socialUrl,
      profile: "test",
      education: education,
      educationStatus: educationStatus,
    };
    console.log(body);

    await UpdateApplyJob(body)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Error 다시 입력해주세요");
      });
    //
  };

  useEffect(() => {
    const id = location.pathname.split("/");
    console.log(Number(id[id.length - 1]));

    getApplyJobDetail(Number(id[id.length - 1])).then((res: tApplyJob) => {
      setEmail(res.email);
      if (res.socialUrl !== null) setSocialUrl(res.socialUrl);
      if (res.techStack !== null) {
        const targetTechstack = JOB_GROUP.find((q) => q.label === res.techStack);
        if (targetTechstack?.value !== undefined) {
          setJob(targetTechstack);
        }
      }

      setEducation(String(res.education));
      setEducationStatus(res.educationStatus);
      setCareerYear(res.careerYear);
      setUrl(res.resumeUrl);
      setTitle(res.title);
      setName(res.name);
      setApplyJobId(res.id);
      // setJob()
      console.log(res);
    });
  }, []);

  return (
    <Wrapper>
      <Template>
        <FormArea>
          <FormWrapper>
            <TitleArea>
              <Title>이력서 제목</Title>
              <SubTitle>∙ 최대 30자 까지 입력할 수 있습니다.</SubTitle>
            </TitleArea>
            <div style={{ padding: "30px" }}>
              <Custominput
                placeholder="ex) 최고를 위해 늘 성실하게 최선을 다 합니다."
                maxLength={30}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </FormWrapper>
          <FormWrapper>
            <TitleArea>
              <Title>기본 정보</Title>
            </TitleArea>
            <UserInfoArea>
              <div>
                <input type="file" id="imgUpload" style={{ display: "none" }} onChange={imageSelectHandler} accept="image/jpg, image/jpeg, image/png"></input>
                <label htmlFor="imgUpload">
                  <ThumbnailArea>
                    <img src={fileImage === "" ? photo : fileImage} alt="이미지 등록하기" />
                  </ThumbnailArea>
                </label>
              </div>
              <div style={{ width: "80%" }}>
                <div className="info-area" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 style={{ width: "80px" }}>이름</h1>
                    <CustomEditinput placeholder="이름을 입력하세요." maxLength={30} value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 style={{ width: "80px" }}>이메일</h1>
                    <CustomEditinput placeholder="이메일을 입력하세요." maxLength={30} value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 style={{ width: "80px" }}>Social Url</h1>
                    <CustomEditinput placeholder="Socual Url을 입력하세요." maxLength={30} value={socialUrl} onChange={(e) => setSocialUrl(e.target.value)} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <h1 style={{ width: "80px" }}>TechStack</h1>
                    <div style={{ marginLeft: "15px", width: "100%" }}>
                      <Select value={job} options={JOB_GROUP} formatOptionLabel={formatOptionLabel} onChange={jobHandler} />
                    </div>
                  </div>
                </div>
              </div>
            </UserInfoArea>
          </FormWrapper>
          <FormWrapper>
            <TitleArea>
              <Title>이력서 URL</Title>
              <SubTitle>∙ 로그인이 필요한 URL은 기업 담당자의 확인이 어려울 수 있으니 미리 확인바랍니다.</SubTitle>
            </TitleArea>
            <div style={{ padding: "30px" }}>
              <Custominput placeholder="http://" value={url} onChange={(e) => setUrl(e.target.value)} />
            </div>
          </FormWrapper>
          <FormWrapper>
            <TitleArea>
              <Title>학력사항</Title>
            </TitleArea>
            <EduArea>
              <div className="edu-selector">
                <Select defaultValue={EDUCATION_GROUP[0]} options={EDUCATION_GROUP} formatOptionLabel={formatOptionLabel} onChange={userTypeHandler} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <CheckBoxBtn onClick={() => setEducationStatus(0)}>
                    {educationStatus === 0 && <img src={checkImg} alt="aa" style={{ width: "100%" }} />}
                  </CheckBoxBtn>
                  <p>졸업 예정</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <CheckBoxBtn onClick={() => setEducationStatus(1)}>
                    {educationStatus === 1 && <img src={checkImg} alt="aa" style={{ width: "100%" }} />}
                  </CheckBoxBtn>
                  <p>졸업</p>
                </div>
              </div>
            </EduArea>
          </FormWrapper>
          <FormWrapper>
            <div style={{ display: "flex", alignItems: "end", gap: "25px" }}>
              <Title>경력사항</Title>
            </div>
            <CareerArea>
              <CareerButton onClick={() => setCareerYear(null)}>
                <p className={careerYear === null ? "isSelected" : ""}>신입</p>
              </CareerButton>
              <CareerButton onClick={() => setCareerYear(0)}>
                <p className={careerYear !== null ? "isSelected" : ""}>경력</p>
              </CareerButton>
              {careerYear !== null && (
                <div>
                  <CustomEditinput
                    value={careerYear!}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      if (!isNaN(Number(e.target.value))) {
                        setCareerYear(Number(e.target.value.trim()));
                      }
                    }}
                    placeholder="경력 입력"
                    maxLength={5}
                    style={{ width: "100px", marginLeft: "15px" }}
                  />
                  년
                </div>
              )}
            </CareerArea>
          </FormWrapper>
        </FormArea>
        <SubmitArea>
          <SubmitBtn onClick={submit}>수정하기</SubmitBtn>
        </SubmitArea>
      </Template>
    </Wrapper>
  );
}
