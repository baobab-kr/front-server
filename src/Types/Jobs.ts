export interface tJob {
  id: number;
  companyName: string;
  managerName: string;
  managerContact: string;
  license: string;
  field: string;
  title: string;
  logo: string;
  location: string;
  message: string;
  talent: string;
  careerType: number;
  url: string;
  salary: string;
  startDate: string | null;
  endDate: string | null;
  approvalStatus: number;
  jobStatus: number;
}

export interface tDetailJob {
  id: number;
  companyName: string;
  managerName: string;
  managerContact: string;
  license: string;
  field: string;
  title: string;
  logo: string;
  location: string;
  message: string;
  talent: string;
  careerType: number;
  url: string;
  salary: string;
  startDate: string;
  endDate: string;
  approvalStatus: number;
  jobStatus: number;
  user_id: tManager;
}

export interface tManager {
  userid: string;
  username: string;
  role: number;
  avatar_image: any;
}

export interface tAutoUser {
  email: string;
  techStack: string | null;
  socialUrl: string | null;
}

export interface tApplyJob {
  id: number;
  jobs_Id: JobsId;
  user_id: number;
  title: string;
  name: string;
  email: string;
  techStack: string;
  careerYear: number | null;
  resumeUrl: string;
  socialUrl: string;
  profile: string;
  education: number;
  educationStatus: number;
}

export interface JobsId {
  id: number;
  companyName: string;
  managerName: string;
  managerContact: string;
  license: string;
  field: string;
  title: string;
  logo: string;
  location: string;
  message: string;
  talent: string;
  careerType: number;
  url: string;
  salary: string;
  startDate: string;
  endDate: string;
  approvalStatus: number;
  jobStatus: number;
}
