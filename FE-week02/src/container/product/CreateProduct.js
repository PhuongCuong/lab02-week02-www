import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import "./CreateProduct.scss";
import { insertEmpl } from "../../services/productService";
import { toast } from "react-toastify";

const CreateProduct = () => {
  return (
    <div className="container">
      <Nav />
      <div className="manager-title">Thêm mới sản phẩm</div>
      <div className="form-create-empl">
        <div className="row">
          <div className="col-12">
            <label className="form-label">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              // value={dataform ? dataform.fullName : ""}
              // onChange={(event) => handleOnChange(event, "fullName")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">mô tả</label>
            <input
              type="email"
              className="form-control"
              // value={dataform ? dataform.email : ""}
              // onChange={(event) => handleOnChange(event, "email")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Nhà xuất bản</label>
            <input
              type="text"
              className="form-control"
              // value={dataform ? dataform.phone : ""}
              // onChange={(event) => handleOnChange(event, "phone")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Giá</label>
            <input
              type="text"
              className="form-control"
              // value={dataform ? dataform.phone : ""}
              // onChange={(event) => handleOnChange(event, "phone")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">đơn vị</label>
            <input
              type="text"
              className="form-control"
              // value={dataform ? dataform.address : ""}
              // onChange={(event) => handleOnChange(event, "address")}
            />
          </div>
        </div>
      </div>
      <div className="form-btn">
        <button
          className="btn-save btn btn-primary"
          // onClick={() => handleSave()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
