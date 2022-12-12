import React, { useState, useEffect } from "react";
import { CardWrapper, CardImageArea, CardImage, CardFooter, CardLogo, CardLogoImg, CardTitle, CardName, CardIntro, CardDetail } from "./style";
import de from "../../baobab-data/develop1.jpg";
import teslalogo from "../../baobab-data/tesla128.png";
import { useNavigate } from "react-router-dom";
import { tJob } from "Types/Jobs";

type Props = {
  jobItem: tJob;
  board: number;
  width: string;
  height: string;
  imgHeight: string;
  isMyHome: boolean;
  previewLogo: string;
  deleteBoard: (id: number) => void;
};

export default function JobCard({ jobItem, board, width, height, isMyHome, deleteBoard, previewLogo, imgHeight }: Props): JSX.Element {
  const navigate = useNavigate();
  const [logo, setLogo] = useState<string>("");

  const routeDetailPage = () => {
    if (board === -1) return;
    navigate(`/jobs/${board}`);
  };
  const orderType = (type: number) => {
    switch (type) {
      case 0:
        return "경력무관";
      case 1:
        return "인턴";
      case 2:
        return "신입";
      case 3:
        return "경력";
      default:
        return "경력무관";
    }
  };

  return (
    <CardWrapper>
      <div>
        <div className="card--heard">
          <div style={{ position: "relative" }}>
            <CardImageArea onClick={routeDetailPage}>
              {jobItem.logo !== "" && <CardImage src={`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${jobItem.logo}`} alt="logo" />}
              {previewLogo !== "" && <CardImage src={previewLogo} alt="logo" />}
            </CardImageArea>
          </div>
        </div>
        <CardFooter>
          <div>
            <CardLogo>
              {jobItem.logo !== "" && <CardLogoImg src={`${process.env.REACT_APP_API_ROOT}/jobs/getToastImage?file_name=${jobItem.logo}`} alt="logo" />}
              {previewLogo !== "" && <CardImage src={previewLogo} alt="logo" />}
            </CardLogo>
            <CardTitle>
              <div className="jobLink">
                [{jobItem.companyName}] {jobItem.field}
              </div>
              <div style={{ padding: "6px 0 8px" }}>
                <CardName>{jobItem.title}</CardName>
                <div className="location">{jobItem.location}</div>
              </div>
            </CardTitle>
          </div>
          <div style={{ width: "290px", lineBreak: "anywhere" }}>
            <CardIntro>{jobItem.message}</CardIntro>
          </div>
          <CardDetail>
            <div className="experience">{orderType(jobItem.careerType)}</div>
            <div className="period">{jobItem.salary}만원</div>
            <div className="field">{jobItem.field}</div>
          </CardDetail>
        </CardFooter>
      </div>
    </CardWrapper>
  );
}
