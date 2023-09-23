import { FaBeer, FaCartArrowDown } from 'react-icons/fa';
import './Home.scss'
import { getAllProduct } from '../services/productService'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigator = useNavigate();
    let [logApi, setAPI] = useState([]);
    let [arrProduct, setarrProduct] = useState([]);
    let getApi = async () => {
        let check = await getAllProduct();
        if (check) {
            setAPI(check.data)
        }
    }

    useEffect(() => {
        getApi();
        console.log('check', logApi)
    }, [])

    let handlebtnaddcart = (item) => {
        let arrupdate = [...arrProduct, item];
        setarrProduct(arrupdate);
    }

    let handleCart = () => {
        navigator('/cart', { state: arrProduct })
    }

    console.log('check arr', arrProduct)


    return (
        <div className="container">
            <div>
                <div className='cart-icon'>
                    <div className='icon-cart w-1 h-1 p-1 rounded' onClick={() => handleCart()}>
                        <FaCartArrowDown className='' />
                        <span className='text-sl'>{arrProduct && arrProduct.length > 0 ? arrProduct.length : 0}</span>
                    </div>
                </div>
                <div className='body-product'>
                    {
                        logApi.map((item, index) => {
                            return (
                                <div key={index} className='item-product'>
                                    <div className='item-img' style={{ backgroundImage: `url(${item.image[0].path})` }}>
                                    </div>
                                    <div className='name-item'>
                                        <span className='text-name'>{item.name}</span>
                                    </div>
                                    <div className='price-item'>
                                        <span className='text-price'>
                                            {item.price[0].price}
                                        </span></div>
                                    <button className='btn-item'
                                        onClick={() => handlebtnaddcart(item)}
                                    >Thêm vào giỏ hàng</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;