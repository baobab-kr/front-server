import styled, { keyframes } from "styled-components";

const on = keyframes` 
0% {
  transform: translateX(100%);
}
100% {
  transform: translateX(0%);
}
  `;
const off = keyframes` 
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
    `;

export const Index = styled.div`
  position: absolute;
  width: 40vw;
  left: 50%;
  transform: translate(-50%, 0);
  .line {
    background: ${({ theme }) => theme.backgroundColor.bg};
    width: 40vw;
    height: 1px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  button {
    background: white;
    width: 100px;
    height: 30px;
  }
  .deleteComment {
    position: absolute;
    width: 30px;
    height: 20px;
    right: 0px;
  }
  .deleteReComment {
    position: absolute;
    width: 30px;
    height: 20px;
    right: 0px;
    top: 25px;
  }
  .updateBtn {
    position: absolute;
    right: 0px;
    top: 25px;
    width: 70px;
    background: ${({ theme }) => theme.backgroundColor.bg};
    color: ${({ theme }) => theme.fontColor.color};
    border: 1px solid #ffffff;
    border-radius: 3px;
  }
`;
export const Top = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.fontColor.color};
  .title {
    font-size: 50px;
  }
  .top_data_box {
    margin-top: 20px;
    margin-bottom: 20px;
    border-left: 5px solid;
    padding-left: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
    .writer {
      font-size: 24px;
      text-align: left;
      margin-top: -60px;
      margin-left: 80px;
    }
    .date {
      text-align: left;
      color: rgb(255, 7, 110);
      font-size: 20px;
      margin-top: 10px;
      margin-left: 80px;
    }
    .profile {
      width: 70px;
      height: 70px;
      border-radius: 70%;
      overflow: hidden;
      justify-self: start;
    }
  }

  .description {
    margin-top: 60px;
    font-size: 30px;
    text-align: left;
  }
`;

export const Navigate = styled.div`
  width: 40vw;
  font-size: 22px;
  line-height: normal;
  .naviData {
    margin-right: 20px;
    color: ${({ theme }) => theme.fontColor.subColor};
  }
`;
export const Content = styled.div`
  position: relative;
  width: 40vw;
  word-break: break-all;
  .tag {
    display: block;
    word-break: keep-all;
    div {
      display: inline-block;
      width: min-content;
      line-height: 1rem;
      align-items: center;
      background-color: ${({ theme }) => theme.mainColor.main};
      color: ${({ theme }) => theme.fontColor.subColor};
      border-radius: 1rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-right: 10px;
      margin-top: 10px;
      height: 1.5rem;
      margin-bottom: 10px;
    }
  }
`;

export const CommentBox = styled.div`
  @media (max-width: 390px) {
    width: 95%;
    .recomment {
      width: 90% !important;
      .line {
        width: 82vw !important;
      }
    }
    .writeRecommentBox {
      position: relative;
      top: 20px;
      textarea {
        color: ${({ theme }) => theme.fontColor.subColor};
        background-color: #e1e1e1;
        width: 86vw !important;
        height: 70px;
        margin-bottom: 10px;
        resize: none;
        &:focus {
          outline: 0;
        }
      }
      .saveComment {
        position: absolute;
        top: 160px;
        right: 10px;
        border-radius: 20px;
        color: #fff;
        background-color: #3a9700;
      }
    }
  }
  position: relative;
  bottom: -90px;
  width: 25vw;
  height: 88%;
  color: #999999;
  margin-left: 15px;
  margin-right: 15px;
  .userDataInfo {
    margin-top: 20px;
    margin-bottom: 20px;
    .avator {
      width: 70px;
      height: 70px;
      border-radius: 70%;
      overflow: hidden;
      justify-self: start;
    }
    .deleteComment {
      position: relative;
      width: 30px;
      height: 20px;
      top: -37px;
      margin-left: 90%;
      color: ${({ theme }) => theme.fontColor.subColor};
    }
  }
  .comment {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.fontColor.subColor};
    .recommentView {
      text-align: left;
      margin-left: 0px;
      background: none;
    }
  }
  .date {
    text-align: left;
    margin-top: 3px;
    margin-left: 50px;
    color: ${({ theme }) => theme.fontColor.subColor};
    &.mydate {
      margin-top: -15px;
    }
  }
  .nickname {
    width: max-content;
    text-align: left;
    margin-top: -40px;
    margin-left: 50px;
  }
  .My {
    position: relative;
    top: -20px;
    right: -55px;
    border: 2px red solid;
    border-radius: 50px;
    text-align: center;
  }
  .comment_description {
    margin-top: -20px;
    margin-bottom: 20px;
    word-break: break-all;
    color: ${({ theme }) => theme.fontColor.subColor};
  }
  .recomment {
    position: relative;
    bottom: 0px;
    width: calc(25vw - 20px);
    height: auto;
    color: #999999;
    margin-top: 20px;
    .userDataInfo {
      margin-top: 20px;
      margin-bottom: 20px;
      .avator {
        width: 70px;
        height: 70px;
        border-radius: 70%;
        overflow: hidden;
        justify-self: start;
      }
    }
    .re_date {
      text-align: left;
      margin-top: 3px;
      margin-left: 50px;
      &.mydate {
        margin-top: -15px;
      }
    }
    .re_nickname {
      width: max-content;
      text-align: left;
      margin-top: -40px;
      margin-left: 50px;
    }
    .recomment_description {
      word-break: break-all;
      margin-top: 10px;
    }
  }
  .recommentBox {
    border-left: 3px solid #a9a9a9;
    padding-left: 10px;
    position: relative;
    .writeRecommentBox {
      box-shadow: 0px 2px 2px 2px grey;
      margin-top: 20px;
      border-radius: 10px;
      background-color: #fff;
      position: relative;
      top: 20px;
      width: 100%;
      height: 150px;
      .comment_write {
        margin-bottom: 10px;
        padding-top: 10px;
        padding-left: 10px;
      }
      .saveComment {
        position: absolute;
        top: 110px;
        right: 10px;
        border-radius: 20px;
        color: #fff;
        background-color: #3a9700;
      }
      textarea {
        color: ${({ theme }) => theme.fontColor.subColor};
        background-color: #fff;
        width: calc(25vw - 20px);
        height: 70px;
        margin-bottom: 10px;
        resize: none;
        border: none;
        padding-left: 10px;
        padding-right: 10px;
        &:focus {
          outline: 0;
        }
      }
      button {
        position: relative;
        color: #000;
        top: 0px;
        right: 0px;
      }
    }
    .reComment_more_btn {
      position: relative;
      top: 20px;
      left: 30%;
    }
  }
