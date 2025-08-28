import axiosInstance from "./axios";

export async function getSumQuestion(year: string) {
  const getList = await axiosInstance.patch("formQuestion/summary", {
    year,
  });

  console.log(getList.data.data);
  return getList.data.data;
}
