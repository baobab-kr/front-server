import React, { useState, useEffect } from "react";
import { Wrapper, SubTitle, Template, FormArea, FormWrapper, Title, Custominput, CustomEditinput, SubmitArea, SubmitBtn, CareerButton } from "./style";
import Select from "react-select";
import photo from "assets/bg_photo_default.png";

const formatOptionLabel = ({ value, label }: tProps) => (
  <div style={{ display: "flex", color: "black" }}>
    <div>{label}</div>
  </div>
);

export const EDUCATION_GROUP = [
  { value: "CODE_0", label: "중학교" },
  { value: "CODE_1", label: "고등학교" },
  { value: "CODE_2", label: "전문학사" },
  { value: "CODE_3", label: "학사" },
  { value: "CODE_4", label: "석사" },
  { value: "CODE_5", label: "박사" },
];
type tProps = { value: string; label: string };

export default function ApplyJob(): JSX.Element {
  const [education, setEducation] = useState<string>(EDUCATION_GROUP[0].value);

  const userTypeHandler = (props: any) => {
    setEducation(props.value);
  };

  return (
    <Wrapper>
      <Template>
        <FormArea>
          <FormWrapper>
            <div style={{ display: "flex", alignItems: "end", gap: "25px" }}>
              <Title>이력서 제목</Title>
              <SubTitle>∙ 최대 30자 까지 입력할 수 있습니다.</SubTitle>
            </div>
            <div style={{ padding: "30px" }}>
              <Custominput placeholder="ex) 최고를 위해 늘 성실하게 최선을 다 합니다." maxLength={30} />
            </div>
          </FormWrapper>
          <FormWrapper>
            <div style={{ display: "flex", alignItems: "end", gap: "25px" }}>
              <Title>기본 정보</Title>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "25px" }}>
              <div>
                <img src={photo} alt="photosdasd" />
              </div>
              <div>
                <div style={{ padding: "30px", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
                    <h1 style={{ width: "80px" }}>이메일</h1>
                    <CustomEditinput placeholder="이메일을 입력하세요." maxLength={30} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
                    <h1 style={{ width: "80px" }}>휴대폰</h1>
                    <CustomEditinput placeholder="휴대폰을 입력하세요." maxLength={30} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
                    <h1 style={{ width: "80px" }}>전화번호</h1>
                    <CustomEditinput placeholder="전화번호를 입력하세요." maxLength={30} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
                    <h1 style={{ width: "80px" }}>주소</h1>
                    <CustomEditinput placeholder="주소를 입력하세요." maxLength={30} />
                  </div>
                </div>
              </div>
            </div>
          </FormWrapper>
          <FormWrapper>
            <div style={{ display: "flex", alignItems: "end", gap: "25px" }}>
              <Title>이력서 URL</Title>
              <SubTitle>∙ 로그인이 필요한 URL은 기업 담당자의 확인이 어려울 수 있으니 미리 확인바랍니다.</SubTitle>
            </div>
            <div style={{ padding: "30px" }}>
              <Custominput placeholder="http://" maxLength={30} />
            </div>
          </FormWrapper>
          <FormWrapper>
            <div style={{ display: "flex", alignItems: "end", gap: "25px" }}>
              <Title>학력사항</Title>
            </div>
            <div style={{ padding: "30px", display: "flex", alignItems: "center", gap: "25px" }}>
              <div style={{ width: "30%" }}>
                <Select defaultValue={EDUCATION_GROUP[0]} options={EDUCATION_GROUP} formatOptionLabel={formatOptionLabel} onChange={userTypeHandler} />
              </div>
              <input
                type="checkbox"
                name="xxx"
                value="yyy"
                checked={true}
                onChange={() => true}
                style={{ width: "30px", height: "30px", background: "white" }}
              />
              {/* <input type="checkbox" /> */}
            </div>
          </FormWrapper>
          <FormWrapper>
            <div style={{ display: "flex", alignItems: "end", gap: "25px" }}>
              <Title>경력사항</Title>
            </div>
            <div style={{ padding: "30px", display: "flex", alignItems: "center" }}>
              <CareerButton style={{ backgroundColor: "#448fff" }}>신입</CareerButton>
              <CareerButton>경력</CareerButton>
            </div>
          </FormWrapper>
        </FormArea>
        <SubmitArea>
          <SubmitBtn>지원하기</SubmitBtn>
        </SubmitArea>
      </Template>
    </Wrapper>
  );
}
