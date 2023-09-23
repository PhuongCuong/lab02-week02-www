import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Cart.scss'


const Cart = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    let [arrProduct, setarrProduct] = useState([]);

    useEffect(() => {
        setarrProduct(location.state);
    }, [])
    console.log('check state', arrProduct)

    let handleOrder = () => {
        navigate('/form-order', { state: arrProduct })
    }

    return (
        <div className='container'>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Img</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrProduct.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index}</th>
                                    <td className='img-product' style={{ backgroundImage: `url(${item.image[0].path})` }}></td>
                                    <td>{item.name}</td>
                                    <td>{item.price[0].price}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
            <div className='btn-order mt-4 d-flex justify-content-end'>
                <button className='btn btn-primary' onClick={() => handleOrder()}>Đặt hàng</button>
            </div>
        </div>
    );
};

export default Cart;