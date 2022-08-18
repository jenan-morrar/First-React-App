import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import './Login.css'

function Login ({LoginTest, error}) {

    const navigate = useNavigate();
    const [details, setDetails] = useState({email:"", password:""});

    const submitHandler =e=>{
        e.preventDefault();
        if(LoginTest(details)){
            navigate("/");
        }
    }
    return (
        <div className="Main-container">
            <div className="container-login">
                <div className="wrap-login">

                    <div className="login-pic">
                        <img src={process.env.PUBLIC_URL + '/images/loginImage.png'} alt="IMG" />
                    </div>

                    <form className="login-form" onSubmit={submitHandler}>
                        <span className="login-form-title">Login</span>
 
                        <div className="wrap-input">
                            <input type="text" className="input" name="email" placeholder="Email" onChange={e=>setDetails({...details, email:e.target.value})} value={details.email} required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <HiOutlineMail/>
                            </span>
                        </div>
                        <div className="wrap-input">
                            <input type="password" className="input" name="pass" placeholder="Password" onChange={e=>setDetails({...details, password:e.target.value})} value={details.password} required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <RiLockPasswordLine/>
                            </span>
                        </div>

                        {(error !== "") ? (<div className="error-style">{error}</div>):("")}

                        <div className="login-form-btn-container">
                            <button type="submit" className="login-form-btn">Login</button>
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