import axiosInstance from "./axios";

export async function getBranchData():Promise<any> {
  const getBranch = await axiosInstance.get("branch/allBranch");
  return Promise.resolve(getBranch);
};

