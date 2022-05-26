import API from ".";
import { Board, PersonalInfo } from "@src/Types";

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
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
