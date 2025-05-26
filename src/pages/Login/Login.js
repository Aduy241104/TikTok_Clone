import { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Login.module.scss'
import { useAuth } from '../../contexts/AuthContext';
import { loginApi } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Login() {
    const { Login } = useAuth();

    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    })

    const handleChangeData = (e) => {
        setLoginData(prev => {
            return ({
                ...prev,
                [e.target.name]: e.target.value
            })
        })
    }


    const handleLogin = async () => {
        const response = await loginApi("auth/login", loginData);
        if (response.data) {
            Login(response.data, response.meta.token);
            navigate("/")

        } else {
            console.log("fail");
        }
    }


    return (
        <div className={ cx('wrapper') }>
            <div className={ cx('login-place') }>
                <img className={ cx("logo") } src="vecteezy_glossy-tik-tok-icon-3d-render_9826612.png" alt="" />
                <input type="text" name='email' placeholder='Username' onChange={ (e) => handleChangeData(e) } />
                <input type="password" name='password' placeholder='Password' onChange={ (e) => handleChangeData(e) } />
                <button onClick={ handleLogin }>Login</button>
                <p className={ cx('suggest') }>Bạn không có tài khoản?<span> Đăng ký</span></p>
            </div>
        </div>
    )
}

export default Login