import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const ModalProductPrice = (props) => {
  const [dataupdate, setdataupdate] = useState({});
  const [dataprice, setdataprice] = useState({});

  let handleOnChange = (event, id) => {
    setdataupdate({
      ...dataupdate,
      [id]: event.target.value,
    });
  };

  let handleUpdateEml = () => {
    if (dataupdate && dataprice) {
      props.handleUpdateEml(dataprice);
    }
  };

  let handleOnChangepricedate = (event) => {
    setdataprice({
      ...dataprice,
      price: event.target.value,
      priceDateTime: new Date().getTime(),
    });
  };

  useEffect(() => {
    setdataupdate(props.emplupdate);
    if (
      props.emplupdate &&
      props.emplupdate.price &&
      props.emplupdate.price.length > 0
    ) {
      const priceObject = { ...props.emplupdate.price[0] };
      priceObject.productid = props.emplupdate;
      setdataprice(priceObject);
    }
  }, [props.emplupdate]);

  console.log("check dataprice", dataprice);

  return (
    <>
      <Modal show={props.setshowmodal} onHide={props.showmodals}>
        <Modal.Header>
          <Modal.Title>Update giá sản phẩm</Modal.Title>
          <button type="button" className="close" onClick={props.showmodals}>
            <span aria-hidden="true">×</span>
            <span className="sr-only">Close alert</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <label className="form-label">Mã sách</label>
              <input
                type="text"
                className="form-control"
                value={dataupdate ? dataupdate.id : ""}
                onChange={(event) => handleOnChange(event, "id")}
              />
            </div>

            <div className="col-12">
              <label className="form-label">Giá</label>
              <input
                type="text"
                className="form-control"
                value={dataprice ? dataprice.price : ""}
                onChange={(event) => handleOnChangepricedate(event)}
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

export default ModalProductPrice;
