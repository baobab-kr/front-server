import React from "react";

import { UserInfo, ImageButton, EditButton } from "./style";
import DefaultAvator from "../../assets/defaultAvator.png";
import { user } from "@src/Types/user";

export default function Setting(): JSX.Element {
  const userInfo: user = JSON.parse(localStorage.getItem("user")!);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "1324px" }}>
        <UserInfo>
          <div>
            <div style={{ width: "150px", height: "150px", borderRadius: "70%", overflow: "hidden", justifySelf: "start" }}>
              <img src={DefaultAvator} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
            </div>
            <ImageButton bgColor="red">이미지 제거</ImageButton>
            <ImageButton bgColor="#2f2f2f">이미지 업로드</ImageButton>
          </div>
          <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <div style={{ color: "black" }}>
              <h1 style={{ fontSize: "50px", color: "white" }}>{userInfo.username}</h1>
            </div>
            <hr />
            <div style={{ marginTop: "10px" }}>
              <h3 style={{ color: "darkgray" }}>{userInfo.description}</h3>
            </div>
            <EditButton>수정</EditButton>
          </div>
        </UserInfo>
      </div>
    </div>
  );
}
