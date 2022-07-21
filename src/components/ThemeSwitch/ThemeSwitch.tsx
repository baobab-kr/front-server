import React from "react";
import { SwitchContainer, Mode, Divider } from "./style";
import { useRecoilState } from "recoil";
import Darkmode from "../../store/store.theme";

export default function ThemeSwitch(): JSX.Element {
  const [darkMode, setDarkMode] = useRecoilState<boolean>(Darkmode);

  const modeHandler = (state: boolean) => {
    localStorage.setItem("Theme", state ? "dark" : "light");
    setDarkMode(state);
  };

  return (
    <SwitchContainer>
      <Mode isSelected={!darkMode} onClick={() => modeHandler(false)}>
        LIGHT
      </Mode>
      <Divider />
      <Mode isSelected={darkMode} onClick={() => modeHandler(true)}>
        DARK
      </Mode>
    </SwitchContainer>
  );
}
