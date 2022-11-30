import React from "react";
import { ImageAvator } from "./style";
import imag from "../../assets/Avatart.png";

type Props = {
  userId: string;
  width: string;
  height: string;
};

export default function Avator({ userId, width, height }: Props): JSX.Element {
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
      <ImageAvator src={`${process.env.REACT_APP_API_ROOT}/users/read-profile?userid="${userId}"`} alt="avator"></ImageAvator>
      {/* <ImageAvator src={imag} alt="avator"></ImageAvator> */}
    </div>
  );
}
