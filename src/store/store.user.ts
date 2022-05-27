import { atom } from "recoil";
import { user } from "../Types/user";

export const USER = atom<user>({
  key: "user",
  default: {
    id: 0,
    userid: "",
    username: "",
    email: "",
    role: null,
    description: null,
    avatar_image: null,
  },
});
