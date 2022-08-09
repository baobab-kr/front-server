import styled from "styled-components";

const popup = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 990;
`;

const popupInner = styled.div`
  position: absolute;
  top: 17%;
  left: 20%;
  width: 60%;
  height: 70%;
  background-color: ${({ theme }) => theme.backgroundColor.bg};
  opacity: 1;

  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .cancleBtn {
    position: absolute;
    top: 35px;
    right: 2%;
    width: 50px;
    height: 50px;
  }
`;

const postImage = styled.div`
  position: absolute;
  left: 10vw;
  top: 20%;
  width: 285px;
  .image {
    width: 285px;
    height: 285px;
  }
  .defaultImageBg {
    position: relative;
    width: 100%;
    height: 285px;
    margin-bottom: 5px;
    background: ${({ theme }) => theme.backgroundColor.subColor};
    color: #fff;
    .defaultImage {
      position: absolute;
      width: 100%;
      top: 50%;

      text-align: center;
    }
  }
  .imgDeleteBtn {
    width: 32px;
    height: 23px;
    background: rgb(255, 255, 255);
    color: #000;
  }
`;

const description = styled.div`
  position: absolute;
  left: 55%;
  top: 20%;
  width: 285px;
  .descriptionInput {
    padding: 15px;
    width: 100%;
    height: 300px;
    resize: none;
    background: ${({ theme }) => theme.backgroundColor.subColor};
    color: #fff;
    &:focus {
      outline: none;
    }
  }
`;
const btnBox = styled.div`
  top: 74%;
  position: absolute;
  left: 55%;
  width: 285px;
  .onlyMeBtn {
    position: absolute;
    left: 0px;
    width: 70px;
    height: 40px;
    background: rgb(100, 100, 100);
    color: #fff;
  }
  .saveBtn {
    position: absolute;
    right: 0px;
    width: 70px;
    height: 40px;
    background: rgb(100, 100, 100);
    color: #fff;
  }
  .ant-switch {
    margin: 0;
    padding: 0;
    color: #1d1d1d;
    font-size: 14px;
    padding-right: 10px;
    text-align: right;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    min-width: 100px;
    height: 40px;
    line-height: 22px;
    vertical-align: middle;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), linear-gradient(to right, #fff, #fff);
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ant-switch-handle {
    position: absolute;
    top: 2px;
    left: 4px;
    width: 35px;
    height: 35px;
    transition: all 0.2s ease-in-out;
    :: before {
      position: absolute;
      inset: 0;
      background-color: #252525;
      border-radius: 20px;
      box-shadow: 0 2px 4px #00230b33;
      transition: all 0.2s ease-in-out;
      content: "";
    }
  }
  .ant-switch-checked {
    margin: 0;
    padding: 0;
    color: #1d1d1d;
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    padding-left: 10px;
    text-align: left;
    font-feature-settings: "tnum";
    position: absolute;
    display: inline-block;
    box-sizing: border-box;
    min-width: 100px;
    height: 40px;
    line-height: 22px;
    vertical-align: middle;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), linear-gradient(to right, #fff, #fff);
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    transition: all 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    .ant-switch-handle {
      left: calc(100% - 40px);
      :before {
        position: absolute;
        inset: 0;
        background-color: #252525;
        border-radius: 20px;
        box-shadow: 0 2px 4px #00230b33;
        transition: all 0.2s ease-in-out;
        content: "";
      }
    }
  }
`;

const TitleWrpper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 140px;
  padding: 0px 10px;
`;

const titleInput = styled.input`
  border: none;
  height: 40px;
  font-size: 35px;
  margin-bottom: 20px;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  color: ${({ theme }) => theme.fontColor.color};
  &:focus {
    outline: none;
  }
`;
const saveBtn = styled.button`
  padding: 8px 16px;
  background: ${({ theme }) => theme.backgroundColor.subColor};
  color: ${({ theme }) => theme.fontColor.color};
  border: 1px solid #ffffff;
  border-radius: 3px;
`;
const ToggleBtn = styled.button`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
`;
const Circle = styled.div`
  background-color: white;
  width: 38px;
  height: 38px;
  border-radius: 50px;
  position: absolute;
  left: 5%;
  transition: all 0.5s ease-in-out;
`;

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 0;
`;

const CheckBox = styled.input`
  z-index: 1;
  width: 5rem;
  height: 2rem;
  background: var(--second);
  border-radius: 2em;
  /* 선택X 텍스트 */
  ::before {
    position: absolute;
    padding-left: 1em;
    width: 5rem;
    height: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: var(--bold);
    font-size: var(--small);
    /* 텍스트 트랜지션 */
    transition: all 0.2s ease-in-out;
  }
  /* 선택X 원 */
  ::after {
    position: relative;
    content: "";
    display: block;
    width: 1.6em;
    height: 1.6em;
    top: calc((2rem - 1.6em) / 2);
    left: calc(5rem - 1.9em);
    border-radius: 50%;
    /* 원 이동 트랜지션 */
    transition: all 0.2s ease-in-out;
  }
  &:checked {
    /* 배경색 변경 트랜지션 */
    transition: all 0.2s ease-in-out;
    /* 선택 O 텍스트 */
    ::before {
      position: absolute;
      padding-right: 1em;
      align-items: center;
      justify-content: flex-end;
    }
    /* 선택 O 원 */
    ::after {
      content: "";
      z-index: 2;
      top: calc((2rem - 1.6em) / 2);
      left: calc((2rem - 1.6em) / 2);
      width: 1.6em;
      height: 1.6em;
      display: block;
      border-radius: 50%;
      position: relative;
    }
  }
`;
export { popup, popupInner, postImage, description, btnBox, TitleWrpper, titleInput, saveBtn };
