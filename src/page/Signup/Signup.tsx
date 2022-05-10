import React, { useState, useEffect } from "react";
import * as S from "./style";
import { ID_MIN_LENGTH, ID_MAX_LENGTH, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH } from "../../constants/index";

import { Form, Input, Button, notification, Select } from "antd";
// import { checkUsernameAvailability, signup } from "src/util/APIUtils";

// import "./Signup.scss";

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
  const [phone, setPhone] = useState({
    value: "",
    validateStatus: "",
    errorMsg: "",
  });

  // const [promise, setPromise] = useState();

  const changeInput = (event: any) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;
    switch (inputName) {
      case "name":
        console.log(inputValue);
        setName(inputValue);
        break;
      case "email":
        setEmail(inputValue);
        break;
      case "id":
        setId(inputValue);
        break;
      case "password":
        setPassword(inputValue);
        break;
      case "phone":
        console.log("phone");
        setPhone(inputValue);
        break;
      default:
        console.log("404 check input Id");
    }
  };

  const handleSubmit = () => {
    const signupRequest = {
      name: name.value,
      id: id.value,
      password: password.value,
      email: email.value,
      phone: phone ? phone : "",
    };
    console.log(signupRequest);
    // signup(signupRequest)
    //   .then((response) => {
    //     notification.success({
    //       message: "",
    //       description: "회원가입 성공! 로그인을 진행해 주세요.",
    //     });
    //     props.history.push("/");
    //   })
    //   .catch((error) => {
    //     notification.error({
    //       message: "회원가입 오류",
    //       description: "죄송합니다. 다시 시도해주세요.",
    //     });
    //   });
  };

  const validateEmail = () => {
    // if (name.length < NAME_MIN_LENGTH) {
    //   return {
    //     validateStatus: "error",
    //     errorMsg: `Email is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`,
    //   };
    // } else if (name.length > NAME_MAX_LENGTH) {
    //   return {
    //     validationStatus: "error",
    //     errorMsg: `Email is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`,
    //   };
    // } else {
    //   return {
    //     // validateStatus: "success",
    //     errorMsg: null,
    //   };
    // }
  };

  const validateId = (id: string) => {
    console.log(id + "validateId");
    if (id.length < ID_MIN_LENGTH || id.length > ID_MAX_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `${ID_MIN_LENGTH}-${ID_MAX_LENGTH}자 이내의 아이디를 입력해 주세요.`,
      };
    } else if (!/(^[A-Za-z0-9._-]+$)/g.test(id)) {
      return {
        validateStatus: "error",
        errorMsg: `영문(A-z), 숫자(0-9)와 특수문자(., -, _)만 입력 가능합니다.`,
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
  };

  const validateIdAvailability = (id: any) => {
    // First check for client side errors in id
    console.log(id.target.value);
    const idValue = id.target.value;
    const idValidation = validateId(idValue);

    if (idValidation.validateStatus === "error") {
      setId({ value: idValue, validateStatus: idValidation.validateStatus, errorMsg: idValidation.errorMsg === null ? "" : idValidation.errorMsg });
      return;
    }

    setId({ value: idValue, validateStatus: "validating", errorMsg: "" });

    // checkUsernameAvailability(usernameValue)
    //   .then((response) => {
    //     if (response.available) {
    //       setUsername({
    //         value: usernameValue,
    //         validateStatus: "success",
    //         errorMsg: null,
    //       });
    //     } else {
    //       setUsername({
    //         value: usernameValue,
    //         validateStatus: "error",
    //         errorMsg: "이미 사용중인 아이디 입니다",
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     // Marking validateStatus as success, Form will be recchecked at server
    //     setUsername({
    //       value: usernameValue,
    //       validateStatus: "success",
    //       errorMsg: null,
    //     });
    //   });
  };

  const validatePassword = (password: string) => {
    if (password.length < PASSWORD_MIN_LENGTH || password.length > PASSWORD_MAX_LENGTH) {
      return {
        validateStatus: "error",
        errorMsg: `${PASSWORD_MIN_LENGTH}-${PASSWORD_MAX_LENGTH}자 이내의 비밀번호를 입력해 주세요.`,
      };
    } else {
      return {
        validateStatus: "success",
        errorMsg: null,
      };
    }
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

  return (
    <S.Signup className="signup">
      <div className="header">
        {/* <Button className="btn_back" onClick={() => props.history.push("/")} /> */}
        <h1 className="title">회원가입</h1>
      </div>
      <S.Body className="body">
        <Form layout={"vertical"} onFinish={handleSubmit} onFinishFailed={onFinishFailed} className="signup-form">
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
              // onBlur={this.validateUsernameAvailability}
              onChange={changeInput}
            />
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
              spellCheck="false"
              maxLength={PASSWORD_MAX_LENGTH}
              // placeholder="A password between 6 to 20 characters"
              value={password.value}
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
              // placeholder="A unique email"
              value={email.value}
              // onBlur={this.validateUsernameAvailability}
              onChange={changeInput}
            />
          </Form.Item>
          <Form.Item label="휴대전화" validateStatus={phone.validateStatus ? "" : ""} help={phone.errorMsg}>
            <Input
              size="large"
              name="phone"
              autoComplete="off"
              spellCheck="false"
              // placeholder="Phone number"
              value={phone.value}
              onChange={changeInput}
            />
          </Form.Item>
          <Form.Item>
            <S.signup_form_button type="submit" className="signup-form-button">
              회원가입
            </S.signup_form_button>
          </Form.Item>
        </Form>
      </S.Body>
    </S.Signup>
  );
};

export default Signup;
