import React, { useState, useEffect } from "react";
import { MainJobCardWrapper, MainCardColor } from "./style";
import { useNavigate } from "react-router-dom";
import { SiTesla, SiNaver, SiFacebook } from "react-icons/si";

type tProps = {
  title: string;
  description: string;
  wlrrms: string;
  logo: any;
  id: number | null;
};
export default function MainJobCard({ id, title, description, wlrrms, logo }: tProps): JSX.Element {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    if (description.length > 39) {
      setMessage(message.slice(0, 39) + "...");
      // setMessage(description);
    } else {
      setMessage(description);
    }
  }, [description]);

  const navigateJob = () => {
    if (id) {
      navigate(`/jobs/${id}`);
    }
  };

  return (
    <MainJobCardWrapper onClick={navigateJob}>
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
