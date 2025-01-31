import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUser =useLoaderData();
    const [users,setUsers]=useState(loadedUser);

    const hendleDelete = id =>{
        //meck sure user is comferm to delete
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'

        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('delete successfully');
                // remove the user from ui

                const remainingUsers =users.filter(user=>user._id !==id);
                setUsers(remainingUsers);
            }
        })

    }

    return (
        <div>
            <h2 className="text-3xl">Users: {loadedUser.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Login At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>{user.lastSignInTime}</td>
                                <td>
                                    <button className='btn'>E</button>
                                    <button
                                    onClick={()=> hendleDelete(user._id)}

                                        className='btn'>X</button>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;