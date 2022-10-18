import API from ".";
import { user } from "Types/user";

export function getUserInfo(): Promise<user> {
  return new Promise<user>((resolve, reject) => {
    API.get("/users")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
        localStorage.removeItem("user");
      });
  });
}

export function userLogout(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.get("/users/logout")
      .then((res) => {
        resolve(res.data);
        localStorage.removeItem("user");
      })
      .catch((err) => {
        reject(err.response);
        localStorage.removeItem("user");
      });
  });
}
