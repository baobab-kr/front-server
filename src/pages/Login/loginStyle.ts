import styled from "styled-components";

const Login = styled.div`
.title {
  position: absolute;
  top: -80px;
  margin-left 35%;
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
}
  width: 400px;
  position: relative;
  top: 123px;
  left: 36%;
  .inputForm {
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
  }
  .ant-input {
    width: 400px;
    height: 40px;
    margin-top: 10px;
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
  button {
    position: absolute;
    width 80px;
    right: 0px;
    background-color: #fff;
    span{
      color: #000;
      font-weight: 500;
      font-size: 18px;
    }
  }
  .signup {
    position: absolute;
    left: 0px;
    color: #fff;
    font-size: 18px;
  }
`;

export { Login };
