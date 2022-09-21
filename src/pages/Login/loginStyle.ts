import styled from "styled-components";

const Login = styled.div`
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

  .inputForm {
    width: 350px;
    font-size: 20px;
    font-weight: 500;
    color: #000000;
  }
  .ant-form {
    width: 350px;
  }
  .ant-input {
    max-width: 350px;
    min-width: 200px;
    padding-left: 10px;
    width: 25vw;
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
    width: 80px;
    background-color: #fff;
    span {
      color: #000;
      font-weight: 500;
      font-size: 18px;
    }
  }
`;
export { Login };
