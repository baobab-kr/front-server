import React, { useState, useEffect } from "react";
import { MainJobCardWrapper, MainCardColor } from "./style";
import { SiTesla, SiNaver, SiFacebook } from "react-icons/si";

type tProps = {
  title: string;
  경력: string;
  wlrrms: string;
  logo: any;
};
export default function MainJobCard({ title, 경력, wlrrms, logo }: tProps): JSX.Element {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    if (경력.length > 39) {
      setMessage(message.slice(0, 39) + "...");
      // setMessage(경력);
    } else {
      setMessage(경력);
    }
  }, [경력]);

  return (
    <MainJobCardWrapper>
      <div style={{ width: "70px", display: "flex", justifyContent: "center" }}>{logo}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <MainCardColor>{wlrrms}</MainCardColor>
        <MainCardColor>{title}</MainCardColor>
        <div style={{ width: "220px", lineBreak: "anywhere" }}>
          <MainCardColor>{message}</MainCardColor>
        </div>
      </div>
    </MainJobCardWrapper>
  );
}
