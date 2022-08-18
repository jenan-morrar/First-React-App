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

    // Update Operation
    const onUpdate = (id) => {
        // document.getElementById('td-username').contentEditable=true;
        // document.getElementById('td-email').contentEditable=true;
        setUsername('My User');
        setEmail('email@myuser.com');
        axios.put(`https://62fd6a2eb9e38585cd519d34.mockapi.io/first-app/${id}`, {
            username,
            email
        }).then(() => {
            getData();
        })
    }

    return (
        <div className="table-container">
            <table id="customers">
                <tr>
                    <th>User ID</th>
                    <th>Username</th>
                    <th>Use Email</th>
                    <th>Delete</th>
                    <th>Update</th>
                </tr>
                {apiData.map((data) => {
                    return (
                        <tr>
                            <td>{data.id}</td>
                            {/* <td id='td-username' contenteditable="false"  onChange={(e) => setUsername(e.target.value)}>{data.username}</td>
                            <td id='td-email' contenteditable="false"  onChange={(e) => setEmail(e.target.value)}>{data.email}</td> */}
                            <td>{data.username}</td>
                            <td>{data.email}</td>
                            <td><button onClick={() => onDelete(data.id)}><MdDeleteForever className='table-icon-delete' /></button></td>
                            <td ><button onClick={() => onUpdate(data.id)}><BiEditAlt className='table-icon-update' /></button></td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Services;