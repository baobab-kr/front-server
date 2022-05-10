import styled from 'styled-components';

const Signup = styled.div`
  background-color: #ffffff;
`;

const Body = styled.div`
  width: 100%;
  min-height: calc(100vh - 83px);
  position: relative;
  top: 83px;
  background-color: #f2f2f2;
  padding: 40px 15px 14px;
  .signup-form {
    margin-left 35%;
  }
  label {
    font-size: 20px;
    font-weight: 500;
    color: #9f9f9f;
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

const signup_form_button = styled.button`
  width: 75px;
  height: 28px;
  background-color: #2d3c78;
  border-radius: 5px;
  position: absolute;
  right: 44%;
  font-size: 12px;
  color: #ffffff;
`;

// const signup_form = styled.div`

// `

export { Signup, Body, signup_form_button };
