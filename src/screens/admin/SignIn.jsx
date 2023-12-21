/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import '../../assetss/css/login.css';
import MyAPI, { Item } from "../../componentss/MyAPI";
import Navbar from "../../componentss/Navbar";
import { useAlert } from 'react-alert'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setIsLoading] = useState(false);
    let alert = useAlert();
    const handleLogin = async () => {
        setIsLoading(true);
        let data = { email, password };
        console.log('data', data)
        if (email && password) {
            MyAPI.post('/admin/signin', data)
                .then((res) => {
                    if (res.data.status) {
                        Item.setItem('token', res.data.token);
                        Item.setItem('isAdmin',true);
                        window.location.assign('/admin/dashboard/allleads');
                        alert.success('login success...!');
                    } else {
                        Item.setItem('isAdmin',false);
                        alert.info(res.data.message);
                    }
                }).catch((error) => {
                    console.error('Error:', error.message);
                }).finally(() => {
                    setIsLoading(false);
                    let LoginBtn = document.getElementById('LoginBtn');
                    LoginBtn.classList.remove('loading');
                })
        } else {
            setIsLoading(false);
            alert.info('all fileds are required...!');
        }
    }

    return (
        <>
            <Navbar />
            <div className="container mb-4 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <div className="login-box rounded p-4" style={{ width: '43vw', background: '#474E58' }}>
                    <h3 className="text-center text-white mb-4">Sign In</h3>
                    <div className="mb-3 col-md-12">
                        <label htmlFor="email" className="form-label text-white">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            id="email"
                            placeholder="Enter Email ID"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </div>
                    <div className="mb-3 col-md-12">
                        <label htmlFor="password" className="form-label text-white">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            id="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </div>
                    <div className="text-warning mb-3">Don't have an account? <Link to={'/vendor/contact'} className="text-warning">Sign Up</Link></div>
                    <div className="d-grid">
                        <button id="LoginBtn" className={`btn btn-primary ${loading ? 'loading' : ''}`} onClick={handleLogin}>
                            {!loading && 'Sign in'}
                        </button>
                    </div>
                </div>
            </div>
            <br />
            <br />
        </>
    );
};

export default SignIn;
