import styled from "styled-components";

const Signup = styled.div`
  @media (max-width: 599px) {
    padding: 20px;
    position: absolute;
    background-color: #f7f7f7;
    width: 100%;
    height: 100%;
    border-radius: 0px;
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
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 400px);
  position: relative;
  .signup-form {
    color:#000000;
  }
  label {
    font-size: 20px;
    font-weight: 500;
  }
  .ant-input {
    width: 350px;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #e1e1e1;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .ant-form-item-required{
    color:#000000;
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
  .ant-form-item-explain{
    height: 20px;
    margin-bottom: 10px;
  }
  button{
    width: 75px;
    height: 28px;
    background-color: #fff;
    border-radius: 5px;
    position: relative;
    font-size: 12px;
    color: #000000;
    left 0px;
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
  position: absolute !important;
  font-size: 12px;
  color: #000000;
  left: 0px !important;
  bottom: 0px;
`;
const next_form_button = styled.button`
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

export { Signup, Body, signup_form_button, login_form_button, next_form_button };
