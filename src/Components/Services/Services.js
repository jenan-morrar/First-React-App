import React from "react";
import axios from "axios";
import './Services.css'
import { useState, useEffect } from "react";
import { MdDeleteForever } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';

const Services = () => {

    const [apiData, setApiData] = useState([]);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState();
    // const [flag, setFlag] = useState(false);

    // Get Operation
    useEffect(() => {
        axios.get(`https://62fd6a2eb9e38585cd519d34.mockapi.io/first-app`).then((getData) => {
            setApiData(getData.data);
        })
    }, [])

    const getData = () => {
        axios.get(`https://62fd6a2eb9e38585cd519d34.mockapi.io/first-app`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    // Delete Operation
    const onDelete = (id) => {
        axios.delete(`https://62fd6a2eb9e38585cd519d34.mockapi.io/first-app/${id}`)
            .then(() => {
                getData();
            })
    }

    // show update model
    const updateForm = (id) => {
        const user = apiData.find(x => x.id === id);
        setUser(user);

        window.localStorage.setItem('username', user.username);
        window.localStorage.setItem('email', user.email);

        document.getElementById('username').value = window.localStorage.getItem('username');
        document.getElementById('email').value = window.localStorage.getItem('email');

        setUsername(document.getElementById('username').value);
        setEmail(document.getElementById('email').value);

        document.querySelector('.bg-modal').style.display = "flex";
    }

    //close update model
    const close = (e) => {
        e.preventDefault();
        document.querySelector('.bg-modal').style.display = "none";
    }

    // Update Operation
    const onUpdate = (e) => {
        e.preventDefault();
        console.log("name"+username+"email"+email);
        axios.put(`https://62fd6a2eb9e38585cd519d34.mockapi.io/first-app/${user.id}`, {
            username,
            email
        }).then(() => {
            getData();
            document.querySelector('.bg-modal').style.display = "none";
        })
    }

    return (
        <div className="table-container">
            <table id="customers">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Username</th>
                        <th>Use Email</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>

                    {apiData.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td><button onClick={() => onDelete(data.id)}><MdDeleteForever className='table-icon-delete' /></button></td>
                                <td >
                                    <button onClick={() => { updateForm(data.id) }}><BiEditAlt className='table-icon-update' /></button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="bg-modal">
                <div className="modal-contents">

                    <form>
                        <input type="text" name="username" id='username' placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" name="email" id="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
                        <button type="submit" className="button" onClick={onUpdate}>Submit</button>
                        <button onClick={close} className="button"> cancel</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Services;