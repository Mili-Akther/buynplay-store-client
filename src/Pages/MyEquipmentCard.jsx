import React from "react";
import { FaEdit, FaEye, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentCard = ({ equipment, equipments, setEquipments }) => {
  const { name, image, category, price, customization, _id } = equipment;
  const handleDelete = (_id) => {
    // console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://buy-n-play-server.vercel.app/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your equipment has been deleted.",
                icon: "success",
              });
              const remaining = equipments.filter((equ) => equ._id !== _id);
              setEquipments(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-gray-300 p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow">
      {/* equipment Image */}
      <div className="w-42 h-42 flex-shrink-0">
        {name === " ProGrip Basketball" ? (
          <div className="w-full h-full relative">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded"
            />
            <div className="absolute bottom-0 right-0">
              <img
                src={image}
                alt="Small version"
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        ) : (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded"
          />
        )}
      </div>

      {/* equipment Info */}
      <div className="flex-1 space-y-1">
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-bold ">Name:</span> {name}
        </p>
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-bold">Category:</span> {category}
        </p>
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-bold">Price:</span> {price}
        </p>
        <p className="text-sm text-gray-800 font-medium">
          <span className="font-bold">Customization:</span> {customization}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <button className="w-8 h-8 rounded-lg bg-amber-200 flex items-center justify-center">
          <FaEye size={16} className="text-gray-700" />
        </button>
        <Link to={`/updateEquipment/${_id}`}>
          <button className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
            <FaEdit className="text-gray-700" />
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center"
        >
          <FaRegTrashAlt className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default MyEquipmentCard;
