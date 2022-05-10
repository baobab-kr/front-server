import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { Link } from "react-router-dom";
export default function Login(props: any) {
  return (
    <div className="loginPage">
      <div className="bg"></div>
      <div className="login-container">
        <div className="pageTitle">
          <h1 id="logo">바오밥</h1>
        </div>
        <div className="login-content">
          <LoginForm onLogin={props.onLogin} />
        </div>
      </div>
    </div>
  );
}
const LoginForm = (props: any) => {
  const [isEmptyPassword, setEmptyPassword] = React.useState(true);
  const [idErrorStr, setIdError] = React.useState("");
  const [passwordErrorStr, setPasswordError] = React.useState("");
  const handleSubmit = (values: any) => {
    setPasswordError("");
    if (values.username === undefined || values.username === null || values.username.length === 0) {
      setIdError("아이디를 입력해 주세요.");
      return;
    }
    setIdError("");

    const loginRequest = Object.assign({}, values);

    console.log(loginRequest);

    // login(loginRequest)
    //   .then((response: any) => {
    //     if (loginRequest.remember){
    //       localStorage.setItem(ACCESS_TOKEN, response.accessToken);
    //     } else sessionStorage.setItem(ACCESS_TOKEN, response.accessToken);
    //     props.onLogin();
    //   })
    //   .catch((error) => {
    //     if (error.status === 401) {
    //       setPasswordError("아이디 또는 비밀번호가 올바르지 않습니다. 다시 시도하십시오.");
    //       // notification.error({
    //       //   message: "로그인 실패",
    //       //   description:
    //       //     "아이디 또는 비밀번호가 잘못 입력 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.",
    //       // });
    //     } else {
    //       setPasswordError("로그인 실패: 죄송합니다. 다시 시도해주세요.");
    //       // notification.error({
    //       //   message: "로그인 실패",
    //       //   description:
    //       //     error.message || "죄송합니다. 다시 시도해주세요.",
    //       // });
    //     }
    //   });
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 0,
      span: 16,
    },
  };

  const passwordChanged = (e: any) => {
    setEmptyPassword(e.target.value.length == 0 ? true : false);
    // if (e.target.value.length == 0) setPasswordError("")
  };

  return (
    <Form
      //   {...layout}
      name="basic"
      initialValues={{ remember: false }}
      onFinish={handleSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item className="inputForm inputForm_id" name="username" rules={[{ required: false, message: "아이디를 입력해 주세요." }]}>
        <Input placeholder="아이디" size="large" />
      </Form.Item>

      <div>
        <label className="id_error">{idErrorStr}</label>
      </div>

      <Form.Item className="inputForm inputForm_pw" name="password" rules={[{ required: false, message: "비밀번호를 입력해 주세요." }]}>
        <Input.Password placeholder="비밀번호" size="large" onChange={passwordChanged} />
      </Form.Item>

      <div>
        <label className="pwd_error">{passwordErrorStr}</label>
      </div>

      <Button block className="loginBtn" htmlType="submit" size="large" disabled={isEmptyPassword}>
        로그인
      </Button>

      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          {/* <Checkbox className="option">자동 로그인</Checkbox> */}
        </Form.Item>
        <Link className="signup" to="/signup">
          회원가입
        </Link>
      </Form.Item>
    </Form>
  );
};
