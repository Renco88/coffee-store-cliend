import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees,setCoffees }) => {
  const { _id, name, chef, taste, photo } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee entry has been deleted.",
                icon: "success",
              });

              // Update the loaded coffee state
              const remainingCoffees = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="coffee" />
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
            onClick={() => handleDelete(_id)}
            className="btn join-item bg-red-500"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
};

// Ensure export is at the top level
export default Coffee;
