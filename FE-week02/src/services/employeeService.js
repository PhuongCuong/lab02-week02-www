import axios from './axios';

const getAllEmp = () => {
    return axios.get("/api/employee")
}

export {
    getAllEmp
}