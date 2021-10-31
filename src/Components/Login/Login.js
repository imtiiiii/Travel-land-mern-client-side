// login page
import React from 'react';
import './Login.css'
import { Button } from 'react-bootstrap'
import icon from '../../img/google1.png'
const Login = () => {
    return (
        <div className="login-parent d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-uppercase">Please login</h2>
            <div className=" login-parent d-flex flex-column justify-content-center align-items-center">
                <Button variant="outline-danger" className="w-100 d-flex">
                    {/* div for image */}
                    <div>
                        <img src={icon} alt="google">
                        </img>
                    </div>
                    <div className="mx-3">
                        <p>Google Login</p>
                    </div>
                </Button>
            </div >
        </div>
    );
};

export default Login;