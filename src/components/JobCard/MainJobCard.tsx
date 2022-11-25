import React from "react";
import { MainJobCardWrapper, MainCardColor } from "./style";
import { SiTesla, SiNaver, SiFacebook } from "react-icons/si";

type tProps = {
  title: string;
  경력: string;
  wlrrms: string;
  logo: any;
};
export default function MainJobCard({ title, 경력, wlrrms, logo }: tProps): JSX.Element {
  return (
    <MainJobCardWrapper>
      <div style={{ width: "70px", display: "flex", justifyContent: "center" }}>{logo}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <MainCardColor>{wlrrms}</MainCardColor>
        <MainCardColor>{title}</MainCardColor>
        <MainCardColor>{경력}</MainCardColor>
      </div>
    </MainJobCardWrapper>
  );
}
