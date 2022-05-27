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
  writer: Writer | null;
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
}

export interface TagCount {
  tag_name: string;
  tag_count: string;
}

export interface Like {
  id: number;
  likes_status: number;
}
