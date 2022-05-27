export interface user {
  id: number;
  userid: string;
  username: string;
  email: string;
  role?: number | null;
  description?: string | null;
  avatar_image?: string | null;
}
