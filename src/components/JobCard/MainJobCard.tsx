import React from "react";
import { MainJobCardWrapper } from "./style";
import { SiTesla, SiFacebook, SiNaver } from "react-icons/si";

export default function MainJobCard(): JSX.Element {
  return (
    <MainJobCardWrapper>
      <div style={{ width: "70px", display: "flex", justifyContent: "center" }}>
        <SiTesla size={45} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <p>[Tesla] Front-end Engineer</p>
        <p style={{ fontSize: "12px" }}>Tesla</p>
        <p style={{ fontSize: "12px" }}>신입, 대졸이상</p>
      </div>
    </MainJobCardWrapper>
  );
}
