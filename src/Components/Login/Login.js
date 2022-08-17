import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import './Login.css'

const Login = () => {

    return (
        <div className="Main-container">
            <div className="container-login">
                <div className="wrap-login">

                    <div className="login-pic">
                        <img src={process.env.PUBLIC_URL + '/images/loginImage.png'} alt="IMG" />
                    </div>

                    <form className="login-form">
                        <span className="login-form-title">Login</span>

                        <div className="wrap-input">
                            <input type="text" className="input" name="email" placeholder="Email" required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <HiOutlineMail/>
                            </span>
                        </div>
                        <div className="wrap-input">
                            <input type="password" className="input" name="pass" placeholder="Password" required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <RiLockPasswordLine/>
                            </span>
                        </div>

                        <div className="login-form-btn-container">
                            <button className="login-form-btn">Login</button>
                        </div>

                        <div className="text-center p-t-2">
                            <NavLink to="/registration" className="txt2">Create Your Account <BsArrowRight className="login-sign"/> </NavLink>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Login;