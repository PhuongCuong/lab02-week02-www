import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Order.scss";

const Order = () => {
  const location = useLocation();
  let [arrProduct, setarrProduct] = useState([]);
  useEffect(() => {
    setarrProduct(location.state);
  }, []);
  console.log(arrProduct);
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="text-title col-12 d-flex justify-content-center">
          <span>Thông tin đặt hàng</span>
        </div>
        <div className="col-6">
          <div className="col-12">
            <label className="form-label">Khách hàng</label>
            <select className="form-control">
              <option>kh 1</option>
            </select>
          </div>
          <div className="col-12">
            <label className="form-label">Nhân viên</label>
            <select className="form-control">
              <option>kh 1</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
