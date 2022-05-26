import API from ".";
import { Board, PersonalInfo } from "@src/Types/main";

export function getMainBoard(page: number): Promise<Board[]> {
  console.log(page);
  return new Promise<Board[]>((resolve, reject) => {
    API.post("/board/BoardMain", { page: page })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err.response);
      });
  });
}

export function getPersonalBoard(page: number, userId: number): Promise<PersonalInfo> {
  return new Promise<PersonalInfo>((resolve, reject) => {
    API.post("/board/BoardPersonal", { page: page, user_id: userId })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        console.log("getPersonalBoard", res.data);

        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getBoardPersonalTag(page: number, userId: number, tag: string[]): Promise<Board[]> {
  return new Promise<Board[]>((resolve, reject) => {
    API.post("/board/BoardPersonalTag", { page: page, user_id: userId, tag_name: tag })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        console.log("getBoardPersonalTag", res.data);

        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function touchLikes(board_id: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.post("/board/Like", { board_id: board_id })
      .then((res) => {
        console.log(res);
        resolve(res.statusText);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
