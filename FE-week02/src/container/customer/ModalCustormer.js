import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalCustormer = (props) => {
  const [dataupdate, setdataupdate] = useState({});

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
  }, [props.emplupdate]);

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

export default ModalCustormer;
