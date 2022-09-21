import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { users_register } from "../../../api/signup";

import { SignupOverlay, SignupContainer, TitleArea, Button, ButtonArea, SiginupArea, SignupWrapper } from "./style";
import Swal from "sweetalert2";

import SignupStepperFirst from "./StepperFirst/SignupStepperFirst";
import SignupStepperSecond from "./StepperSecond/SignupStepperSecond";
import SignupStepperThird from "./StepperThird/SignupStepperThird";
import Stepper from "./Stepper/Stepper";

type tConfirm = {
  name: boolean;
  id: boolean;
  password: boolean;
  confirmPassword: boolean;
};

type tOpen = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function SignupForm({ open, setOpen }: tOpen): JSX.Element {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailCode, setEmailCode] = useState<string>("");
  const [confirm, setConfirm] = useState<tConfirm>({
    name: false,
    id: false,
    password: false,
    confirmPassword: false,
  });

  const [stepper, setStepper] = useState<number>(0);

  const closeOverlay = () => {
    setOpen(false);
  };

  const prevet = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    setConfirm((c) => {
      return { ...c, name: false };
    });
  }, [name]);

  useEffect(() => {
    setConfirm((c) => {
      return { ...c, id: false };
    });
  }, [id]);

  useEffect(() => {
    setConfirm({
      name: false,
      id: false,
      password: false,
      confirmPassword: false,
    });

    setName("");
    setId("");
    setPassword("");
    setConfirmPassword("");

    setStepper(0);
  }, [open]);

  const orderStepper = () => {
    switch (stepper) {
      case 0:
        return (
          <SignupStepperFirst
            name={name}
            setName={setName}
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            confirm={confirm}
            setConfirm={setConfirm}
          />
        );
      case 1:
        return <SignupStepperSecond />;
      case 2:
        return <SignupStepperThird name={name} email={email} setEmail={setEmail} emailCode={emailCode} setEmailCode={setEmailCode} />;
      default:
        return (
          <SignupStepperFirst
            name={name}
            setName={setName}
            id={id}
            setId={setId}
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            confirm={confirm}
            setConfirm={setConfirm}
          />
        );
    }
  };

  const vaildNext = () => {
    if (stepper === 0) {
      console.log(confirm);
      if (!confirm.confirmPassword || !confirm.id || !confirm.name || !confirm.password) {
        Swal.fire("정보를 다시 확인해주세요.");

        return;
      }
    }
    setStepper(Math.min(stepper + 1, 2));
  };

  const vaildPre = () => {
    setStepper(Math.max(stepper - 1, 0));
  };

  const register = () => {
    if (!confirm.confirmPassword || !confirm.id || !confirm.name || !confirm.password || !emailCode) {
      Swal.fire("모든 정보를 입력해주세요.");
      return;
    }

    users_register(id, email, name, password, emailCode)
      .then(() => {
        Swal.fire("회원가입 되었습니다.");
        closeOverlay();
      })
      .catch((error: any) => {
        console.log(error);
        Swal.fire("회원가입에 실패했습니다.");
      });
  };

  return (
    <SignupOverlay open={open} onClick={closeOverlay}>
      <SignupContainer onClick={prevet}>
        <TitleArea>
          <p style={{ fontSize: "45px" }}>회원가입</p>
        </TitleArea>
        <SiginupArea>
          <Stepper step={stepper} />
          <SignupWrapper>{orderStepper()}</SignupWrapper>
          <ButtonArea>
            {stepper !== 0 ? <Button onClick={vaildPre}>이전</Button> : <div></div>}
            {stepper !== 2 ? <Button onClick={vaildNext}>다음</Button> : <div></div>}
            {stepper === 2 ? <Button onClick={register}>회원가입</Button> : <></>}
          </ButtonArea>
        </SiginupArea>
      </SignupContainer>
    </SignupOverlay>
  );
}