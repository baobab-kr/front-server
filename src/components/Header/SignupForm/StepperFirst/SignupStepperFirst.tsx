import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InputWrapper, CustomInput, ConfirmButton, StepperFirst, VisibilityBtnArea } from "./style";
import { ID_MIN_LENGTH, ID_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from "constants/index";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
import { checkUsername, checkId, emailRegisterCode, users_register, checkEmail } from "api/signup";
import Swal from "sweetalert2";

type tConfirm = {
  name: boolean;
  id: boolean;
  password: boolean;
  confirmPassword: boolean;
};

type tStepperFirst = {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  id: string;
  setId: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: Dispatch<SetStateAction<string>>;
  confirm: tConfirm;
  setConfirm: Dispatch<SetStateAction<tConfirm>>;
};

type tError = {
  text: string;
  error: boolean;
};

export default function SignupStepperFirst(props: tStepperFirst): JSX.Element {
  const [visibility, setVisibility] = useState<boolean>(false);
  const [cVisibility, setCVisibility] = useState<boolean>(false);
  const [nameErr, setNameErr] = useState<tError>({ text: "", error: false });
  const [idErr, setIDErr] = useState<tError>({ text: "", error: false });
  const [passwordErr, setPasswordErr] = useState<tError>({ text: "", error: false });
  const [cPasswordErr, setCPasswordErr] = useState<tError>({ text: "", error: false });

  useEffect(() => {
    if (props.name.length < 1) {
      setNameErr({ error: true, text: `이름을 입력해주세요` });
    } else if (!/^[ㄱ-ㅎ가-힣A-Za-z0-9+]*$/g.test(props.name)) {
      setNameErr({ error: true, text: `유저 이름은 한글, 영문자, 숫자만 조합할 수 있습니다.` });
    } else {
      setNameErr({ error: false, text: "" });
    }
  }, [props.name]);

  useEffect(() => {
    if (props.id.length < ID_MIN_LENGTH || props.id.length > ID_MAX_LENGTH) {
      setIDErr({ error: true, text: `${ID_MIN_LENGTH}-${ID_MAX_LENGTH}자 이내의 아이디를 입력해 주세요.` });
    } else if (!/^[A-Za-z0-9+]*$/g.test(props.id)) {
      setIDErr({ error: true, text: `아이디는 영문자, 숫자를 조합할 수 있습니다.` });
    } else {
      setIDErr({ error: false, text: "" });
    }
  }, [props.id]);

  useEffect(() => {
    if (props.password.length < PASSWORD_MIN_LENGTH || props.password.length > PASSWORD_MAX_LENGTH) {
      props.setConfirm((c) => {
        return { ...c, password: false };
      });
      setPasswordErr({ error: true, text: `${PASSWORD_MIN_LENGTH}-${PASSWORD_MAX_LENGTH}자 이내의 비밀번호를 입력해 주세요.` });
    } else if (!/(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$)/g.test(props.password)) {
      props.setConfirm((c) => {
        return { ...c, password: false };
      });
      setPasswordErr({
        error: true,
        text: "암호는 대문자, 소문자, 숫자, 특수문자를 반드시 포함해야합니다. 특수문자는 !, @, $, %, *, &만 사용할 수 있습니다.",
      });
    } else {
      props.setConfirm((c) => {
        return { ...c, password: true };
      });
      setPasswordErr({ error: false, text: "" });
    }
  }, [props.password]);

  useEffect(() => {
    if (props.password !== props.confirmPassword) {
      props.setConfirm((c) => {
        return { ...c, confirmPassword: false };
      });
      setCPasswordErr({ error: true, text: "비밀번호가 같지 않습니다." });
    } else {
      props.setConfirm((c) => {
        return { ...c, confirmPassword: true };
      });
      setCPasswordErr({ error: false, text: "" });
    }
  }, [props.confirmPassword]);

  const showError = (error: boolean) => {
    return error ? "red" : "transparent";
  };

  const checkName = async () => {
    if (nameErr.error) return;
    await checkUsername(props.name)
      .then((data) => {
        props.setConfirm((c) => {
          return { ...c, name: true };
        });
      })
      .catch((err) => {
        props.setConfirm((c) => {
          return { ...c, name: false };
        });
        // setName({ value: name.value, validateStatus: "error", errorMsg: "" });

        Swal.fire("이름이 중복되었습니다.");
      });
  };

  const checkedId = async () => {
    if (idErr.error) return;
    await checkId(props.id)
      .then((data: any) => {
        props.setConfirm((c) => {
          return { ...c, id: true };
        });
      })
      .catch((err) => {
        props.setConfirm((c) => {
          return { ...c, id: false };
        });
        Swal.fire("아이디가 중복되었습니다.");
      });
  };

  return (
    <StepperFirst>
      <div>
        <p>NAME</p>
        <InputWrapper>
          <CustomInput placeholder="Name" value={props.name} onChange={(e) => props.setName(e.target.value)} />
          <ConfirmButton
            onClick={() => {
              checkName();
            }}
            disabled={props.confirm.name}
            style={{
              backgroundColor: props.confirm.name ? "white" : "#448fff",
              color: props.confirm.name ? "black" : "white",
            }}
          >
            {props.confirm.name ? "사용 가능" : "확인"}
          </ConfirmButton>
        </InputWrapper>
        <p className="error" style={{ marginLeft: "5px", color: showError(nameErr.error) }}>
          {nameErr.text}
        </p>
      </div>
      <div>
        <p>ID</p>
        <InputWrapper>
          <CustomInput placeholder="ID" value={props.id} onChange={(e) => props.setId(e.target.value)} />
          <ConfirmButton
            onClick={() => {
              checkedId();
            }}
            disabled={props.confirm.id}
            style={{
              backgroundColor: props.confirm.id ? "white" : "#448fff",
              color: props.confirm.id ? "black" : "white",
            }}
          >
            {props.confirm.id ? "사용 가능" : "확인"}
          </ConfirmButton>
        </InputWrapper>
        <p className="error" style={{ marginLeft: "5px", color: showError(idErr.error) }}>
          {idErr.text}
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <p>PASSWORD</p>
        <InputWrapper>
          <CustomInput
            style={{ width: "100%" }}
            type={!visibility ? "password" : "text"}
            placeholder="Password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
        </InputWrapper>
        <VisibilityBtnArea>
          {visibility && <MdVisibility onClick={() => setVisibility(false)} size="24" />}
          {!visibility && <MdVisibilityOff onClick={() => setVisibility(true)} size="24" />}
        </VisibilityBtnArea>
        <p className="error" style={{ marginLeft: "5px", color: showError(passwordErr.error) }}>
          {passwordErr.text}
        </p>
      </div>

      <div style={{ position: "relative" }}>
        <p>CONFIRM PASSWORD</p>
        <InputWrapper>
          <CustomInput
            style={{ width: "100%" }}
            type={!cVisibility ? "password" : "text"}
            placeholder="confirmPassword"
            value={props.confirmPassword}
            onChange={(e) => props.setConfirmPassword(e.target.value)}
          />
        </InputWrapper>
        <VisibilityBtnArea>
          {cVisibility && <MdVisibility onClick={() => setCVisibility(false)} size="24" />}
          {!cVisibility && <MdVisibilityOff onClick={() => setCVisibility(true)} size="24" />}
        </VisibilityBtnArea>
        <p className="error" style={{ marginLeft: "5px", color: showError(cPasswordErr.error) }}>
          {cPasswordErr.text}
        </p>
      </div>
    </StepperFirst>
  );
}
