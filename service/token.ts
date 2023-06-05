import axiosInstance from "./axios";

export async function getTokenData(id) {
  try {
    const getToken = await axiosInstance.get(`events/getToken/${id}`);
    return Promise.resolve(getToken);
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function sendToken(body: any) {
  try {
    const sendToken = await axiosInstance.post(`events/enterToken`, body);
    return Promise.resolve(sendToken);
  } catch (error) {
    return Promise.reject(error);
  }
}
