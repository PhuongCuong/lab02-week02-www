import React, { useState, useEffect } from "react";
import Nav from "../login/Nav";
import "./CreateProduct.scss";
import {
  insertEmpl,
  insertAllProduct,
  insertProduct,
  insertProductPrice,
  insertProductImg,
} from "../../services/productService";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const [dataproduct, setdataproduct] = useState({
    name: "",
    description: "",
    manufacturerName: "",
    unit: "",
    status: "ACCTIVE",
  });

  const [dataprice, setdataprice] = useState({
    priceDateTime: new Date().getTime(),
    price: "",
    node: "",
  });

  const handleCreateProduct = async () => {
    let data = await insertProduct(dataproduct);
    if (data && data.data) {
      console.log("chekc data", data.data);
      let price = await insertProductPrice({
        ...dataprice,
        productid: { ...data.data },
      });
      let img = await insertProductImg({
        alternative: "",
        path: "https://www.freeiconspng.com/uploads/img-landscape-photo-photography-picture-icon-12.png",
        product: { ...data.data },
      });
      if (price && price.data === "ok" && img && img.data === "ok") {
        toast.success("create product is success!");
      }
    } else {
      toast.error("create error!");
    }
  };

  let handleOnChange = (event, id) => {
    setdataproduct({
      ...dataproduct,
      [id]: event.target.value,
    });
  };

  let handleOnChangeprice = (event, id) => {
    setdataprice({
      ...dataprice,
      [id]: event.target.value,
    });
  };

  console.log("check dataprice", dataprice);

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
              value={dataproduct ? dataproduct.name : ""}
              onChange={(event) => handleOnChange(event, "name")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">mô tả</label>
            <input
              type="email"
              className="form-control"
              value={dataproduct ? dataproduct.description : ""}
              onChange={(event) => handleOnChange(event, "description")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Nhà xuất bản</label>
            <input
              type="text"
              className="form-control"
              value={dataproduct ? dataproduct.manufacturerName : ""}
              onChange={(event) => handleOnChange(event, "manufacturerName")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">Giá</label>
            <input
              type="text"
              className="form-control"
              value={dataprice ? dataprice.price : ""}
              onChange={(event) => handleOnChangeprice(event, "price")}
            />
          </div>
          <div className="col-12">
            <label className="form-label">đơn vị</label>
            <input
              type="text"
              className="form-control"
              value={dataproduct ? dataproduct.unit : ""}
              onChange={(event) => handleOnChange(event, "unit")}
            />
          </div>
        </div>
      </div>
      <div className="form-btn">
        <button
          className="btn-save btn btn-primary"
          onClick={() => handleCreateProduct()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
