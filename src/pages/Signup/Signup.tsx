import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ID_MIN_LENGTH, ID_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from "../../constants/index";

import { Form, Input, Button, notification, Select } from "antd";
import { checkUsername, checkId, emailRegisterCode, users_register } from "../../api/signup";

const Signup = () => {
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
  const [emailCode, setEmailCode] = useState({
    value: 0,
    validateStatus: "success",
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

  const [idOverlap, setIdOverlap] = useState(false);
  const [nameOverlap, setNameOverlap] = useState(false);
  const [emailOverlap, setEmailOverlap] = useState(false);

  const changeInput = (event: any) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    console.log(inputName);
    switch (inputName) {
      case "name":
        console.log(inputValue);
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
    console.log(signupRequest);
    users_register(signupRequest)
      .then((response) => {
        console.log("회원가입 성공");
      })
      .catch((error) => {
        console.log(error);
        console.log("회원가입 실패");
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
    console.log();
    if (idValidation.validateStatus === "error") {
      setName({ value: idValue, validateStatus: idValidation.validateStatus, errorMsg: idValidation.errorMsg === null ? "" : idValidation.errorMsg });
      return;
    }
    setName({ value: idValue, validateStatus: "success", errorMsg: "" });
  };

  const validateEmailAvailability = (email: any) => {
    const emailValue = email.target.value;
    const emailValidation = validateEmail(emailValue);
    console.log();
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
        console.log(data + "______name");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkedId = async (ids: any) => {
    await checkId(ids.value)
      .then((data) => {
        console.log(data + "______id");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const registerCode = async (name: any, emails: any) => {
    console.log(emails.value);
    await emailRegisterCode(name.value, emails.value)
      .then((data) => {
        console.log(data + "______email_code");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.Signup className="signup">
      <div className="header">
        {/* <Button className="btn_back" onClick={() => props.history.push("/")} /> */}
        <h1 className="title">회원가입</h1>
      </div>
      <S.Body className="body">
        <Form layout={"vertical"} className="signup-form">
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
          <Form.Item>
            <S.signup_form_button type="submit" className="signup-form-button" onClick={handleSubmit} disabled={summitBtnDis()}>
              회원가입
            </S.signup_form_button>
          </Form.Item>
        </Form>
      </S.Body>
    </S.Signup>
  );
};

export default Signup;
