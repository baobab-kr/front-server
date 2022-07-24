import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ID_MIN_LENGTH, ID_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from "../../constants/index";

import { Form, Input, Button, notification, Select } from "antd";
import { checkUsername, checkId, emailRegisterCode, users_register, checkEmail } from "../../api/signup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = (props: any) => {
  const Navigate = useNavigate();
  const [signIdx, setSignIdx] = useState(0);
  const [name, setName] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
  });
  const [email, setEmail] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
  });
  const [id, setId] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
  });
  const [password, setPassword] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
  });
  const [rePassword, setRePassword] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
  });
  const [emailCode, setEmailCode] = useState({
    value: "",
    validateStatus: "error",
    errorMsg: "",
  });

  const summitBtnDis = () => {
    return !(
      name.validateStatus === "success" &&
      email.validateStatus === "success" &&
      id.validateStatus === "success" &&
      password.validateStatus === "success" &&
      emailCode.validateStatus === "success"
    );
  };

  const idNameBtnDis = () => {
    return !(name.validateStatus === "success" && id.validateStatus === "success");
  };
  const passwordBtnDis = () => {
    return !(password.validateStatus === "success" && rePassword.validateStatus === "success");
  };

  const [isId, setIsId] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const changeInput = (event: any) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    switch (inputName) {
      case "name":
        setName({ value: inputValue, validateStatus: "", errorMsg: "" });
        break;
      case "emailCode":
        setEmailCode({ value: inputValue, validateStatus: "success", errorMsg: "" });
        break;
      case "email":
        setEmail({ value: inputValue, validateStatus: "", errorMsg: "" });
        break;
      case "id":
        setId({ value: inputValue, validateStatus: "", errorMsg: "" });
        break;
      case "password":
        setPassword({ value: inputValue, validateStatus: "", errorMsg: "" });
        break;
      case "rePassword":
        setRePassword({ value: inputValue, validateStatus: "", errorMsg: "" });
        break;
      default:
        console.log("404 check input Id");
    }
  };

  const handleSubmit = () => {
    const signupRequest = {
      userid: id.value,
      email: email.value,
      username: name.value,
      password: password.value,
      inputVerifyCode: emailCode.value,
    };
    users_register(id.value, email.value, name.value, password.value, emailCode.value)
      .then((response) => {
        Swal.fire("회원가입 되었습니다.");
        Navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("회원가입에 실패했습니다.");
      });
  };

  const validateId = (id: string) => {
    if (id.length < ID_MIN_LENGTH || id.length > ID_MAX_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `${ID_MIN_LENGTH}-${ID_MAX_LENGTH}자 이내의 아이디를 입력해 주세요.`,
      };
    } else if (!/^[A-Za-z0-9+]*$/g.test(id)) {
      return {
        validateStatus: "error",
        errorMsg: `아이디는 영문자, 숫자를 조합할 수 있습니다.`,
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };
  const validateName = (name: string) => {
    if (name.length < 1) {
      return {
        validateStatus: "error",
        errorMsg: `이름을 입력해주세요`,
      };
    } else if (!/^[ㄱ-ㅎ가-힣A-Za-z0-9+]*$/g.test(name)) {
      return {
        validateStatus: "error",
        errorMsg: `유저 이름은 한글, 영문자, 숫자만 조합할 수 있습니다.`,
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };
  const validatePassword = (pwd: string) => {
    if (pwd.length < PASSWORD_MIN_LENGTH || pwd.length > PASSWORD_MAX_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `${PASSWORD_MIN_LENGTH}-${PASSWORD_MAX_LENGTH}자 이내의 비밀번호를 입력해 주세요.`,
      };
    } else if (!/(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$)/g.test(pwd)) {
      return {
        validateStatus: "error",
        errorMsg: "암호는 대문자, 소문자, 숫자, 특수문자를 조합하여야 합니다. 특수문자는 !, @, $, %, *, &만 사용할 수 있습니다.",
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };

  const validateRePassword = (pwd: string) => {
    if (pwd !== password.value) {
      return {
        validateStatus: "error",
        errorMsg: "비밀번호가 같지 않습니다.",
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };

  const validateEmail = (emails: string) => {
    if (!/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/g.test(emails)) {
      return {
        validateStatus: "error",
        errorMsg: "잘못된 이메일 입니다.",
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };

  const validateUsernameAvailability = (name: any) => {
    const idValue = name.target.value;
    const idValidation = validateName(idValue);
    if (idValidation.validateStatus === "error") {
      setName({ value: idValue, validateStatus: idValidation.validateStatus, errorMsg: idValidation.errorMsg === null ? "" : idValidation.errorMsg });
      return;
    }
    setName({ value: idValue, validateStatus: "success", errorMsg: "" });
  };

  const validateEmailAvailability = (email: any) => {
    const emailValue = email.target.value;
    const emailValidation = validateEmail(emailValue);
    if (emailValidation.validateStatus === "error") {
      setEmail({
        value: emailValue,
        validateStatus: emailValidation.validateStatus,
        errorMsg: emailValidation.errorMsg === null ? "" : emailValidation.errorMsg,
      });
      return;
    }
    setEmail({ value: emailValue, validateStatus: "success", errorMsg: "" });
  };
  const validatePasswordAvailability = (pwd: any) => {
    const pwdValue = pwd.target.value;
    const pwdValidation = validatePassword(pwdValue);

    if (pwdValidation.validateStatus === "error") {
      setPassword({ value: pwdValue, validateStatus: pwdValidation.validateStatus, errorMsg: pwdValidation.errorMsg === null ? "" : pwdValidation.errorMsg });
      return;
    }

    setPassword({ value: pwdValue, validateStatus: "success", errorMsg: "" });
  };

  const validateRePasswordAvailability = (rePwd: any) => {
    const rePwdValue = rePwd.target.value;
    const rePwdValidation = validateRePassword(rePwdValue);

    if (rePwdValidation.validateStatus === "error") {
      setRePassword({
        value: rePwdValue,
        validateStatus: rePwdValidation.validateStatus,
        errorMsg: rePwdValidation.errorMsg === null ? "" : rePwdValidation.errorMsg,
      });
      return;
    }

    setRePassword({ value: rePwdValue, validateStatus: "success", errorMsg: "" });
  };

  const validateIdAvailability = (id: any) => {
    const idValue = id.target.value;
    const idValidation = validateId(idValue);

    if (idValidation.validateStatus === "error") {
      setId({ value: idValue, validateStatus: idValidation.validateStatus, errorMsg: idValidation.errorMsg === null ? "" : idValidation.errorMsg });
      return;
    }

    setId({ value: idValue, validateStatus: "success", errorMsg: "" });
  };

  const onFinishFailed = (values: any) => {
    if (values.values.name === undefined) {
      setName({ value: "", validateStatus: "error", errorMsg: "" });
    }
    if (values.values.email === undefined) {
      setEmail({ value: "", validateStatus: "error", errorMsg: "" });
    }
    if (values.values.username === undefined) {
      setId({ value: "", validateStatus: "error", errorMsg: "" });
    }
    if (values.values.password === undefined) {
      setPassword({ value: "", validateStatus: "error", errorMsg: "" });
    }
  };

  const checkName = async (names: any) => {
    await checkUsername(names.value)
      .then((data) => {
        setIsName(true);
        console.log(data);
      })
      .catch((err) => {
        setIsName(false);
        setName({ value: name.value, validateStatus: "error", errorMsg: "" });

        Swal.fire("이름이 중복되었습니다.");
      });
  };

  const checkedId = async (ids: any) => {
    await checkId(ids.value)
      .then((data: any) => {
        setIsId(true);
        console.log(data);
      })
      .catch((err) => {
        setIsName(false);
        setId({ value: id.value, validateStatus: "error", errorMsg: "" });
        Swal.fire("아이디가 중복되었습니다.");
      });
  };

  const registerCode = async (name: any, emails: any) => {
    await checkEmail(emails.value)
      .then(async (data) => {
        Swal.fire("이메일로 코드가 전송되었습니다.");
        setIsEmail(true);
        await emailRegisterCode(name.value, emails.value)
          .then((data) => {
            console.log(data + "______email_code");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        setIsEmail(false);
        setEmail({ value: email.value, validateStatus: "error", errorMsg: "" });
        Swal.fire("이메일이 중복되었습니다.");
      });
  };
  const onClickEv = () => {
    props.changeIsLogin();
  };

  return (
    <S.Signup className="signup">
      <S.Body className="body">
        <Form layout={"vertical"} className="signup-form">
          {signIdx === 0 ? (
            <>
              <Form.Item
                label="이름"
                name="name"
                hasFeedback
                validateStatus={name.validateStatus === "" ? "" : name.validateStatus === "success" ? "success" : "error"}
                help={name.errorMsg}
                rules={[{ required: true, message: "이름을 입력해 주세요" }]}
              >
                <Input
                  size="large"
                  name="name"
                  autoComplete="off"
                  spellCheck="false"
                  // placeholder="A unique email"
                  value={name.value}
                  onBlur={validateUsernameAvailability}
                  onChange={changeInput}
                />
                <button className="nameBtn" onClick={() => checkName(name)}>
                  중복 확인
                </button>
              </Form.Item>
              <Form.Item
                label="아이디"
                name="id"
                hasFeedback
                validateStatus={id.validateStatus === "" ? "" : id.validateStatus === "success" ? "success" : "error"}
                help={id.errorMsg}
                rules={[{ required: true, message: "아이디를 입력해 주세요" }]}
              >
                <Input
                  size="large"
                  name="id"
                  autoComplete="off"
                  spellCheck="false"
                  maxLength={ID_MAX_LENGTH}
                  // placeholder="A unique id"
                  value={id.value}
                  onBlur={validateIdAvailability}
                  onChange={changeInput}
                />
                <button className="idBtn" onClick={() => checkedId(id)}>
                  중복 확인
                </button>
              </Form.Item>
              <S.next_form_button type="submit" className="signup-form-button" onClick={() => setSignIdx(1)} disabled={idNameBtnDis()}>
                다음
              </S.next_form_button>
            </>
          ) : signIdx === 1 ? (
            <>
              <Form.Item
                label="비밀번호"
                name="password"
                hasFeedback
                validateStatus={password.validateStatus === "" ? "" : password.validateStatus === "success" ? "success" : "error"}
                help={password.errorMsg}
                rules={[{ required: true, message: "비밀번호를 입력해 주세요" }]}
              >
                <Input.Password
                  size="large"
                  name="password"
                  type="password"
                  autoComplete="off"
                  spellCheck="true"
                  maxLength={PASSWORD_MAX_LENGTH}
                  // placeholder="A password between 6 to 20 characters"
                  value={password.value}
                  onBlur={validatePasswordAvailability}
                  onChange={changeInput}
                />
              </Form.Item>
              <Form.Item
                label="Re비밀번호"
                name="rePassword"
                hasFeedback
                validateStatus={rePassword.validateStatus === "" ? "" : rePassword.validateStatus === "success" ? "success" : "error"}
                help={rePassword.errorMsg}
                rules={[{ required: true, message: "비밀번호를 다시 입력해 주세요" }]}
              >
                <Input.Password
                  size="large"
                  name="rePassword"
                  type="rePassword"
                  autoComplete="off"
                  spellCheck="true"
                  maxLength={PASSWORD_MAX_LENGTH}
                  value={rePassword.value}
                  onBlur={validateRePasswordAvailability}
                  onChange={changeInput}
                />
              </Form.Item>
              <S.next_form_button type="submit" className="signup-form-button" onClick={() => setSignIdx(2)} disabled={passwordBtnDis()}>
                다음
              </S.next_form_button>
            </>
          ) : signIdx === 2 ? (
            <>
              <Form.Item
                label="Email"
                name="email"
                hasFeedback
                validateStatus={email.validateStatus === "" ? "" : email.validateStatus === "success" ? "success" : "error"}
                help={email.errorMsg}
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "이메일을 입력해 주세요",
                  },
                ]}
              >
                <Input
                  size="large"
                  name="email"
                  type="email"
                  autoComplete="off"
                  spellCheck="false"
                  value={email.value}
                  onChange={changeInput}
                  onBlur={validateEmailAvailability}
                />
                <button className="emailBtn" onClick={() => registerCode(name, email)}>
                  이메일 인증
                </button>
              </Form.Item>
              <Form.Item
                label="인증코드"
                name="emailCode"
                hasFeedback
                validateStatus={emailCode.validateStatus === "" ? "" : emailCode.validateStatus === "success" ? "success" : "error"}
                help={emailCode.errorMsg}
                rules={[
                  {
                    type: "number",
                    required: true,
                    message: "인증코드를 입력해주세요",
                  },
                ]}
              >
                <Input size="large" name="emailCode" type="number" autoComplete="off" spellCheck="false" value={emailCode.value} onChange={changeInput} />
              </Form.Item>

              <S.signup_form_button type="submit" className="signup-form-button" onClick={handleSubmit} disabled={summitBtnDis()}>
                회원가입
              </S.signup_form_button>
            </>
          ) : null}

          <Form.Item>
            <S.login_form_button type="button" className="login-form-button" onClick={() => onClickEv()}>
              로그인
            </S.login_form_button>
          </Form.Item>
        </Form>
      </S.Body>
    </S.Signup>
  );
};

export default Signup;
