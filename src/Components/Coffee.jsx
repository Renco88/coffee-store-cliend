import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee,}) => {

    const { _id, name, chef, taste, photo } = coffee;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="coffee" />
            </figure>
            <div className="flex w-full m-4 items-center justify-between">
                <div>
                    <p>Name: {name}</p>
                    <p>Chef: {chef}</p>
                    <p>Taste: {taste}</p>
                </div>
                <div className="card-actions justify-end join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button
                        className="btn join-item bg-red-500">X</button>
                </div>
            </div>
        </div>
    );
};

export default Coffee;