export interface IndexPage {
  borad_id: number;
  content: string;
  date: string;
  description: string;
  likes_count: number;
  title: string;
  tags: [];
}
export interface getComment {
  comments: string;
  borad_id: number;
}
export interface getReComment {
  comment_id: number;
  comments: [];
}
export interface DeleteComment {
  borad_id: number;
}
export interface DeleteReComment {
  comment_id: number;
}
export interface CreateComment {
  content: string;
  borad_id: number;
  comment_status: number;
}
export interface CreateReComment {
  content: string;
  comment_id: number;
  recomment_status: number;
}
