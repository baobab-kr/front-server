import { atom } from "recoil";

const Darkmode = atom<boolean>({
  key: "theme",
  default: true,
});

export default Darkmode;
