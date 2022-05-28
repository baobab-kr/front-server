export interface signup {
  id: number;
  userid: string;
  username: string;
  email: string;
}

export interface userName {
  username: string;
}

export interface id {
  id: string;
}
export interface email {
  email: string;
}

export interface emailCode {
  username: string;
  email: string;
}
export interface register {
  userid: string;
  email: string;
  username: string;
  password: string;
  inputVerifyCode: string;
}
