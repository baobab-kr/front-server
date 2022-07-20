import React, { useState } from "react";
import { UserInfo, ImageButton, EditButton } from "./style";
import DefaultAvator from "../../assets/defaultAvator.png";
import { user } from "@src/Types/user";
import { Navigate } from "react-router";
import styled from "styled-components";
import API from "../../api";
import Avator from "../../components/Avator/Avator";

export default function Setting(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  const [fileImage, setFileImage] = useState<string>("");
  const [fileList, setFileList] = useState<FileList>();
  // let fileList: FileList | null = null;

  const saveInfo = async (e: any) => {
    e.preventDefault();
    console.log(`"${userInfo?.userid}"`, fileList);
    if (!fileList) return;
    const formData: any = new FormData();
    formData.append("profile", fileList![0]);
    formData.append("userid", `"${userInfo?.userid}"`);
    console.log("profile", formData.get("profile"));
    API({
      method: "post",
      url: "/users/upload-profile",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        console.log(response);
        window.location.reload();
        setFileImage("");
      })
      .catch(function (response) {
        alert(response);
      });
  };

  const imageSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileLists = e.target.files;
    if (fileLists !== null) {
      // setFileImage(fileImage);
      setFileImage(URL.createObjectURL(fileLists[0]));
      setFileList(fileLists);
      console.log("asd", fileList);
    }
  };

  // if (userInfo === null) return <Navigate to="/" replace />;
  // else
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: "1324px" }}>
        <UserInfo>
          <div>
            {fileImage !== "" && (
              <div style={{ maxWidth: "150px", maxHeight: "150px", width: "150px", height: "150px", borderRadius: "3%", overflow: "hidden" }}>
                <img src={fileImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
              </div>
            )}
            {fileImage === "" && <Avator userId={`${userInfo?.userid}`} width={"150px"} height={"150px"} />}
            <AppStyle>
              <ImageButton bgColor="red">이미지 제거</ImageButton>
              <label htmlFor="ex_file">
                <ImageButton bgColor="#2f2f2f">이미지 업로드</ImageButton>
              </label>
              <input type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg" onChange={imageSelectHandler} />
            </AppStyle>
          </div>
          <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
            <div style={{ color: "black" }}></div>
            <hr />
            <div style={{ marginTop: "10px" }}></div>
            <EditButton onClick={saveInfo}>수정</EditButton>
          </div>
        </UserInfo>
      </div>
    </div>
  );
  // );
}

const AppStyle = styled.div`
  margin: 0 8px 0 8px;
  img {
    max-width: 325px;
  }
  /* label {
    display: inline-block;
    font-size: inherit;
    line-height: normal;
    vertical-align: middle;
    cursor: pointer;
  } */
  input[type="file"] {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
