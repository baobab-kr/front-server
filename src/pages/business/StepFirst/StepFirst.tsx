import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Swal from "sweetalert2";
import InputText from "../Custominput/InputText";
import InputFile from "../Custominput/InputFile";
import InputContainer from "../Custominput/InputContainer";
import TemplateSection from "../TemplateSection/TemplateSection";

import { TemplateSectionFooter, InputWrap, LabelArea, CustomButton, InputAreaFooter, LiesenceBtn } from "./style";
import { tStepFirst } from "Types/Business";
import { ntsBusinessman } from "api/jobs";
import { off } from "process";

type tProps = {
  value: tStepFirst;
  setValue: Dispatch<SetStateAction<tStepFirst>>;
  stepperController: (value: number) => void;
};

export default function StepFirst({ value, setValue, stepperController }: tProps): JSX.Element {
  const [isVerification, setIsVerification] = useState<boolean>(false);
  const setpController = () => {
    if (value.BusinessLicense !== null && value.ManagerName !== "" && value.ManagerPhone !== "" && isVerification) {
      stepperController(1);
      setValue((v) => {
        return { ...v, ManagerEMail: "" };
      });
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

  const onlyNumber = (value: any) => {
    if (isNaN(Number(value))) return;
    setValue((v) => {
      return { ...v, ManagerEMail: value };
    });
  };

  const onNtsBusinessman = async () => {
    const result: string = await ntsBusinessman(value.ManagerEMail);
    if (result === "등록된 사업자등록번호") {
      Swal.fire("사업자등록번호", "인증이 완료되었습니다.", "success");
      setIsVerification(true);
    } else {
      Swal.fire("사업자등록번호", "인증되지 않은 사업자등록번호입니다.", "error");
      setIsVerification(false);
    }
  };

  return (
    <>
      <TemplateSection title="기본 정보" open={true}>
        <InputContainer title="사업자등록증" description="5MB 이하의 JPG, PNG 파일">
          <InputFile fileController={fileController} />
        </InputContainer>

        <InputContainer title="사업자 등록번호" description="사업자 등록번호를 '-'없이 입력">
          <div className="input" style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <InputText
              maxLength={60}
              placeholder="사업자 등록번호를 입력해주세요"
              value={value.ManagerEMail}
              setValue={(e: React.ChangeEvent<HTMLInputElement>) => onlyNumber(e.target.value)}
            />
            {!isVerification && <LiesenceBtn onClick={onNtsBusinessman}>검증</LiesenceBtn>}
            {isVerification && <LiesenceBtn>완료</LiesenceBtn>}
          </div>
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
