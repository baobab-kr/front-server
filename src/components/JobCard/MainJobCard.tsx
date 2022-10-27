import React from "react";
import { MainJobCardWrapper } from "./style";
import { SiTesla, SiNaver, SiFacebook } from "react-icons/si";

type tProps = {
  title: string;
  경력: string;
  wlrrms: string;
  logo: string;
};
export default function MainJobCard({ title, 경력, wlrrms, logo }: tProps): JSX.Element {
  const logoOrder = () => {
    switch (logo) {
      case "tesla":
        return <SiTesla size={45} />;
      case "naver":
        return <SiNaver size={45} />;
      case "meta":
        return <SiFacebook size={45} />;
    }
  };
  return (
    <MainJobCardWrapper>
      <div style={{ width: "70px", display: "flex", justifyContent: "center" }}>{logoOrder()}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>{wlrrms}</p>
        <p style={{ fontSize: "12px" }}>{title}</p>
        <p style={{ fontSize: "12px" }}>{경력}</p>
      </div>
    </MainJobCardWrapper>
  );
}
