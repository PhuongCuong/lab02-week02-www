import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import "./ManagerEmployee.scss";
import TableEmployee from "./TableEmployee";
import { getAllemplbystatus } from "../../services/employeeService";
import { deleteEmpl, updateEmpl } from "../../services/employeeService";
import { toast } from "react-toastify";

const ManagerEmployee = () => {
  const [emplAll, setemplAll] = useState([]);

  let deleteEmpls = async (id) => {
    let check = await deleteEmpl(id);
    if (check && check.data === "ok") {
      toast.success("delete success!");
      await getAllempl();
    }
  };

  let getAllempl = async () => {
    let data = await getAllemplbystatus();
    if (data) {
      setemplAll(data.data);
    }
  };

  let handleUpdateEmpl = async (dataupdate) => {
    let data = await updateEmpl(dataupdate);
    if (data && data.data === "ok") {
      toast.success("update success!");
      await getAllempl();
    } else {
      toast.error("update error");
    }
  };

  // let refeshgetAllemp = async () => {
  //   let data = await getAllemplbystatus();
  //   if (data) {
  //     setemplAll(data.data);
  //   }
  // };

  useEffect(() => {
    getAllempl();
  }, []);

  return (
    <div className="container">
      <Nav />
      <div className="manager-title">Quản lý nhân viên</div>
      <div className="table-manager">
        <TableEmployee
          getAll={emplAll}
          deleteempls={deleteEmpls}
          handleUpdateEmpl={handleUpdateEmpl}
        />
      </div>
    </div>
  );
};

export default ManagerEmployee;
