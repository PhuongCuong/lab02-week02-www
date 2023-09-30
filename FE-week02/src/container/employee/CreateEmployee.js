import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import DatePicker from "react-datepicker";
import "./CreateEmployee.scss";
import { insertEmpl } from "../../services/employeeService";
import { toast } from "react-toastify";

const CreateEmployee = () => {
  const [dataform, setdataform] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    dob: "",
    status: "ACCTIVE",
  });

  const [selectedDate, setselectedDate] = useState(null);

  let handleOnChange = (event, id) => {
    setdataform({
      ...dataform,
      [id]: event.target.value,
    });
  };

  let handleDateChange = (date) => {
    setselectedDate(date);
    let timestamp = date.getTime();
    setdataform({
      ...dataform,
      dob: new Date(parseInt(timestamp)),
    });
  };

  let handleSave = async () => {
    let data = await insertEmpl(dataform);
    if (data && data.data === "ok") {
      toast.success("Create employee success!");
      setdataform({
        fullName: "",
        email: "",
        address: "",
        phone: "",
        dob: "",
        status: "ACCTIVE",
      });
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="manager-title">Thêm mới nhân viên</div>
      <div className="form-create-empl">
        <div className="row">
          <div className="col-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              value={dataform ? dataform.fullName : ""}
              onChange={(event) => handleOnChange(event, "fullName")}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={dataform ? dataform.email : ""}
              onChange={(event) => handleOnChange(event, "email")}
            />
          </div>
          <div className="col-6">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              value={dataform ? dataform.phone : ""}
              onChange={(event) => handleOnChange(event, "phone")}
            />
          </div>
          <div className="col-6">
            <label className="form-label">address</label>
            <input
              type="text"
              className="form-control"
              value={dataform ? dataform.address : ""}
              onChange={(event) => handleOnChange(event, "address")}
            />
          </div>

          <div className="col-6">
            <label className="form-label">status</label>
            <select
              className="form-control"
              value={dataform ? dataform.status : ""}
              onChange={(event) => handleOnChange(event, "status")}
            >
              <option value="ACCTIVE">ACCTIVE</option>
              <option value="DEACCTIVE">DEACCTIVE</option>
            </select>
          </div>
          <div className="col-6">
            <label className="form-label">Dob(ngày sinh)</label>
            <DatePicker
              className="form-control"
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
            />
          </div>
        </div>
      </div>
      <div className="form-btn">
        <button
          className="btn-save btn btn-primary"
          onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateEmployee;
