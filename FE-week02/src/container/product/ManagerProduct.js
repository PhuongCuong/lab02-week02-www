import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import "./ModalProduct";
import { toast } from "react-toastify";
import {
  getAllProductbystatus,
  deleteProduct,
  updateProduct,
  insertProductPrice,
} from "../../services/productService";
import TableProduct from "./TableProduct";

const ManagerProduct = () => {
  const [emplAll, setemplAll] = useState([]);

  let getAllempl = async () => {
    let data = await getAllProductbystatus();
    if (data) {
      setemplAll(data.data);
    }
  };

  let deleteproduct = async (id) => {
    let check = await deleteProduct(id);
    if (check && check.data === "ok") {
      toast.success("delete success!");
      await getAllempl();
    }
  };

  let handleUpdateEmpl = async (product, price) => {
    let data1 = await updateProduct(product);

    if (data1 && data1.data === "ok") {
      toast.success("update success!");
      await getAllempl();
    } else {
      toast.error("update error");
    }
  };

  useEffect(() => {
    getAllempl();
  }, []);

  return (
    <div className="container">
      <Nav />
      <div className="manager-title">Quản lý sản phẩm</div>
      <div className="table-manager">
        <TableProduct
          getAll={emplAll}
          deleteempls={deleteproduct}
          handleUpdateEmpl={handleUpdateEmpl}
        />
      </div>
    </div>
  );
};

export default ManagerProduct;
