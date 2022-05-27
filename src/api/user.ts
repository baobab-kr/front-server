import API from ".";
import { user } from "@src/Types/user";

export function getUserInfo(): Promise<user> {
  return new Promise<user>((resolve, reject) => {
    API.get("/users")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function userLogout(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.get("/users/logout")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
