import axiosInstance from "./axios";

export async function getStudentList() {
  const getList = await axiosInstance.get("student/allStudent");
  return getList;
}

export async function getStudent(studentID: string) {
  const getList = await axiosInstance.get(`student/oneStudenID/${studentID}`);
  return getList;
}
