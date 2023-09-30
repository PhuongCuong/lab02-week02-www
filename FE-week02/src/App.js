import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/login/Login";
import Home from "./container/home/Home";
import Cart from "./container/cart/Cart";
import Order from "./container/cart/Order";
import ManagerEmployee from "./container/employee/ManagerEmployee";
import CreateEmployee from "./container/employee/CreateEmployee";
import { ToastContainer } from "react-toastify";
import ManagerCustomer from "./container/customer/ManagerCustomer";
import CreateCustomer from "./container/customer/CreateCustomer";
import ManagerProduct from "./container/product/ManagerProduct";
import CreateProduct from "./container/product/CreateProduct";
import UpdateProductPrice from "./container/product/UpdateProductPrice";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/form-order" element={<Order />} />
          <Route path="/employee" element={<ManagerEmployee />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/customer" element={<ManagerCustomer />} />
          <Route path="/create-customer" element={<CreateCustomer />} />
          <Route path="/product" element={<ManagerProduct />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route
            path="/update-product-price"
            element={<UpdateProductPrice />}
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  );
}

export default App;
