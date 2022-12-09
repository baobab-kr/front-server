import { user } from "Types/user";

export interface PersonalInfo {
  board: Board[];
  tagCount: TagCount[];
  writer: Writer;
}

export interface Board {
  id: number;
  title: string;
  description: string;
  content: string;
  thumbnail: string;
  views: number;
  date: string;
  board_status: number;
  likes_count: number;
  tags: Tag[];
  writer: user | null;
  likes: Like[];
}

export interface Tag {
  id: number;
  tag_name: string;
}

export interface Writer {
  id: number;
  userid: string;
  username: string;
  email: string;
  role: string;
  description: string;
  avatar_image: string;
  techStack: string;
  socialUrl: string;
}

export interface TagCount {
  tag_name: string;
  tag_count: string;
}

export interface Like {
  id: number;
  likes_status: number;
}

export interface ICreateBoard {
  title: string;
  description: string;
  content: string;
  board_status: number;
  thumbnail: string;
  tag_name: string[];
}
export interface IEditBoard {
  title: string;
  description: string;
  content: string;
  board_id: number;
  tag_name: string[];
}