`;

export const InputComment = styled.div`
  @media (max-width: 390px) {
    width: 90%;
    textarea {
      color: ${({ theme }) => theme.fontColor.subColor};
      background-color: #ffffff;
      width: 100% !important;
      height: 70px;
      resize: none;
      &:focus {
        outline: 0;
      }
    }
  }

  top: 60px;
  right: 16px;
  position: fixed;
  height: 200px;
  border-radius: 10px;
  color: ${({ theme }) => theme.fontColor.subColor};
  background-color: #ffffff;
  z-index: 2;
  box-shadow: 0px 2px 2px 2px grey;
  .writer_info {
    margin-top: 20px;
    margin-bottom: 30px;
    .avator {
      margin-left: 10px;
    }
    .comment_write {
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      text-align: left;
      margin-top: -40px;
      margin-left: 60px;
    }
  }
  .comment_write {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 20px;
    margin-bottom: 20px;
  }
  textarea {
    display: block;
    width: 25vw;
    height: 80px;
    color: ${({ theme }) => theme.fontColor.subColor};
    background-color: #ffffff;
    border: none;
    resize: none;
    &:focus {
      outline: 0;
    }
    padding-left: 10px;
    padding-right: 10px;
  }
  .saveComment {
    position: absolute;
    top: 160px;
    right: 10px;
    border-radius: 20px;
    color: #fff;
    background-color: #3a9700;
  }
`;

export const CommentComponent = styled.div`
  @media (max-width: 390px) {
    width: 100%;

    .line {
      color: ${({ theme }) => theme.fontColor.color};
      width: 100%;
      height: 1px;
      margin-top: 2rem;
      margin-bottom: 1.5rem;
    }
    button {
      background: white;
      width: 100px;
      height: 30px;
      color: ${({ theme }) => theme.fontColor.subColor};
    }
    .deleteComment {
      position: relative;
      width: 30px;
      height: 20px;
      top: 0px;
      right: 0px;
      color: ${({ theme }) => theme.fontColor.subColor};
    }
    .deleteReComment {
      position: absolute;
      width: 30px;
      height: 20px;
      right: 0px;
      top: 25px;
      color: ${({ theme }) => theme.fontColor.subColor};
    }
    .updateBtn {
      position: absolute;
      right: 0px;
      top: 25px;
      width: 70px;
      background: #e1e1e1;
      color: ${({ theme }) => theme.fontColor.color};
      border: 1px solid #ffffff;
      border-radius: 3px;
    }
  }
  top: 60px;
  right: 0px;
  height: 94%;
  position: fixed;
  background-color: #ffffff;
  box-shadow: -1px 4px 5px 5px grey;
  color: ${({ theme }) => theme.fontColor.subColor};
  overflow-x: hidden;
  overflow-y: auto;
  padding-top: 170px;
  z-index: 1000;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background-image: linear-gradient(180deg, #999999 0%, #999999 99%);
    box-shadow: inset 2px 2px 5px 0 rgba(#fff, 0.5);
  }
  // -ms-overflow-style: 2px; /* IE and Edge */
  // scrollbar-width: 2px; /* Firefox */
  // &::-webkit-scrollbar {
  //   display: none; /* Chrome, Safari, Opera*/
  // }
  &.none {
    display: none;
  }
  &.on {
    display: block;
    animation: ${on} 1s forwards;
  }
  &.off {
    animation: ${off} 1s forwards;
  }
  .line {
    background: #c9c9c9;
    width: 34vw;
    height: 2px;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
  }
  button {
    background: white;
    width: 100px;
    height: 30px;
    color: ${({ theme }) => theme.fontColor.subColor};
  }
  .deleteReComment {
    position: absolute;
    width: 30px;
    height: 20px;
    right: 0px;
    top: 25px;
    color: ${({ theme }) => theme.fontColor.subColor};
  }
  .updateBtn {
    position: absolute;
    right: 0px;
    top: 25px;
    width: 70px;
    background: ${({ theme }) => theme.backgroundColor.bg};
    color: ${({ theme }) => theme.fontColor.color};
    border: 1px solid #ffffff;
    border-radius: 3px;
  }
  .moreBtn {
    margin-bottom: 20px;
    position: relative;
    left: 30%;
  }
  .closeComment {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
export const CommentViewBtn = styled.img`
  width: 80px;
  position: fixed;
  right: 30px;
  bottom: 50px;
  z-index: 1;
`;
