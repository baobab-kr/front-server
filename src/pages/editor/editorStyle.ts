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
export { popup, popupInner, postImage, description, btnBox, TitleWrpper, titleInput, saveBtn };
