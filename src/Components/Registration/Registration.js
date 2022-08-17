import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import './../Login/Login.css'

const Registration = () => {

    return (
        <div className="Main-container">
            <div className="container-login">
                <div className="wrap-login">

                    <div className="login-pic">
                        <img src={process.env.PUBLIC_URL + '/images/loginImage.png'} alt="IMG" />
                    </div>

                    <form className="login-form">
                        <span className="login-form-title">Registration</span>

                        <div className="wrap-input">
                            <input type="text" className="input" name="userName" placeholder="Username" required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <AiOutlineUser/>
                            </span>
                        </div>

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
                            <button className="login-form-btn">Registration</button>
                        </div>

                        <div className="text-center p-t-2">
                            <NavLink to="/login" className="txt2">Login <HiOutlineLogin className="login-sign"/></NavLink>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Registration;