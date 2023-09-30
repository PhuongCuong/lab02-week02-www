import React, { useState, useEffect } from "react";
import moment from "moment";
import { FaTrashAlt, FaPenSquare } from "react-icons/fa";
import ModuleEmployee from "./ModuleEmployee";

const TableEmployee = (props) => {
  const [getAllemp, setAllempl] = useState([]);
  const [showmodal, setshowmodal] = useState(false);
  const [emplupdate, setemplupdate] = useState({});

  let handleDelete = async (item) => {
    if (item) {
      props.deleteempls(item.id);
    }
  };

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

  let handleUpdateEml = async (dataupdate) => {
    let data = await props.handleUpdateEmpl(dataupdate);
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
            <th scope="col">Ngày sinh</th>
            <th scope="col">email</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Số điện thoại</th>
            <th scope="col">Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {getAllemp.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index++}</th>
                <td>{item.id}</td>
                <td>{moment(item.dob).format("DD/MM/YYYY")}</td>
                <td>{item.email}</td>
                <td>{item.fullName}</td>
                <td>{item.phone}</td>
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
      <ModuleEmployee
        showmodals={handleShowmodal}
        setshowmodal={showmodal}
        emplupdate={emplupdate}
        handleUpdateEml={handleUpdateEml}
      />
    </div>
  );
};

export default TableEmployee;
