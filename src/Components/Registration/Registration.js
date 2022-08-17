import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineLogin } from "react-icons/hi";
import axios from 'axios';
import './../Login/Login.css'

const Registration  = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // console.log(username);
    // console.log(email);
    // console.log(password);

    const sendDataToAPI = (event) => {
        event.preventDefault();
        axios.post(`https://62fd6a2eb9e38585cd519d34.mockapi.io/first-app`, {
            username,
            email,
            password
        }).then((response) => {
            console.log(response.data);
            alert('You are registered successfuly');
            event.target.reset();
          })
          .catch((error) => {
            console.log(error);
            alert(error);
          })
      }

    return (
        <div className="Main-container">
            <div className="container-login">
                <div className="wrap-login">

                    <div className="login-pic">
                        <img src={process.env.PUBLIC_URL + '/images/loginImage.png'} alt="IMG" />
                    </div>

                    <form className="login-form" onSubmit={sendDataToAPI}>
                        <span className="login-form-title">Registration</span>

                        <div className="wrap-input">
                            <input type="text" className="input" name="username" id='username'  onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <AiOutlineUser/>
                            </span>
                        </div>

                        <div className="wrap-input">
                            <input type="email" className="input" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <HiOutlineMail/>
                            </span>
                        </div>
                        <div className="wrap-input">
                            <input type="password" className="input" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
                            <span className="focus-input"></span>
                            <span className="symbol-input">
                            <RiLockPasswordLine/>
                            </span>
                        </div>

                        <div className="login-form-btn-container">
                            <button className="login-form-btn" type='submit'>Registration</button>
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
export default Registration