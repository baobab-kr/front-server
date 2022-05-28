import { login } from "@src/Types/login";
import axios from "axios";
import API from ".";

export function loginAPI(id_: string, password_: string): Promise<login> {
  const login = { userid: id_, password: password_ };
  console.log(login);
  return new Promise<login>((resolve, reject) => {
    API.post("/users/login", login)
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
