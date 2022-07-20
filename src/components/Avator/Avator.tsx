import React from "react";
import DefaultAvator from "../../assets/defaultAvator.png";
type Props = {
  userId: string;
  width: string;
  height: string;
};

export default function Avator({ userId, width, height }: Props): JSX.Element {
  return (
    <div style={{ maxWidth: "150px", maxHeight: "150px", width: width, height: height, borderRadius: "3%", overflow: "hidden" }}>
      <img
        src={`${process.env.REACT_APP_API_ROOT}users/read-profile?userid="${userId}"`}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        alt="avator"
      ></img>
    </div>
  );
}
