import axiosInstance from "./axios";

export async function getEventData(): Promise<any> {
  const getEvent = await axiosInstance.get("events/allEvents");
  return Promise.resolve(getEvent);
}

export async function getEventBranchData(id: string) {
  const getEventBranch = await axiosInstance.get(
    `events/allEvents/branch/${id}`
  );
  return Promise.resolve(getEventBranch);
}

export async function getAllEventStudentData() {
  const getAllEventStudent = await axiosInstance.get(
    `events/allEvents/Student`
  );
  return Promise.resolve(getAllEventStudent);
}

export async function getEventsJoin(id: number) {
  const getEvent = await axiosInstance.get(`events/findStudentEvent/${id}`);
  return Promise.resolve(getEvent);
}

export async function getEventOfStudent(eventID: number) {
  const getEvent = await axiosInstance.get(`events/EventOfStudent/${eventID}`);
  return getEvent;
}
