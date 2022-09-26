import { userName, id, email, emailCode, register } from "Types/signup";
import axios from "axios";
import API from ".";

export function checkUsername(username_: string): Promise<userName> {
  const name = { username: username_ };
  console.log(name);
  return new Promise<userName>((resolve, reject) => {
    API.post("/users/check-username", name)
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
export function checkId(id_: string): Promise<id> {
  const id_data = { userid: id_ };
  console.log(id_data);
  return new Promise<id>((resolve, reject) => {
    API.post("/users/check-userid", id_data)
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

export function checkEmail(email_: string): Promise<email> {
  const email_data = { email: email_ };
  console.log(email_data);
  return new Promise<email>((resolve, reject) => {
    API.post("/users/check-email", email_data)
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

// /users/check-email

export function emailRegisterCode(name_: string, email_: string): Promise<emailCode> {
  console.log(email_);
  const email_code_data = { username: name_, email: email_ };
  console.log(email_code_data);
  return new Promise<emailCode>((resolve, reject) => {
    API.post("/users/register-code", email_code_data)
      .then((res) => {
        console.log(res);
        if (res.data.message) {
          console.log("?");
          reject(res.statusText);
        }
        console.log("??");
        reject(res);
      })
      .catch((err) => {
        console.log("err", err);
        reject(err.response);
      });
  });
}
export function users_register(id_: string, email_: string, username_: string, password_: string, code_: string): Promise<register> {
  console.log(code_);
  const codeInt = parseInt(code_);
  console.log(codeInt);
  console.log(typeof codeInt);
  return new Promise<register>((resolve, reject) => {
    API.post("/users/register", { userid: id_, email: email_, username: username_, password: password_, inputVerifyCode: codeInt })
      .then((res) => {
        console.log(res);
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
