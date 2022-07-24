import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { Link, Navigate, useLocation } from "react-router-dom";
import * as S from "./loginStyle";
import { loginAPI } from "../../api/login";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import Swal from "sweetalert2";
import bg from "../../assets/LoginBg.jpg";
import Signup from "../Signup/Signup";
export default function Login(props: any) {
  return (
    <div className="loginPage" style={{ position: "absolute", width: "100%", height: "100%", top: "0px", zIndex: 1000 }}>
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

  const [loginRequest, setLoginRequest] = useState({ id: "", password: "" });
  const [isEmptyPassword, setEmptyPassword] = useState(true);
  const [isEmptyId, setEmptyId] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const handleSubmit = async () => {
    API.post("/users/login", { userid: loginRequest.id, password: loginRequest.password }, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("로그인에 실패하였습니다.");
      });
  };

  const passwordChanged = (e: any) => {
    setLoginRequest({ id: loginRequest.id, password: e.target.value });
    setEmptyPassword(e.target.value.length == 0 ? true : false);
  };
  const passwordId = (e: any) => {
    setLoginRequest({ id: e.target.value, password: loginRequest.password });
    setEmptyId(e.target.value.length == 0 ? true : false);
  };

  const changeIsLogin = () => {
    setIsLogin(true);
  };

  useEffect(() => {
    const bgEl = document.querySelector<HTMLElement>(".bg")!;
    bgEl.style.background = `url(${bg}) no-repeat`;
    bgEl.style.backgroundSize = "cover";
    bgEl.style.position = "absolute";
    bgEl.style.width = "100%";
    bgEl.style.height = "100%";
  }, []);
  return (
    <>
      {isLogin ? (
        <S.Login>
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
              <div className="signup" onClick={() => setIsLogin(false)}>
                회원가입
              </div>
            </Form.Item>
          </Form>
        </S.Login>
      ) : (
        <Signup changeIsLogin={() => changeIsLogin()} />
      )}
    </>
  );
};
