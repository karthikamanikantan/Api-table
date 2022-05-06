import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = () => {
    const [allUser, updateUser] = useState(null);


    const getUser = () => {
        axios.get('https://reqres.in/api/users')
            .then(response => {
                updateUser(response.data.data);
            })
    }

    useEffect(() => {
        getUser();
    }, [true]);

    return (
        <center>
        <div className="container-table">
            <h1>User Details</h1>
            {
                allUser &&
                
                <table className='table-user'>
                    <thead>
                        <tr>

                            <th> First Name </th>
                            <th> Last Name </th>
                            <th> Email </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUser.map((userinfo, index) => {
                                return (
                                    <tr key={index}>
                                       
                                        <td>{userinfo.first_name}</td>
                                        <td>{userinfo.last_name}</td>
                                        <td>{userinfo.email}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
        </center>
    )
}

export default Table;