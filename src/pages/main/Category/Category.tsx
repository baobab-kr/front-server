import React, { useState, useEffect } from "react";
import { List, ListHeader } from "./style";

export default function Category(): JSX.Element {
  const [open, setOpen] = useState<number>(0);

  const openHandler = (index: number) => {
    setOpen(index);
  };
  return (
    <>
      {AccordionSet.map((q, index) => {
        return (
          <div key={index} style={{ gap: "10px", display: "flex", flexDirection: "column", transition: "all 0.4s cubic-bezier(0.65, 0.9, 0.3, 0.95)" }}>
            <ListHeader
              open={index === open}
              onClick={() => {
                openHandler(index);
              }}
            >
              {q.title}
            </ListHeader>

            <List open={index === open}>
              {q.list.map((item, itemI) => {
                return <li key={`${item}-${itemI}`}>{item}</li>;
              })}
            </List>
          </div>
        );
      })}
    </>
  );
}
const AccordionSet = [
  { title: "관심 카테고리", list: ["웹 개발", "Javascript", "React", "Vue.js", "Database"] },
  { title: "개발", list: ["일반 개발", "웹 개발", "Javascript", "React", "Vue.js", "Database"] },
  { title: "기획", list: ["일반 기획", "서비스 기획", "전략 기획", "프로젝트 관리"] },
  { title: "디자인", list: ["일반 디자인", "인스퍼레이션", "UI/UX", "UX"] },
  { title: "마케팅", list: ["일반 마케팅", "브렌드 마케팅", "퍼포먼스 마케팅", "콘텐츠 마케팅"] },
  { title: "스타트업", list: ["일반 스타트업", "기업 문화", "비즈니스", "CX", "기업가 정신", "투자"] },
];
