import { atom } from "recoil";
import { user } from "../Types/user";

const USER = atom<user>({
  key: "user",
  default: {
    id: -1,
    userid: "",
    username: "",
    email: "",
    role: null,
    description: null,
    avatar_image: null,
    socialUrl: "",
    techStack: "",
  },
});

export default USER;
