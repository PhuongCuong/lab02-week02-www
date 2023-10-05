import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Cart.scss";

const Cart = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  let [arrProduct, setarrProduct] = useState([]);

  const [totalprice, settotalprice] = useState(0);

  useEffect(() => {
    setarrProduct(location.state);
  }, []);
  console.log("check state", arrProduct);

  useEffect(() => {
    let total = 0;
    for (let i = 0; i < arrProduct.length; i++) {
      total += arrProduct[i].price[0].price;
    }
    settotalprice(total);
  }, [arrProduct]);

  let handleOrder = () => {
    navigate("/form-order", { state: arrProduct });
  };

  console.log("check price", totalprice);

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
      <table className="table mt-3">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Img</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {arrProduct.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td
                  className="img-product"
                  style={{ backgroundImage: `url(${item.image[0].path})` }}
                ></td>
                <td>{item.name}</td>
                <td>{item.price[0].price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total-price">
        Tổng tiền:
        <span className="text-price">{totalprice}</span>
      </div>
      <div className="btn-order mt-4 d-flex justify-content-end">
        <button className="btn btn-primary" onClick={() => handleOrder()}>
          Đặt hàng
        </button>
      </div>
    </div>
  );
};

export default Cart;
