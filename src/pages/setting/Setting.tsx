import React, { useState, useEffect } from "react";
import UnderLine from "components/UnderLine/UnderLine";
import Select from "react-select";
import { JOB_GROUP, USER_TYPE, USER_TYPE_SELECT } from "constants/index";
import { user } from "Types/user";
import API from "api";
import { FiEdit3, FiSettings } from "react-icons/fi";
import { MdBusinessCenter } from "react-icons/md";
import Avator from "components/Avator/Avator";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import Darkmode from "../../store/store.theme";

import * as S from "./style";
import { ModifySocialUrl, ModifyTechStack, ModifyDescription, getUserInfo, deleteAllPostsForJobs, deleteAllPostsForBoard, deleteUser } from "api/user";

type tProps = { value: string | number; label: string };
const formatOptionLabel = ({ value, label }: tProps) => (
  <div style={{ display: "flex", color: "black" }}>
    <div>{label}</div>
  </div>
);
export default function Setting(): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useRecoilState<boolean>(Darkmode);

  const [job, setJob] = useState<{ value: string; label: string }>(JOB_GROUP[0]);
  const [fileImage, setFileImage] = useState<string>("");
  const [fileList, setFileList] = useState<FileList>();
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const jobHandler = (props: any) => {
    setJob(props);
  };

  useEffect(() => {
    setUrl(userInfo?.socialUrl || "");
    setDescription(userInfo?.description || "");
    const techStack = JOB_GROUP.find((q) => q.label === userInfo?.techStack);
    setJob(techStack || JOB_GROUP[0]);
  }, []);

  const imageSelectHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileLists = e.target.files;
    if (fileLists !== null) {
      setFileImage(URL.createObjectURL(fileLists[0]));
      setFileList(fileLists);
    }
  };

  const modeHandler = (state: boolean) => {
    localStorage.setItem("Theme", state ? "dark" : "light");
    setDarkMode(state);
  };

  const saveProfile = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!fileList) return;
    const formData: any = new FormData();
    formData.append("profile", fileList![0]);
    formData.append("userid", `"${userInfo?.userid}"`);
    API({
      method: "post",
      url: "/users/upload-profile",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setFileImage("");
      })
      .catch(function (response) {
        alert(response);
      });
  };

  const saveTechStack = async () => {
    await ModifyTechStack(userInfo!.userid, job.label);
  };
  const saveSocialUrl = async () => {
    await ModifySocialUrl(userInfo!.userid, url);
  };
  const saveDescription = async () => {
    await ModifyDescription(userInfo!.userid, description);
  };

  const saveController = async (e: React.MouseEvent<HTMLDivElement>) => {
    await saveSocialUrl();
    await saveTechStack();
    await saveDescription();
    await saveProfile(e);

    await getUserInfo()
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      })
      .catch((err) => {
        localStorage.removeItem("atexpires");
        localStorage.removeItem("rtexpires");
        localStorage.removeItem("user");
      });

    window.location.reload();
  };

  const secession = async () => {
    await deleteAllPostsForJobs(userInfo!.id);
    await deleteAllPostsForBoard(userInfo!.id);
    await deleteUser(userInfo!.userid).then((res) => {
      localStorage.removeItem("atexpires");
      localStorage.removeItem("rtexpires");
      localStorage.removeItem("user");
      navigate("/");

      window.location.reload();
    });
  };

  return (
    <S.Wrapper>
      <S.ContentWrapper>
        <S.SettingArea>
          <S.Header>
            <h1 style={{ fontSize: "45px" }}>설정</h1>
            <h5>계정 관리와 상세 설정을 할 수 있어요.</h5>
          </S.Header>
          <S.SettingGroupArea>
            <S.SettingContainer>
              <S.GroupTitle>
                <div style={{ padding: "32px 0", fontSize: "25px" }}>계정 설정</div>
                <UnderLine color="white" margin="none" />
              </S.GroupTitle>
              <S.GroupItem>
                <div style={{ alignSelf: "start", marginTop: "20px" }}>프로필 사진</div>
                <S.ProfileArea htmlFor="ex_file">
                  {fileImage !== "" && (
                    <div style={{ maxWidth: "150px", maxHeight: "150px", width: "150px", height: "150px", borderRadius: "3%", overflow: "hidden" }}>
                      <img src={fileImage} style={{ width: "100%", height: "100%", objectFit: "cover" }} alt="avator"></img>
                    </div>
                  )}
                  {fileImage === "" && userInfo?.userid && <Avator user={userInfo} userId={userInfo?.userid} height="150px" width="150px" />}
                  <div className="profile-overlay"></div>
                  <div className="profile-btn">
                    <FiEdit3 size={35} />
                  </div>
                  <input type="file" id="ex_file" accept="image/jpg, image/png, image/jpeg" onChange={imageSelectHandler} />
                </S.ProfileArea>
              </S.GroupItem>
              <UnderLine color="white" margin="10px 0px 30px" />
              <S.GroupItem>
                <div style={{ alignSelf: "start", marginTop: "5px" }}>한 줄 소개</div>
                <div style={{ width: "300px", height: "150px" }}>
                  <S.CustomTextarea placeholder="소개글을 작성해보세요!" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
              </S.GroupItem>
              <UnderLine color="white" margin="20px 0px 0px" />
              <S.GroupItem>
                <div>테크 스택</div>
                <div style={{ width: "300px" }}>
                  <Select options={JOB_GROUP} formatOptionLabel={formatOptionLabel} onChange={jobHandler} value={job} />
                </div>
              </S.GroupItem>
              <UnderLine color="white" margin="none" />
              <S.GroupItem>
                <div>소셜 미디어</div>
                <S.CustomInput placeholder="www." value={url} onChange={(e) => setUrl(e.target.value)} />
              </S.GroupItem>
            </S.SettingContainer>
          </S.SettingGroupArea>
          <S.SettingGroupArea>
            <S.SettingContainer>
              <S.GroupTitle>
                <div style={{ padding: "32px 0", fontSize: "25px" }}>서비스 설정</div>
                <UnderLine color="white" margin="none" />
              </S.GroupTitle>
              <S.GroupItem>
                <div style={{ alignSelf: "start", marginTop: "20px" }}>테마</div>
                <S.ThemeArea>
                  <S.Mode isSelected={!darkMode} onClick={() => modeHandler(false)}>
                    light
                  </S.Mode>
                  <S.Mode isSelected={darkMode} onClick={() => modeHandler(true)}>
                    dark
                  </S.Mode>
                </S.ThemeArea>
              </S.GroupItem>
            </S.SettingContainer>
          </S.SettingGroupArea>
          <S.ActionArea>
            <S.SaveBtn onClick={secession} style={{ backgroundColor: "#999999" }}>
              회원 탈퇴
            </S.SaveBtn>
            <S.SaveBtn onClick={saveController}>정보 수정</S.SaveBtn>
          </S.ActionArea>
        </S.SettingArea>
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
