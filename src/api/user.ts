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

export function ModifySocialUrl(userid: string, url: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.post("/users/create-socialUrl", { userid: userid, socialUrl: url })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function ModifyTechStack(userid: string, techStack: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.post("/users/update-techStack", { userid: userid, techStack: techStack })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function ModifyDescription(userid: string, description: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.post("/users/create-description", { userid: userid, description: description })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}
