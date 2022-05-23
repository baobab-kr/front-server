import styled from "styled-components";

const Login = styled.div`
  width: 100%;
  min-height: calc(100vh - 83px);
  position: relative;
  top: 83px;
  padding: 40px 15px 14px;
  .signup-form {
    margin-left 35%;
  }
  .inputForm {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
  }
  .ant-input {
    width: 400px;
    height: 40px;
    border-radius: 5px;
    border: solid 1px #e1e1e1;
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
`;

// const signup_form = styled.div`

// `

export { Login };
