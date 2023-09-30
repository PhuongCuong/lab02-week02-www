import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import "./ManagerCustomer.scss";
import TableCustormer from "./TableCustormer";
import { getAllCus, updateCus } from "../../services/CustomerService";
import { toast } from "react-toastify";

const ManagerCustomer = () => {
  const [emplAll, setemplAll] = useState([]);

  let getAllempl = async () => {
    let data = await getAllCus();
    if (data) {
      setemplAll(data.data);
    }
  };

  let handleUpdateEmpl = async (dataupdate) => {
    let data = await updateCus(dataupdate);
    if (data && data.data === "ok") {
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
      <div className="manager-title">Quản lý khác hàng</div>
      <div className="table-manager">
        <TableCustormer getAll={emplAll} handleUpdateEmpl={handleUpdateEmpl} />
      </div>
    </div>
  );
};

export default ManagerCustomer;
