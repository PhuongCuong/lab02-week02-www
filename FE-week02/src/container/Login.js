import { useState, useEffect } from 'react';
import { getAllEmp } from '../services/employeeService'
import './Login.scss'
import { useNavigate } from 'react-router-dom';





const Login = () => {
    const navigate = useNavigate();
    let [checkinput, setcheckinput] = useState({ email: 'admin@gmail.com', password: '123456' });
    let [checklogin, setcheckloing] = useState([]);
    let [email, seteamil] = useState("admin@gmail.com");
    let [password, setpassword] = useState("123456");
    let [checkaccount, setcheckaccount] = useState("");

    let handlelogin = () => {
        if (checkinput.email === "admin@gmail.com" && checkinput.password === "123456") {
            console.log('login success')
            navigate('/login')
        } else {
            setcheckaccount("Thông tin tài khoản chưa đúng");
        }
    }

    let handleOnchange = (event, id) => {
        let copystate = { ...checkinput };
        copystate[id] = event.target.value;
        setcheckinput(copystate)
    }

    let doSomething = async () => {
        let check = await getAllEmp();
        if (check !== null) {
            setcheckloing(check.data);
        }
    }

    useEffect(() => {
        doSomething();
        return () => { };
    }, [])

    console.log('check', checkinput)
    return (
        <div className='container'>
            <div className='container-body'>
                <div className='text-login'>Đăng nhập</div>
            </div>
            <div className='container-login'>
                <div className='login-image'></div>
                <div className='login-form'>
                    <div className='row'>
                        <div className='col-8'>
                            <label className='form-label'>Email:</label>
                            <input className='form-control' type='email' value={checkinput.email}
                                onChange={(event) => handleOnchange(event, "email")}
                            />
                        </div>
                        <div className='col-8'>
                            <label className='form-label'>Password:</label>
                            <input className='form-control' type='password' value={checkinput.password}
                                onChange={(event) => handleOnchange(event, "password")}
                            />
                        </div>
                        <div className='col-8'>
                            <span className='text-warning'>{checkaccount}</span>
                        </div>
                        <div className='col-8 mt-3'>
                            <button className='btn btn-primary'
                                onClick={() => handlelogin()}
                            >Đăng Nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
