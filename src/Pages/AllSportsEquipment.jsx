import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllSportsEquipment = () => {
  const [equipmentList, setEquipment] = useState([]);

  useEffect(() => {
    fetch("https://buy-n-play-server.vercel.app/allequipment")
      .then((res) => res.json())
      .then((data) => {
        setEquipment(data);
      });
  }, []);

  const handleSortByPrice = () => {
    const sorted = [...equipmentList].sort((a, b) => a.price - b.price);
    setEquipment(sorted);
  };

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-12">
      <h2 className="text-2xl font-bold mb-6 ">All Sports Equipment</h2>
      {/* sort button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={handleSortByPrice}
          className="bg-orange-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
        >
          Sort by Price (Low to High)
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100 text-left text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-6 py-4 border-b">Image</th>
              <th className="px-6 py-4 border-b">Name</th>
              <th className="px-6 py-4 border-b">Category</th>
              <th className="px-6 py-4 border-b">Price</th>
              <th className="px-6 py-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {equipmentList.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 border-b">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 border-b font-medium">{item.name}</td>
                <td className="px-6 py-4 border-b">{item.category}</td>
                <td className="px-6 py-4 border-b">${item.price}</td>
                <td className="px-6 py-4 border-b">
                  <Link
                    to={`/equipment/${item._id}`}
                    className="inline-block bg-orange-500 text-white px-4 py-2 text-sm rounded-md hover:bg-orange-700 transition"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
