// src/lib/refresh.ts

import axios, { AxiosRequestConfig } from "axios";

const refresh = async (config: AxiosRequestConfig): Promise<AxiosRequestConfig> => {
  const expireAt: string = localStorage.getItem("atexpires") || "";
  // const date = Date.now();

  const now = new Date(); // 현재 시간
  console.log(now.getTime());
  const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // 현재 시간을 utc로 변환한 밀리세컨드값
  const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
  const date = new Date(utcNow + koreaTimeDiff + koreaTimeDiff); // utc로 변환된 값을 한국 시간으로 변환시키기 위해 9시간(밀리세컨드)를 더함

  console.log("Rrfresh Request - ", Number(date));
  console.log("Rrfresh expireAt - ", expireAt);
  if (expireAt !== "") {
    console.log(Number(Number(JSON.parse(expireAt)) - Number(date)));
    console.log(Number(Number(date) - Number(JSON.parse(expireAt))));
  }

  // 토큰이 만료되었고, refreshToken 이 저장되어 있을 때
  if (expireAt !== "" && Number(JSON.parse(expireAt) - Number(date)) < 60000) {
    // 토큰 갱신 서버통신
    await axios
      .get(`${process.env.REACT_APP_API_ROOT}users/refresh`, { withCredentials: true })
      .then((res) => {
        localStorage.setItem("atexpires", JSON.stringify(res.headers.atexpires));
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("atexpires");
        localStorage.removeItem("rtexpires");
        localStorage.removeItem("user");
      });
  }

  return config;
};

const refreshErrorHandle = (err: any) => {
  console.log("refreshErrorHandle - ERROR");
  localStorage.removeItem("atexpires");
  localStorage.removeItem("rtexpires");
  localStorage.removeItem("user");
};

export { refresh, refreshErrorHandle };
