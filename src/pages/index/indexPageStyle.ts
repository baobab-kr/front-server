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
`;
export const Top = styled.div`
  text-align: center;
  .title {
    font-size: 50px;
  }
  .tag {
    position: absolute;
    left: 0px;
  }
  .writer {
    position: absolute;
    right: 0px;
  }
  .description {
    margin-top: 60px;
    font-size: 30px;
    text-align: left;
  }
`;
export const Content = styled.div`
  position: relative;
  width: 40vw;
  word-break: break-all;
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
    width: 40vw;
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
