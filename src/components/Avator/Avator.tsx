import React from "react";
import { ImageAvator } from "./style";
import imag from "../../assets/Avatart.png";
import { user } from "Types/user";

type Props = {
  userId: string;
  width: string;
  height: string;
};

export default function Avator({ userId, width, height }: Props): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "120px",
        maxHeight: "120px",
        width: width,
        height: height,
        borderRadius: "8%",
        overflow: "hidden",
      }}
    >
      {userInfo?.avatar_image === "" ||
        (userInfo?.avatar_image === null && (
          <ImageAvator src={`${process.env.REACT_APP_API_ROOT}/users/read-profile?userid="${userId}"`} alt="avator"></ImageAvator>
        ))}
      {userInfo?.avatar_image !== "" && userInfo?.avatar_image && <ImageAvator src={userInfo?.avatar_image} alt="avator"></ImageAvator>}
      {/* <ImageAvator src={imag} alt="avator"></ImageAvator> */}
    </div>
  );
}
