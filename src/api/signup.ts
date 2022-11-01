import { userName, id, email, emailCode, register } from "Types/signup";
import API from ".";

export function checkUsername(username_: string): Promise<userName> {
  const name = { username: username_ };
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
  const email_code_data = { username: name_, email: email_ };
  return new Promise<emailCode>((resolve, reject) => {
    API.post("/users/register-code", email_code_data)
      .then((res) => {
        if (res.data.message) {
          reject(res.statusText);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
export function users_register(
  id_: string,
  email_: string,
  username_: string,
  password_: string,
  code_: string,
  role_: number,
  techStack_: string,
): Promise<register> {
  const codeInt = parseInt(code_);
  return new Promise<register>((resolve, reject) => {
    API.post("/users/register", {
      userid: id_,
      email: email_,
      username: username_,
      password: password_,
      inputVerifyCode: codeInt,
      role: role_,
      techStack: techStack_,
    })
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
