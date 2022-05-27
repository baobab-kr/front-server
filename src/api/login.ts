import { login } from "@src/Types/login";
import axios from "axios";
import API from ".";

export function loginAPI(id_: string, password_: string): Promise<login> {
  const login = { userId: id_, password: password_ };
  console.log(login);
  return new Promise<login>((resolve, reject) => {
    axios
      .post("http://localhost:3000/users/login", login)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err.response);
      });
  });
}
