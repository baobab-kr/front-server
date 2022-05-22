import styled from "styled-components";

const popup = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const popupInner = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  width: 70%;
  height: 80%;
  background: rgb(100, 100, 100);
  opacity: 1;

  .title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .cancleBtn {
    position: absolute;
    top: 2%;
    right: 2%;
    width: 50px;
    height: 50px;
  }
`;

const postImage = styled.div`
  position: absolute;
  left 20%;
  top 20%;
  width: 285px;
  .image{
    width 285px;
    height: 285px;
  }
  .defaultImageBg {
    position: relative;
    width: 100%;
    height: 285px;
    background: rgb(255, 255, 255);
    margin-bottom: 5px;
    .defaultImage {
      position: absolute;
      width: 100%;
      top: 50%;

      text-align: center;
    }
  }
`;
const tag = styled.div`
  position: absolute;
  left 20%;
  top 70%;
  width: 285px;
  .tagInput{
    width:100%;
    height:40px;
    resize: none;
    &:focus {
      outline: none;
    }
  }
  `;
const description = styled.div`
position: absolute;
left 55%;
top 20%;
width: 285px;
.descriptionInput{
  width: 100%;
  height: 365px;
  resize: none;
  &:focus {
    outline: none;
  }
}`;
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
  }
  .saveBtn {
    position: absolute;
    right: 0px;
    width: 70px;
    height: 40px;
  }
`;

const title = styled.h1`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;
const titleInput = styled.input`
  width: 100%;
  text-align: center;
  border: none;
  height: 50px;
  font-size: 35px;
  margin-bottom: 20px;
  &:focus {
    outline: none;
  }
`;
const saveBtn = styled.button`
  position: absolute;
  top: 14%;
  left: 93%;
  width: 70px;
  height: 40px;
`;
export { popup, popupInner, postImage, tag, description, btnBox, title, titleInput, saveBtn };
