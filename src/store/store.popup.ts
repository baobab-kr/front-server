import { atom } from "recoil";

const POPUP = atom<boolean>({
  key: "popup",
  default: false,
});

export default POPUP;
