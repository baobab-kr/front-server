import React from "react";
import { ImageAvator } from "./style";
import imag from "../../assets/Avatart.png";
import { useNavigate } from "react-router-dom";
import { user } from "Types/user";
import { useRecoilState } from "recoil";
import POPUP from "store/store.popup";

type Props = {
  user: user;
  userId: string;
  width: string;
  height: string;
};

export default function Avator({ user, userId, width, height }: Props): JSX.Element {
  const navigate = useNavigate();
  const [popup, setPopup] = useRecoilState<boolean>(POPUP);

  const navigateUser = () => {
    // if (userInfo === null) {
    //   setPopup(true);
    //   return;
    // }
    navigate(`/@${userId}`);
  };
  return (
    <div
      onClick={navigateUser}
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
      {user?.avatar_image === "" ||
        (user?.avatar_image === null && (
          <ImageAvator src={`${process.env.REACT_APP_API_ROOT}/users/read-profile?userid="${userId}"`} alt="avator"></ImageAvator>
        ))}
      {user?.avatar_image !== "" && user?.avatar_image && <ImageAvator src={user?.avatar_image} alt="avator"></ImageAvator>}
      {/* <ImageAvator src={imag} alt="avator"></ImageAvator> */}
    </div>
  );
}
