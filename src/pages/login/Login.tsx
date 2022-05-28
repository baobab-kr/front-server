import React, { useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { Link, Navigate } from "react-router-dom";
import * as S from "./loginStyle";
import { loginAPI } from "../../api/login";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { USER } from "../../store/store.user";
import API from "../../api";
export default function Login(props: any) {
  return (
    <div className="loginPage">
      <div className="bg"></div>
      <div className="login-container">
        <div className="login-content">
          <LoginForm onLogin={props.onLogin} />
        </div>
      </div>
    </div>
  );
}
const LoginForm = (props: any) => {
  const Navigate = useNavigate();
  const [_, setUserInfo] = useRecoilState(USER);

  const [loginRequest, setLoginRequest] = useState({ id: "", password: "" });
  const [isEmptyPassword, setEmptyPassword] = React.useState(true);
  const [isEmptyId, setEmptyId] = React.useState(true);
  const handleSubmit = async () => {
    API.post("/users/login", { userid: loginRequest.id, password: loginRequest.password }, { withCredentials: true })
      .then((res) => {
        console.log(res);
        setUserInfo(res.data);
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const passwordChanged = (e: any) => {
    console.log(e.target.value);
    setLoginRequest({ id: loginRequest.id, password: e.target.value });
    setEmptyPassword(e.target.value.length == 0 ? true : false);
  };
  const passwordId = (e: any) => {
    setLoginRequest({ id: e.target.value, password: loginRequest.password });
    setEmptyId(e.target.value.length == 0 ? true : false);
  };

  return (
    <S.Login>
      <h1 className="title">로그인</h1>
      <Form name="basic" initialValues={{ remember: false }} onFinish={handleSubmit}>
        <Form.Item className="inputForm inputForm_id" name="username" rules={[{ required: false, message: "아이디를 입력해 주세요." }]}>
          <div>아이디</div>
          <Input placeholder="아이디" size="large" onChange={passwordId} />
        </Form.Item>

        <Form.Item className="inputForm inputForm_pw" name="password" rules={[{ required: false, message: "비밀번호를 입력해 주세요." }]}>
          <div>비밀번호</div>
          <Input.Password className="label" placeholder="비밀번호" size="large" onChange={passwordChanged} />
        </Form.Item>

        <Button className="loginBtn" htmlType="submit" size="large" disabled={isEmptyPassword || isEmptyId}>
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
    </S.Login>
  );
};