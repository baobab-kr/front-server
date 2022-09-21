import React from "react";
import { Board, Tag, Like } from "@src/Types/main";
import { CardWrapper, CardImageArea, CardImage, CardFooter, CardLogo, CardLogoImg, CardTitle, CardName, CardIntro, CardDetail } from "./style";
import de from "../../baobab-data/develop1.jpg";
import teslalogo from "../../baobab-data/tesla128.png";

type Props = {
  board: Board;
  width: string;
  height: string;
  imgHeight: string;
  isMyHome: boolean;
  deleteBoard: (id: number) => void;
};

export default function JobCard({ board, width, height, isMyHome, deleteBoard, imgHeight }: Props): JSX.Element {
  return (
    <CardWrapper>
      <div>
        <div className="card--heard">
          <div style={{ position: "relative" }}>
            <CardImageArea>
              <CardImage src={de} />
            </CardImageArea>
          </div>
        </div>
        <CardFooter>
          <div>
            <CardLogo>
              <CardLogoImg src={teslalogo} />
            </CardLogo>
            <CardTitle>
              <div className="jobLink">프로덕트 디자이너 (Product Designer)</div>
              <div style={{ padding: "6px 0 8px" }}>
                <CardName>Tesla</CardName>
                <div className="location">서울시 강남구</div>
              </div>
            </CardTitle>
          </div>
          <CardIntro>기술로 세상을 함께 변화 시킬 프로덕트 디자이너 (Product Designer) 를 찾습니다!</CardIntro>
          <CardDetail>
            <div className="experience">경력 1년 이상</div>
            <div className="period">상시채용</div>
            <div className="field">프론트엔드 엔지니어</div>
          </CardDetail>
        </CardFooter>
      </div>
    </CardWrapper>
  );
}
