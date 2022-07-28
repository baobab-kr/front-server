import styled from "styled-components";

const Signup = styled.div`
  @media (max-width: 390px) {
    /* 모바일 세로 */
    position: fixed !important;
    padding: 20px;
    position: absolute;
    background-color: #f7f7f7;
    width: 120%;
    height: 120%;
    border-radius: 0px;
    z-index: 1000;
    padding-top: 20vw;
    padding-left: 10vw;
    top: 0px;

    .HomeLogo {
      position: fixed;
      right: 2vw;
      bottom: 2vw;
      cursor: pointer;
    }
    .signup {
      position: fixed;
      bottom: 10vw;
      left: 20px;
      color: #000000;
      font-size: 18px;
    }
  }
  @media (min-width: 390px) and (max-width: 599px) {
    /* 모바일 세로 */
    padding: 20px;
    position: absolute;
    background-color: #f7f7f7;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    z-index: 1000;
    padding-top: 20vw;
    padding-left: 10vw;
    top: 0px;

    .HomeLogo {
      position: fixed;
      right: 2vw;
      bottom: 2vw;
      cursor: pointer;
    }
    .signup {
      position: fixed;
      bottom: 10vw;
      left: 20px;
      color: #000000;
      font-size: 18px;
    }
  }
  @media (min-width: 600px) {
    position: absolute;
    background-color: #f7f7f7;
    border: 2px solid;
    width: 400px;
    border-radius: 20px;
    top: 123px;
    right: 30px;
    height: 600px;
    padding: 20px;
    z-index: 1000;

    .HomeLogo {
      position: fixed;
      left: 35px;
      bottom: 20px;
      cursor: pointer;
    }
    .signup {
      position: absolute;
      bottom: 3vw;
      left: 20px;
      color: #000000;
      font-size: 18px;
    }
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 400px);
  position: relative;
  .signup-form {
    color: #000000;
  }
  label {
    font-size: 20px;
    font-weight: 500;
  }
  .ant-input {
    max-width: 350px;
    min-width: 200px;
    width: 25vw;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #e1e1e1;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .ant-form-item-required {
    color: #000000;
  }
  .ant-form-item {
    margin-bottom: 30px;
    &.ant-form-item-with-help {
      margin-bottom: 6px;
    }
    &.ant-form-item-label {
      padding: 0 0 5px;
    }
  }
  .ant-form-item-explain {
    height: 20px;
    margin-bottom: 10px;
    color: red;
    font-size: 12px;
    line-height: 1rem;
  }
  button {
    width: 75px;
    height: 28px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    font-size: 12px;
    color: #000000;
  }
`;

const signup_form_button = styled.button`
  width: 75px;
  height: 28px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute !important;
  font-size: 12px;
  color: #000000;
  left: 280px !important;
  bottom: 0px;
  :disabled {
    color: gray;
  }
`;

const login_form_button = styled.button`
  width: 75px;
  height: 28px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 12px;
  color: #000000;
  position: absolute !important;
  left: 0px !important;
  top: 220px !important;
`;
const next_form_button = styled.button`
  width: 75px;
  height: 28px;
  background-color: #fff;
  border-radius: 5px;
  font-size: 12px;
  color: #000000;
  position: absolute !important;
  right: 70px !important;
  top: 220px !important;
  :disabled {
    color: gray;
  }
`;

export { Signup, Body, signup_form_button, login_form_button, next_form_button };
