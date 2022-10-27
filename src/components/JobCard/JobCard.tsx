import React from "react";
import { CardWrapper, CardImageArea, CardImage, CardFooter, CardLogo, CardLogoImg, CardTitle, CardName, CardIntro, CardDetail } from "./style";
import de from "../../baobab-data/develop1.jpg";
import teslalogo from "../../baobab-data/tesla128.png";
import { useNavigate } from "react-router-dom";

type Props = {
  board: number;
  width: string;
  height: string;
  imgHeight: string;
  isMyHome: boolean;
  deleteBoard: (id: number) => void;
};

export default function JobCard({ board, width, height, isMyHome, deleteBoard, imgHeight }: Props): JSX.Element {
  const navigate = useNavigate();

  const location = ["서울시 강남구", "경기도 성남시", "서울시 송파구", "서울시 송파구"];
  const jobs = ["프론트엔드 개발자", "서비스 기획자(PM/PO)", "UI/UX 디자이너", "디자인 팀 리더"];
  const CardIntros = [
    "AR/VR Development UNREAL Engine Front-end Development",
    "국내 1등 관리형 에듀테크 스타트업 IHFB에서 '교육 격차'라는 버그를 잡을 멋진 동료를 찾습니다 ",
    "우리 모두에게 필요한 커리어 플랫폼을 함께 만들어 가실 새로운 팀원을 기다립니다. 관심 있으신 분이라면 누구든지 환영해요. 😊",
    "프로덕트 기획과 브랜드 경험, 고객 중심 디자인 등 디자인 영역 전반에 걸쳐 역량을 갖춘 디자인 팀 리더 분이 꼭 필요한 시점이 왔습니다.",
  ];
  const 경력s = ["경력 1년 이상", "경력 5 - 8년", "신입", "경력 5 - 8년"];
  const periods = ["채용시까지", "마감 11월 21일", "상시채용", "마감 11월 26일"];
  const 회사명s = ["BLOCERY", "cheery", "HYENKWANG", "JBROHOLDINGS"];

  const routeDetailPage = () => {
    navigate(`/jobs/${board}`);
  };
  return (
    <CardWrapper>
      <div>
        <div className="card--heard">
          <div style={{ position: "relative" }}>
            <CardImageArea onClick={routeDetailPage}>
              <CardImage src={require(`../../jobimages/job${board % 9}.png`)} />
            </CardImageArea>
          </div>
        </div>
        <CardFooter>
          <div>
            <CardLogo>
              <CardLogoImg src={require(`../../jobimages/job${board % 9}.png`)} />
            </CardLogo>
            <CardTitle>
              <div className="jobLink">{jobs[board % 4]}</div>
              <div style={{ padding: "6px 0 8px" }}>
                <CardName>{회사명s[board % 4]}</CardName>
                <div className="location">{location[board % 4]}</div>
              </div>
            </CardTitle>
          </div>
          <CardIntro>{CardIntros[board % 4]}</CardIntro>
          <CardDetail>
            <div className="experience">{경력s[board % 4]}</div>
            <div className="period">{periods[board % 4]}</div>
            <div className="field">{jobs[board % 4]}</div>
          </CardDetail>
        </CardFooter>
      </div>
    </CardWrapper>
  );
}
