import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import { insertCus } from "../../services/CustomerService";
import { toast } from "react-toastify";

const CreateCustomer = () => {
  const [dataform, setdataform] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
  });

  let handleOnChange = (event, id) => {
    setdataform({
      ...dataform,
      [id]: event.target.value,
    });
  };

  let handleSave = async () => {
    let data = await insertCus(dataform);
    if (data && data.data === "ok") {
      toast.success("Create employee success!");
      setdataform({
        fullName: "",
        email: "",
        address: "",
        phone: "",
      });
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="manager-title">Thêm mới khách hàng</div>
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

export default CreateCustomer;
