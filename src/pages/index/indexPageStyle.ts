import styled from "styled-components";

export const Index = styled.div`
  position: absolute;
  width: 40vw;
  left: 50%;
  transform: translate(-50%, 0);
  .line {
    background: #ddd;
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
    background: ${({ theme }) => theme.backgroundColor.subColor};
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
  position: relative;
  bottom: 0px;
  width: 40vw;
  height: 100px;
  color: #fff;
  .comment {
    margin-bottom: 20px;
  }
  .date {
    position: relative;
    top: 10px;
    right: 0px;
  }
  .comment_description {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .recomment {
    position: relative;
    bottom: 0px;
    width: calc(40vw - 40px);
    height: auto;
    color: #fff;
    left: 30px;
    margin-top: 20px;
    .re_date {
      position: absolute;
      top: 0px;
      right: 0px;
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
      .comment_write {
        margin-bottom: 10px;
      }
      input {
        width: 40vw;
        height: 70px;
        margin-bottom: 10px;
      }
      button {
        position: relative;
        color: #000;
        right: 0px;
      }
    }
  }
`;

export const InputComment = styled.div`
  position: relative;
  bottom: 0px;
  height: 100px;
  color: #fff;
  .comment_write {
    font-size: 20px;
    margin-bottom: 20px;
  }
  input {
    width: 40vw;
    height: 70px;
    margin-bottom: 10px;
  }
  button {
    position: absolute;
    top: 150px;
    right: 0px;
  }

  margin-bottom: 100px;
`;
