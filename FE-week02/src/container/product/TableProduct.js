import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaPenSquare } from "react-icons/fa";
import ModalProduct from "./ModalProduct";
import "./TableProduct.scss";
import _ from "lodash";

const TableProduct = (props) => {
  const [getAllemp, setAllempl] = useState([]);
  const [showmodal, setshowmodal] = useState(false);
  const [emplupdate, setemplupdate] = useState({});

  let handleShowmodal = (item) => {
    setemplupdate(item);
    setshowmodal(!showmodal);
  };

  let fgetAllemp = async () => {
    let data = await props.getAll;
    if (data) {
      setAllempl(data);
    }
  };

  let handleDelete = async (item) => {
    if (item) {
      props.deleteempls(item.id);
    }
  };

  let handleUpdateEml = async (product, price) => {
    let data = await props.handleUpdateEmpl(product, price);
    await handleShowmodal();
  };

  useEffect(() => {
    fgetAllemp();
  }, [props.getAll]);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">ID</th>
            <th scope="col">Tên sách</th>
            <th scope="col">Giá</th>
            <th scope="col">Image</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {getAllemp.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index++}</th>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  {item && item.price && !_.isEmpty(item.price)
                    ? item.price[0].price
                    : ""}
                </td>
                <td
                  className="items-img"
                  style={{
                    backgroundImage: `url(${
                      item.image ? item.image[0].path : ""
                    })`,
                  }}
                ></td>
                <td>{item.status}</td>
                <td>
                  <button
                    style={{ margin: "0 5px" }}
                    className="btn btn-primary"
                    onClick={() => handleDelete(item)}
                  >
                    <FaTrashAlt />
                    Delete
                  </button>
                  <button
                    style={{ margin: "0 5px" }}
                    className="btn btn-warning"
                    onClick={() => handleShowmodal(item)}
                  >
                    <FaPenSquare />
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ModalProduct
        showmodals={handleShowmodal}
        setshowmodal={showmodal}
        emplupdate={emplupdate}
        handleUpdateEml={handleUpdateEml}
      />
    </div>
  );
};

export default TableProduct;
