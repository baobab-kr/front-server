import React, { useState, useEffect } from "react";
import { CardWrapper, CardImageArea, CardImage, CardFooter, CardLogo, CardLogoImg, CardTitle, CardName, CardIntro, CardDetail } from "./style";
import de from "../../baobab-data/develop1.jpg";
import teslalogo from "../../baobab-data/tesla128.png";
import { useNavigate } from "react-router-dom";
import { tApplyJob, tJob } from "Types/Jobs";
import { user } from "Types/user";

type Props = {
  jobItem: tApplyJob;
  board: number;
  width: string;
  height: string;
  imgHeight: string;
  isMyHome: boolean;
  deleteBoard: (id: number) => void;
};

export default function ApplyJobCard({ jobItem, board, width, height, isMyHome, deleteBoard, imgHeight }: Props): JSX.Element {
  const userInfo: user | null = JSON.parse(localStorage.getItem("user")!) || null;

  const navigate = useNavigate();
  const [logo, setLogo] = useState<string>("");

  const routeDetailPage = () => {
    // navigate(`/apply/${board}`);
    navigate(`/@${userInfo?.userid}/my-apply-jobs/${jobItem.id}`);
  };
  const orderType = (type: number | null) => {
    if (type === null) return "신입";
    else return `${type}년차`;
  };
  const educationOrder = (edu: number, edustatus: number) => {
    let education = "";
    let status = edustatus === 0 ? "졸업 예정" : "졸업";
    if (edu === 0) {
      education = "중학교";
    } else if (edu === 1) {
      education = "고등학교";
    } else if (edu === 2) {
      education = "전문학사";
    } else if (edu === 3) {
      education = "학사";
    } else if (edu === 4) {
      education = "석사";
    } else {
      education = "박사";
    }

    return `${education} ${status}`;
  };

  return (
    <CardWrapper>
      <div>
        <div className="card--heard">
          <div style={{ position: "relative" }}>
            <CardImageArea onClick={routeDetailPage}>
              <CardImage src={`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${jobItem.jobs_Id.logo}`} alt="logo" />
            </CardImageArea>
          </div>
        </div>
        <CardFooter>
          <div>
            <CardLogo>
              <CardLogoImg src={`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${jobItem.jobs_Id.logo}`} alt="logo" />
            </CardLogo>
            <CardTitle>
              <div className="jobLink">{jobItem.jobs_Id.field}</div>
              <div style={{ padding: "6px 0 8px" }}>
                <CardName>{jobItem.jobs_Id.companyName}</CardName>
                <div className="location">{jobItem.jobs_Id.location}</div>
              </div>
            </CardTitle>
          </div>
          <CardIntro>지원 요약</CardIntro>
          <CardDetail>
            <div className="experience"> 경력 : {orderType(jobItem.careerYear)}</div>
            <div className="period">학력: {educationOrder(jobItem.education, jobItem.educationStatus)}</div>
            <div className="field">신청 직무 : {jobItem.jobs_Id.field}</div>
          </CardDetail>
        </CardFooter>
      </div>
    </CardWrapper>
  );
}
