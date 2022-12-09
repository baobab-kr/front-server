import React, { Dispatch, SetStateAction, useEffect } from "react";
import Swal from "sweetalert2";
import InputText from "../Custominput/InputText";
import InputFile from "../Custominput/InputFile";
import InputContainer from "../Custominput/InputContainer";
import TemplateSection from "../TemplateSection/TemplateSection";

import { TemplateSectionFooter, InputWrap, LabelArea, CustomButton, InputAreaFooter } from "./style";
import { tStepFirst } from "Types/Business";

type tProps = {
  value: tStepFirst;
  setValue: Dispatch<SetStateAction<tStepFirst>>;
  stepperController: (value: number) => void;
};

export default function StepFirst({ value, setValue, stepperController }: tProps): JSX.Element {
  const setpController = () => {
    if (value.BusinessLicense !== null && value.ManagerEMail !== "" && value.ManagerName !== "" && value.ManagerPhone !== "") {
      stepperController(1);
    } else {
      Swal.fire("정보를 다시 확인해주세요.");
    }
  };

  const fileController = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setValue((v) => {
        return {
          ...v,
          BusinessLicense: e.target.files,
        };
      });
    }
  };

  return (
    <>
      <TemplateSection title="기본 정보" open={true}>
        <InputContainer title="사업자등록증" description="5MB 이하의 PDF, JPG, PNG 파일">
          <InputFile fileController={fileController} />
        </InputContainer>
        <InputContainer title="담당자 성함" description="">
          <div className="input">
            <InputText
              maxLength={30}
              placeholder="성함을 입력해주세요"
              value={value.ManagerName}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, ManagerName: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="담당자 이메일" description="채용 광고 진행 및 리포트가 발송됩니다.">
          <div className="input">
            <InputText
              maxLength={60}
              placeholder="이메일을 입력해주세요"
              value={value.ManagerEMail}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, ManagerEMail: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>

        <InputContainer title="담당자 연락처" description="">
          <div className="input">
            <InputText
              maxLength={50}
              placeholder="연락처를 입력해주세요"
              value={value.ManagerPhone}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue((v) => {
                  return { ...v, ManagerPhone: e.target.value };
                })
              }
            />
          </div>
        </InputContainer>
      </TemplateSection>
      <TemplateSectionFooter>
        <InputWrap>
          <LabelArea>
            <label></label>
            <span className="info">기업 서비스 약관에 동의하면 계속 진행해주세요.</span>
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
