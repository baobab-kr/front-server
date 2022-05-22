import React, { useState, useRef, useEffect, ReactNode } from "react";
import { PuffLoader } from "react-spinners";

import { boardInfo } from "@src/Types";
import { TopButton } from "./style";

import { FiArrowUp } from "react-icons/fi";

type Props = {
  children: ReactNode;
  loadFnc: () => void;
  data: boardInfo[];
};
export default function InfiniteScroll({ loadFnc, data, children }: Props): JSX.Element {
  const [isTopButton, setIsTopButton] = useState<boolean>(false);

  // ref
  const observerRef = useRef<IntersectionObserver>();
  const target = useRef<HTMLDivElement>(null);

  // useEffect
  useEffect(() => {
    window.addEventListener("scroll", handleScrollThrottle);

    return () => {
      window.removeEventListener("scroll", handleScrollThrottle);
    };
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(intersectionObserver); // IntersectionObserver
    target.current && observerRef.current.observe(target.current);
  }, [data]);

  // IntersectionObserver 설정
  const intersectionObserver = (entries: IntersectionObserverEntry[], io: IntersectionObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 관찰하고 있는 entry가 화면에 보여지는 경우
        io.unobserve(entry.target); // entry 관찰 해제
        loadFnc(); // 데이터 가져오기
      }
    });
  };

  const topScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollThrottle = () => {
    console.log(window.scrollY);
    if (window.scrollY > 100) {
      setIsTopButton(true);
    } else {
      setIsTopButton(false);
    }
  };

  return (
    <>
      {children}
      <div ref={target} style={{ height: "150px", width: "100%" }}>
        <div style={{ height: "150px", textAlign: "center", color: "black" }}>
          <PuffLoader color="#ffffff" />
        </div>
      </div>
      {isTopButton && (
        <TopButton onClick={topScroll}>
          <FiArrowUp size={25} color={"#1d1d1d"} />
        </TopButton>
      )}
    </>
  );
}
