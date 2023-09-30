import axios from "./axios";

const getAllCus = () => {
  return axios.get("/api/customer");
};

const updateCus = (empl) => {
  return axios.put(`/api/customer/update-cus/${empl.id}`, empl);
};

const insertCus = (empl) => {
  return axios.post("/api/customer/create-cus", empl);
};

export { getAllCus, updateCus, insertCus };
