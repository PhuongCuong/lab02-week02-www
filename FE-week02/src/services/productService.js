import axios from "./axios";

const getAllProduct = () => {
  return axios.get("/api/products");
};

const getAllProductbystatus = () => {
  return axios.get("/api/products/by-status");
};

const deleteProduct = (id) => {
  return axios.put(`/api/products/delete/${id}`);
};

const updateProduct = (product) => {
  return axios.put(`/api/products/update-product/${product.id}`, product);
};

const insertProductPrice = (price) => {
  return axios.post("/api/products/create-productprice", price);
};

const insertAllProduct = (product, price, productImg) => {
  return axios.post(
    "/api/products/insert-product-price",
    product,
    price,
    productImg
  );
};

const insertProduct = (product) => {
  return axios.post("/api/products/insert-product", product);
};

const insertProductImg = (product) => {
  return axios.post("/api/products/insert-product-img", product);
};

export {
  getAllProduct,
  getAllProductbystatus,
  deleteProduct,
  updateProduct,
  insertProductPrice,
  insertAllProduct,
  insertProduct,
  insertProductImg,
};
