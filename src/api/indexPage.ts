import API from ".";
import { CreateComment, CreateReComment, DeleteComment, DeleteReComment, getComment, getReComment, IndexPage } from "@src/Types/indexPage";

export function getBoardDetail(_board_id: number): Promise<IndexPage> {
  return new Promise<IndexPage>((resolve, reject) => {
    API.post("/board/BoardView", { board_id: _board_id })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function getComments(_board_id: number): Promise<getComment> {
  return new Promise<getComment>((resolve, reject) => {
    API.post("/board/Comment", { board_id: _board_id })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function getReComments(_commemt_id: number): Promise<getReComment> {
  return new Promise<getReComment>((resolve, reject) => {
    API.post("/board/ReComment", { comment_id: _commemt_id })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function patchDeleteComment(_commemt_id: number): Promise<DeleteComment> {
  console.log(_commemt_id);
  return new Promise<DeleteComment>((resolve, reject) => {
    API.patch("/board/DeleteComment", { comment_id: _commemt_id })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function patchDeleteReComment(_reCommemt_id: number): Promise<DeleteReComment> {
  return new Promise<DeleteReComment>((resolve, reject) => {
    API.patch("/board/DeleteReComment", { reComment_id: _reCommemt_id })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function createComment(_content: string, _board_id: number): Promise<CreateComment> {
  console.log({ content: _content, board_id: _board_id, comment_status: 0 });
  return new Promise<CreateComment>((resolve, reject) => {
    API.post("/board/CreateComment", { content: _content, board_id: _board_id, comment_status: 0 })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function createReComment(_content: string, _comment_id: number): Promise<CreateReComment> {
  console.log({ content: _content, comment_id: _comment_id, recomment_status: 0 });
  return new Promise<CreateReComment>((resolve, reject) => {
    API.post("/board/CreateReComment", { content: _content, comment_id: _comment_id, recomment_status: 0 })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
