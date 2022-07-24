import styled from "styled-components";

const Login = styled.div`
@media (max-width: 599px) {
  /* 모바일 세로 */
  padding: 20px;
  position: absolute;
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
  border-radius: 0px;
  z-index: 1000;
  padding-top: 200px;
  padding-left: 100px;
  top: 0px;
  
  .Logo{
    position: fixed;
    right: 35px;
    bottom: 20px;
    cursor: pointer;
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
  
  .Logo{
    position: fixed;
    left: 35px;
    bottom: 20px;
    cursor: pointer;
  }
}
  
    .inputForm {
      width: 350px;
      font-size: 20px;
      font-weight: 500;
      color:#000000;
    }
    .ant-form{
      width: 350px;
    }
    .ant-input {
      padding-left: 10px;
      width: 350px;
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
      background-color: #fff;
      span{
        color: #000;
        font-weight: 500;
        font-size: 18px;
      }
    }
    .signup {
      position: absolute;
      bottom: 30px;
      left: 20px;
      color: #000000;
      font-size: 18px;
    }
`;
export { Login };
