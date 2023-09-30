import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import "./ModalProduct";
import { toast } from "react-toastify";
import {
  getAllProductbystatus,
  insertProductPrice,
} from "../../services/productService";
import TableProductPrice from "./TableProductPrice";

const UpdateProductPrice = () => {
  const [emplAll, setemplAll] = useState([]);

  let getAllempl = async () => {
    let data = await getAllProductbystatus();
    if (data) {
      setemplAll(data.data);
    }
  };

  let handleUpdateEmpl = async (price) => {
    let data1 = await insertProductPrice(price);

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
      <div className="manager-title">Quản lý giá sản phẩm</div>
      <div className="table-manager">
        <TableProductPrice
          getAll={emplAll}
          handleUpdateEmpl={handleUpdateEmpl}
        />
      </div>
    </div>
  );
};

export default UpdateProductPrice;
