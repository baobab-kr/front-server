export type tStepFirst = {
  BusinessLicense: FileList | null;
  ManagerName: string;
  ManagerEMail: string;
  ManagerPhone: string;
  URL: string;
};

export type tStepSecond = {
  Field: string;
  Title: string;
  CompanyLogo: FileList | null;
  Image: FileList | null;
  CompanyName: string;
  Location: string;
  Message: string;
  StartDate: string | null;
  EndDate: string | null;
  Salary: string;
  InfoURL: string;
  talent: string;
  /**
   * 경력 여부
   */
  Type: number;
};
