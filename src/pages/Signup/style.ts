import styled from "styled-components";

const Signup = styled.div`
  .title {
    position: absolute;
    padding: 40px 15px 14px;
    margin-left 42%;
    font-size: 40px;
    font-weight: 500;
    color: #ffffff;
  }
`;

const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 83px);
  position: relative;
  top: 83px;
  padding: 40px 15px 14px;
  .signup-form {
    margin-left 35%;
  }
  label {
    font-size: 20px;
    font-weight: 500;
  }
  .ant-input {
    width: 400px;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #e1e1e1;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .ant-form-item-required{
    color: #fff;
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
    left 20px;
  }
  .nameBtn{
  }
`;

const signup_form_button = styled.button`
  width: 75px;
  height: 28px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  font-size: 12px;
  color: #000000;
  left: 0px !important;
`;

// const signup_form = styled.div`

// `

export { Signup, Body, signup_form_button };
