import axios from "./axios";

const getAllEmp = () => {
  return axios.get("/api/employee");
};

const getAllemplbystatus = () => {
  return axios.get("/api/employee/getall-empl-by-status");
};

const deleteEmpl = (id) => {
  return axios.put(`/api/employee/delete/${id}`);
};

const updateEmpl = (empl) => {
  return axios.put(`/api/employee/update-empl/${empl.id}`, empl);
};

const insertEmpl = (empl) => {
  return axios.post("/api/employee/create-empl", empl);
};

export { getAllEmp, deleteEmpl, getAllemplbystatus, updateEmpl, insertEmpl };
