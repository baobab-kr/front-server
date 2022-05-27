import { userName, id, email } from "@src/Types/signup";
import axios from "axios";
import API from ".";

export function checkUsername(username_: string): Promise<userName> {
  const name = { username: username_ };
  console.log(name);
  return new Promise<userName>((resolve, reject) => {
    axios
      .post("http://localhost:3000/users/check-username", name)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err.response);
      });
  });
}
export function checkId(id_: string): Promise<id> {
  const id_data = { userid: id_ };
  console.log(id_data);
  return new Promise<id>((resolve, reject) => {
    axios
      .post("http://localhost:3000/users/check-userid", id_data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err.response);
      });
  });
}

export function emailRegisterCode(name_: string, email_: string): Promise<email> {
  console.log(email_);
  const email_data = { username: name_, email: email_ };
  console.log(email_data);
  return new Promise<email>((resolve, reject) => {
    axios
      .post("http://localhost:3000/users/register-code", email_data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err.response);
      });
  });
}
export function users_register(register_data: object): Promise<email> {
  console.log(register_data);
  return new Promise<email>((resolve, reject) => {
    axios
      .post("http://localhost:3000/users/register", register_data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err.response);
      });
  });
}
