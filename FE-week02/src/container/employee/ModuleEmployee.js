import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "./ModuleEmployee.scss";
import DatePicker from "react-datepicker";

const ModuleEmployee = (props) => {
  const [dataupdate, setdataupdate] = useState({});
  const [selectedDate, setselectedDate] = useState(null);

  let handleOnChange = (event, id) => {
    setdataupdate({
      ...dataupdate,
      [id]: event.target.value,
    });
  };

  let handleUpdateEml = () => {
    if (dataupdate) {
      props.handleUpdateEml(dataupdate);
    }
  };

  useEffect(() => {
    setdataupdate(props.emplupdate);
    if (props.emplupdate && props.emplupdate.dob) {
      let date = new Date(props.emplupdate.dob);
      setselectedDate(date);
    } else {
      setselectedDate(null);
    }
  }, [props.emplupdate]);

  let handleDateChange = (date) => {
    setselectedDate(date);
    let timestamp = date.getTime();
    setdataupdate({
      ...dataupdate,
      dob: new Date(parseInt(timestamp)),
    });
  };

  return (
    <>
      <Modal show={props.setshowmodal} onHide={props.showmodals}>
        <Modal.Header>
          <Modal.Title>Update Nhân viên</Modal.Title>
          <button type="button" className="close" onClick={props.showmodals}>
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close alert</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                value={dataupdate ? dataupdate.fullName : ""}
                onChange={(event) => handleOnChange(event, "fullName")}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={dataupdate ? dataupdate.email : ""}
                onChange={(event) => handleOnChange(event, "email")}
              />
            </div>
            <div className="col-6">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={dataupdate ? dataupdate.phone : ""}
                onChange={(event) => handleOnChange(event, "phone")}
              />
            </div>
            <div className="col-6">
              <label className="form-label">address</label>
              <input
                type="text"
                className="form-control"
                value={dataupdate ? dataupdate.address : ""}
                onChange={(event) => handleOnChange(event, "address")}
              />
            </div>

            <div className="col-7">
              <label className="form-label">status</label>
              <select
                className="form-control"
                value={dataupdate ? dataupdate.status : ""}
                onChange={(event) => handleOnChange(event, "status")}
              >
                <option value="ACCTIVE">ACCTIVE</option>
                <option value="DEACCTIVE">DEACCTIVE</option>
              </select>
            </div>
            <div className="col-5">
              <label className="form-label">Dob(ngày sinh)</label>
              <DatePicker
                className="form-control"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.showmodals}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdateEml()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModuleEmployee;
