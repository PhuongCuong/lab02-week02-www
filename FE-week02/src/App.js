
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './container/Login';
import Home from "./container/Home";
import Cart from "./container/Cart";
import Order from "./container/Order";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/form-order' element={<Order />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
