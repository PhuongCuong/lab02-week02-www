import axios from "./axios";

const getAllProduct = () => {
    return axios.get("/api/products")
}

export {
    getAllProduct
}