import React, { useState, useEffect } from "react";
import { SwitchContainer, Mode, Divider } from "./style";
import { useRecoilState } from "recoil";
import { useLocation } from "react-router-dom";

import Darkmode from "../../store/store.theme";

export default function ThemeSwitch(): JSX.Element {
  const disalbeLocation = ["/editor"];
  const location = useLocation();

  const [darkMode, setDarkMode] = useRecoilState<boolean>(Darkmode);

  const modeHandler = (state: boolean) => {
    localStorage.setItem("Theme", state ? "dark" : "light");
    setDarkMode(state);
  };

  useEffect(() => {
    const theme: string | null = localStorage.getItem("Theme");
    if (theme === null) {
      localStorage.setItem("Theme", darkMode ? "dark" : "light");
    }
  }, []);

  console.log(location.pathname);
  return (
    <>
      {!disalbeLocation.includes(location.pathname) && (
        <SwitchContainer>
          <Mode isSelected={!darkMode} onClick={() => modeHandler(false)}>
            LIGHT
          </Mode>
          <Divider />
          <Mode isSelected={darkMode} onClick={() => modeHandler(true)}>
            DARK
          </Mode>
        </SwitchContainer>
      )}
    </>
  );
}
