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
    }
    .writeRecommentBox {
      position: relative;
      top: 20px;
      input {
        width: 86vw !important;
        height: 70px;
        margin-bottom: 10px;
      }
    }
  }
  position: relative;
  bottom: 0px;
  width: 25vw;
  height: 100px;
  color: #999999;
  margin-left: 15px;
  margin-right: 15px;
  .userDataInfo {
    margin-top: 50px;
    margin-bottom: 20px;
    .avator {
      width: 70px;
      height: 70px;
      border-radius: 70%;
      overflow: hidden;
      justify-self: start;
    }
  }
  .comment {
    margin-bottom: 20px;
    color: ${({ theme }) => theme.fontColor.subColor};
  }
  .date {
    text-align: left;
    margin-top: -15px;
    margin-left: 50px;
    color: ${({ theme }) => theme.fontColor.subColor};
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
    margin-top: 20px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.fontColor.subColor};
  }
  .recomment {
    position: relative;
    bottom: 0px;
    width: calc(25vw - 40px);
    height: auto;
    color: #999999;
    left: 30px;
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
      margin-top: -15px;
      margin-left: 50px;
    }
    .re_nickname {
      width: max-content;
      text-align: left;
      margin-top: -40px;
      margin-left: 50px;
    }
    .recomment_description {
      margin-top: 10px;
    }
  }
  .recommentBox {
    position: relative;
    .writeRecommentBox {
      position: relative;
      top: 20px;
      width: 100%;
      .comment_write {
        margin-bottom: 10px;
      }
      input {
        width: 25vw;
        height: 70px;
        margin-bottom: 10px;
      }
      button {
        position: relative;
        color: #000;
        top: 0px;
        right: 0px;
      }
    }
  }
`;

export const InputComment = styled.div`
  @media (max-width: 390px) {
    width: 90%;
    input {
      width: 100% !important;
      height: 70px;
      border-top: 1px solid black;
    }
  }
  // padding-top: 10px;
  top: 60px;
  right: 16px;
  position: fixed;
  height: 150px;
  // padding-right: 20px;
  color: ${({ theme }) => theme.fontColor.subColor};
  background-color: ${({ theme }) => theme.fontColor.color};
  z-index: 2;
  .comment_write {
    font-size: 20px;
    margin-bottom: 20px;
  }
  input {
    width: 25vw;
    height: 70px;
    border-top: 1px solid black;
    color: ${({ theme }) => theme.fontColor.subColor};
    background-color: ${({ theme }) => theme.fontColor.color};
  }
  .saveComment {
    position: absolute;
    top: 140px;
    right: 10px;
  }
  .closeComment {
    position: absolute;
    top: 0px;
    right: 0px;
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
      position: absolute;
      width: 30px;
      height: 20px;
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
      background: ${({ theme }) => theme.backgroundColor.subColor};
      color: ${({ theme }) => theme.fontColor.color};
      border: 1px solid #ffffff;
      border-radius: 3px;
    }
  }
  top: 60px;
  right: 0px;
  height: 94%;
  position: fixed;
  background-color: ${({ theme }) => theme.fontColor.color};
  color: ${({ theme }) => theme.fontColor.subColor};
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 170px;
  z-index: 1000;
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
    background: #ddd;
    width: 34vw;
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
    position: absolute;
    width: 30px;
    height: 20px;
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
    background: ${({ theme }) => theme.backgroundColor.bg};
    color: ${({ theme }) => theme.fontColor.color};
    border: 1px solid #ffffff;
    border-radius: 3px;
  }
  .moreBtn {
    margin-bottom: 20px;
  }
`;
export const CommentViewBtn = styled.img`
  width: 80px;
  position: fixed;
  right: 30px;
  bottom: 50px;
  z-index: 1;
`;
