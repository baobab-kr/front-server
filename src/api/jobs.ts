import { tApplyJob, tAutoUser, tDetailJob, tJob } from "Types/Jobs";
import API from ".";

export function CreateJob(body: any): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.post("/jobs/CreateJobs", body)
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getJobsBoardAll(body: any): Promise<tJob[]> {
  console.log(body);
  return new Promise<tJob[]>((resolve, reject) => {
    API.get("/jobs/getJobsAll", { params: { ...body } })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getJobsBoardForAdmin(body: any): Promise<tJob[]> {
  console.log(body);
  return new Promise<tJob[]>((resolve, reject) => {
    API.get("/jobs/getJobsAll_ForServiceAdmin", { params: { page: body } })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getJobsBoardForHeadHunt(body: any): Promise<tJob[]> {
  return new Promise<tJob[]>((resolve, reject) => {
    API.get("/jobs/getJobs_inUser_forHeadHunt", { params: { ...body } })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function approvalJobsBoardForAdmin(_id: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.patch("/jobs/Approval_Jobs_ForServiceAdmin", { id: _id })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function deleteJobsBoardForAdmin(_id: number): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.delete("/jobs/Delete_Jobs_ForServiceAdmin", { data: { id: _id } })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getJobsBoardDetail(id: number): Promise<tDetailJob> {
  return new Promise<tDetailJob>((resolve, reject) => {
    API.get("/jobs/GetJobs", { params: { id: id } })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function CreateApplyJob(body: any): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.post("/ApplyJob/CreateApplyJob", body)
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getAutoCompleteAPI(): Promise<tAutoUser> {
  return new Promise<tAutoUser>((resolve, reject) => {
    API.get("/ApplyJob/AutoCompleteAPI")
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getMyApplyJobs(): Promise<tApplyJob[]> {
  return new Promise<tApplyJob[]>((resolve, reject) => {
    API.get("/ApplyJob/GetMyApplyJobs")
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function getApplyJobDetail(id: number): Promise<tApplyJob> {
  return new Promise<tApplyJob>((resolve, reject) => {
    API.get("/ApplyJob/GetApplyJob", { params: { id: id } })
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function UpdateApplyJob(body: any): Promise<tApplyJob[]> {
  return new Promise<tApplyJob[]>((resolve, reject) => {
    API.patch("/ApplyJob/UpdateApplyJob", body)
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

export function UpdateJobs(body: any): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    API.patch("/jobs/UpdateJobs", body)
      .then((res) => {
        if (res.data.message) {
          reject(res.data.message);
        }
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

// export function getJobsBoard(page: number): Promise<Board[]> {
//   return new Promise<Board[]>((resolve, reject) => {
//     API.get("/board/BoardMain", { page: page })
//       .then((res) => {
//         if (res.data.message) {
//           reject(res.data.message);
//         }
//         resolve(res.data);
//       })
//       .catch((err) => {
//         reject(err.response);
//       });
//   });
// }
