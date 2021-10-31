// login page
import React, { useContext } from 'react';

import './Login.css'
import { Button } from 'react-bootstrap';
import icon from '../../img/google1.png';
import useAuth from '../../Hooks/useAuth';



const Login = () => {

    // called needeed data from context api
    const { user, googleLogin } = useAuth();

    // fucntion to handle google login
    const handleGoogleLogin = () => {
        googleLogin();
    }
    return (
        <div className="login-parent d-flex flex-column justify-content-center align-items-center">
            <h2 className="text-uppercase">Please login</h2>
            <div className=" login-parent d-flex flex-column justify-content-center align-items-center">
                <Button variant="outline-danger" className="w-100 d-flex" onClick={handleGoogleLogin} >
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