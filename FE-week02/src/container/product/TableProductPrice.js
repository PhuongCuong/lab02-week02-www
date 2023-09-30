import React, { useState, useEffect } from "react";
import { FaTrashAlt, FaPenSquare } from "react-icons/fa";
import "./TableProduct.scss";
import ModalProductPrice from "./ModalProductPrice";

const TableProductPrice = (props) => {
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

  let handleUpdateEml = async (price) => {
    let data = await props.handleUpdateEmpl(price);
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
                <td>{item.price ? item.price[0].price : ""}</td>
                <td
                  className="items-img"
                  style={{
                    backgroundImage: `url(${
                      item.image ? item.image[0].path : ""
                    })`,
                  }}
                ></td>
                <td>
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
      <ModalProductPrice
        showmodals={handleShowmodal}
        setshowmodal={showmodal}
        emplupdate={emplupdate}
        handleUpdateEml={handleUpdateEml}
      />
    </div>
  );
};

export default TableProductPrice;
