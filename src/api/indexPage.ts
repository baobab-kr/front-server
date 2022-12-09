import API from ".";
import { CreateComment, CreateReComment, DeleteComment, DeleteReComment, getComment, getReComment, iComment, iIndexPage } from "Types/indexPage";

export function getBoardDetail(_board_id: number): Promise<iIndexPage> {
  return new Promise<iIndexPage>((resolve, reject) => {
    API.post("/board/BoardView", { board_id: _board_id })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function getComments(_board_id: number, _page: number): Promise<iComment[]> {
  return new Promise<iComment[]>((resolve, reject) => {
    API.post("/board/Comment", { board_id: _board_id, page: _page })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function getReComments(_commemt_id: number, _page: number): Promise<iComment[]> {
  return new Promise<iComment[]>((resolve, reject) => {
    API.post("/board/ReComment", { comment_id: _commemt_id, page: _page })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function patchDeleteComment(_commemt_id: number): Promise<DeleteComment> {
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
export function createComment(_content: string, _board_id: number): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    API.post("/board/CreateComment", { content: _content, board_id: _board_id, comment_status: 0 })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function createReComment(_content: string, _comment_id: number): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    API.post("/board/CreateReComment", { content: _content, comment_id: _comment_id, recomment_status: 0 })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getCommentCount(board_id: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    API.get("/board/CommentCount", { params: { board_id: board_id } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getReCommentCount(comment_id: number): Promise<number> {
  return new Promise<number>((resolve, reject) => {
    API.get("/board/ReCommentCount", { params: { comment_id: comment_id } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function CreateFilteringComment(comment_id: number, content: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    API.post("/board/CreateFilteringComment", { comment_id: comment_id, content: content })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function CreateFilteringReComment(comment_id: number, content: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    API.post("/board/CreateFilteringReComment", { id: comment_id, content: content })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
