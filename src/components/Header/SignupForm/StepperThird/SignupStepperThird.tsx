import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { StepperThird, InputWrapper, CustomInput, ConfirmButton } from "./style";
import { checkEmail, emailRegisterCode } from "../../../../api/signup";
import Swal from "sweetalert2";

type tProps = {
  name: string;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  emailCode: string;
  setEmailCode: Dispatch<SetStateAction<string>>;
};
export default function SignupStepperThird({ name, email, setEmail, emailCode, setEmailCode }: tProps): JSX.Element {
  const [emailError, setEmailError] = useState<boolean>(false);

  const sendVaildEmail = async () => {
    if (emailError === false) {
      await checkEmail(email)
        .then(async (data) => {
          await emailRegisterCode(name, email).then(() => {
            Swal.fire("이메일로 코드가 전송되었습니다.");
          });
        })
        .catch((err) => {
          setEmailError(true);
          setEmail("");
          Swal.fire("이메일이 중복되었습니다.");
        });
    } else {
      Swal.fire("이메일을 다시 입력해주세요.");
    }
  };

  const showError = (error: boolean) => {
    return error ? "red" : "transparent";
  };

  useEffect(() => {
    if (!/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }, [email]);

  return (
    <StepperThird>
      <div style={{ marginTop: "15px" }}>
        <InputWrapper>
          <CustomInput placeholder="EMAIL" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <ConfirmButton onClick={sendVaildEmail}>전송</ConfirmButton>
        </InputWrapper>
        <p style={{ marginTop: "15px", marginLeft: "5px", color: showError(emailError), fontSize: "0.825rem" }}>잘못된 이메일 입니다.</p>
      </div>
      <div>
        <InputWrapper>
          <CustomInput style={{ width: "100%" }} placeholder="인증 코드" type="number" value={emailCode} onChange={(e) => setEmailCode(e.target.value)} />
        </InputWrapper>
      </div>
    </StepperThird>
  );
}
