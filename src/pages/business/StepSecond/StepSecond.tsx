import React, { useState, Dispatch, SetStateAction } from "react";
import Swal from "sweetalert2";

import InputText from "../Custominput/InputText";
import InputFile from "../Custominput/InputFile";
import CustomTextarea from "../Custominput/CustomTextarea";
import InputContainer from "../Custominput/InputContainer";
import TemplateSection from "../TemplateSection/TemplateSection";

import { TemplateSectionFooter, InputWrap, LabelArea, CustomButton, InputAreaFooter, BackButton, CheckBoxBtn } from "./style";
import { tStepSecond } from "Types/Business";
import { AiFillLeftCircle } from "react-icons/ai";
import LocationSelector from "components/LocationSelector/LocationSelector";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

import checkImg from "../../../assets/selected.png";

type tProps = {
  value: tStepSecond;
  setValue: Dispatch<SetStateAction<tStepSecond>>;
  stepperController: (value: number) => void;
};

export default function StepSecond({ value, setValue, stepperController }: tProps): JSX.Element {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [isDate, setIsDate] = useState<boolean>(true);

  const logoFileController = (e: React.ChangeEvent<HTMLInputElement>) => {};
  const imageFileController = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const setpController = () => {
    // if (value.BusinessLicense !== null && value.ManagerEMail !== "" && value.ManagerName !== "" && value.ManagerPhone !== "" && value.URL !== "") {
    //   stepperController(1);
    // } else {
    //   Swal.fire("정보를 다시 확인해주세요.");
    // }
    stepperController(1);
  };

  const backController = () => {
    stepperController(-1);
  };

  const locationHandler = (locaton: string) => {
    setValue((v) => {
      return { ...v, Location: locaton };
    });
  };

  const ExampleCustomInput = React.forwardRef(({ value, onClick }: any, ref: any) => (
    <button style={{ color: "white" }} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <>
      <TemplateSection title="필수 정보" open={true}>
        <InputContainer title="채용 분야" description="">
          <div className="input">
            <InputText
              maxLength={60}
              placeholder="채용분야를 입력해주세요"
              value={value.Field}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Field: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="채용 제목" description="">
          <div className="input">
            <InputText
              maxLength={60}
              placeholder="채용분야를 입력해주세요"
              value={value.Title}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Title: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="회사 로고" description="">
          <InputFile fileController={logoFileController} />
        </InputContainer>

        <InputContainer title="채용 이미지" description="">
          <InputFile fileController={imageFileController} />
        </InputContainer>

        <InputContainer title="회사명" description="">
          <div className="input">
            <InputText
              maxLength={60}
              placeholder="예) Baobab Company"
              value={value.CompanyName}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, CompanyName: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="근무 지역" description="">
          <div className="input">
            {/* <InputText
              maxLength={60}
              placeholder="예) 경기도 시흥시"
              value={value.Location}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Location: e.target.value };
                })
              }
            /> */}
            <LocationSelector setValue={locationHandler} />
          </div>
        </InputContainer>

        <InputContainer
          title="채용 한줄 홍보 메시지"
          description={"소개·연봉·복지 등 짧게 홍보할 수 있는 문구를 입력해주세요. \n최대 30자까지 입력 할 수 있어요."}
        >
          <div className="input">
            <InputText
              maxLength={60}
              placeholder="예) 연봉 상위 10%"
              value={value.Message}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Message: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="채용 설명" description="최대 100자 / 4줄 이내로 입력해주세요.">
          <div className="input">
            <CustomTextarea
              maxLength={100}
              placeholder="예) 우리 모두에게 필요한 커리어 플랫폼을 함께 만들어 가실 새로운 팀원을 기다립니다. 관심 있으신 분이라면 누구든지 환영해요. 😊"
              value={value.Description}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Description: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="경력 여부" description="">
          <div className="input">
            <InputText
              maxLength={60}
              placeholder="예) 신입"
              value={value.Type}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Type: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="채용 기간" description="">
          <div className="input">
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <CheckBoxBtn onClick={() => setIsDate(true)}>{isDate && <img src={checkImg} alt="aa" style={{ width: "100%" }} />}</CheckBoxBtn>
                <p>상시 채용</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <CheckBoxBtn onClick={() => setIsDate(false)}>{!isDate && <img src={checkImg} alt="aa" style={{ width: "100%" }} />}</CheckBoxBtn>
                <p>채용 기간 설정</p>
              </div>
            </div>

            {!isDate && (
              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  padding: "15px",
                  border: "1px solid #35363b",
                  borderRadius: "9px",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date!)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="yyyy년 MM월 dd일"
                    locale={ko}
                    customInput={<ExampleCustomInput />}
                  />
                </div>
                <div style={{ width: "10px", height: "2px", background: "#35363b" }}></div>
                <div>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date!)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    dateFormat="yyyy년 MM월 dd일"
                    locale={ko}
                    customInput={<ExampleCustomInput />}
                  />
                </div>
              </div>
            )}
          </div>
        </InputContainer>

        <InputContainer title="인재상" description="회사에 필요한 인재상을 적어주세요.">
          <div className="input" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <InputText
              maxLength={60}
              placeholder="예) 신입"
              value={value.Type}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Type: e.target.value };
                })
              }
            />
            <InputText
              maxLength={60}
              placeholder="예) 신입"
              value={value.Type}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Type: e.target.value };
                })
              }
            />
            <InputText
              maxLength={60}
              placeholder="예) 신입"
              value={value.Type}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, Type: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>
      </TemplateSection>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <TemplateSection title="추가 정보" open={false}>
          <InputContainer title="연봉 테이블" description="">
            <div className="input" style={{ display: "flex", alignItems: "center", gap: "15px" }}>
              <InputText
                maxLength={60}
                placeholder="예) 3800"
                value={value.Salary}
                setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue((v) => {
                    return { ...v, Salary: e.target.value };
                  })
                }
              />
              <p>만원</p>
            </div>
          </InputContainer>

          <InputContainer title="소개 URL" description="">
            <div className="input">
              <InputText
                maxLength={60}
                placeholder="https://www.notion.so/baobab-tree/Baobab-661df2d661204d1b8cfef17797fee76b"
                value={value.InfoURL}
                setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setValue((v) => {
                    return { ...v, InfoURL: e.target.value };
                  })
                }
              />
            </div>
          </InputContainer>
        </TemplateSection>
      </div>
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
              <CustomButton onClick={setpController}>다음</CustomButton>
            </div>
          </InputAreaFooter>
        </InputWrap>
      </TemplateSectionFooter>
    </>
  );
}
