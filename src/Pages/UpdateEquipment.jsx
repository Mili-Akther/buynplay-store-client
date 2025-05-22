import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';

const UpdateEquipment = () => {
  const {user} = useContext(AuthContext);
  const equipment = useLoaderData();
  const {
    name,
    image,
    category,
    price,
    rating,
    processingTime,
    stock,
    customization,
    description,
    _id,
  } = equipment;
  const handleUpdated = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const stock = form.stock.value;
    const customization = form.customization.value;
    const description = form.description.value;

    const updatedEquipment = {
      name,
      image,
      category,
      price,
      rating,
      processingTime,
      stock,
      customization,
      description,
    };

    console.log(updatedEquipment);

    // send data to the server
    fetch(`http://localhost:5000/equipment/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Equipment Updated successfully",
            icon: "success",
            confirmButtonText: "Great Choice",
          });
        }
      });
  };
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-stone-900  shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {" "}
        Update Equipment: {name}
      </h2>

      <form
        onSubmit={handleUpdated}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* name and email */}
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full"
        />

        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full"
        />

        {/* Image URL */}
        <div>
          <label className="label font-semibold text-white">Image URL</label>
          <input
            defaultValue={image}
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Item Name */}
        <div>
          <label className="label font-semibold text-white">Item Name</label>
          <input
            defaultValue={name}
            type="text"
            name="name"
            placeholder="Cricket Bat"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Category Name */}
        <div>
          <label className="label font-semibold text-white">
            Category Name
          </label>
          <input
            defaultValue={category}
            type="text"
            name="category"
            placeholder="Sports / Cricket"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="label font-semibold text-white">Price (USD)</label>
          <input
            defaultChecked={price}
            type="number"
            name="price"
            placeholder="59.99"
            className="input input-bordered w-full"
            step="0.01"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="label font-semibold text-white">
            Rating (0 - 5)
          </label>
          <input
            defaultValue={rating}
            type="number"
            name="rating"
            placeholder="4.5"
            className="input input-bordered w-full"
            step="0.1"
            min="0"
            max="5"
            required
          />
        </div>

        {/* Processing Time */}
        <div>
          <label className="label font-semibold text-white">
            Processing Time (Delivery)
          </label>
          <input
            defaultValue={processingTime}
            type="text"
            name="processingTime"
            placeholder="3-5 business days"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Stock Status */}
        <div>
          <label className="label font-semibold text-white">
            Stock Quantity
          </label>
          <input
            defaultValue={stock}
            type="number"
            name="stock"
            placeholder="100"
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* Customization */}
        <div>
          <label className="label font-semibold text-white">
            Customization
          </label>
          <input
           defaultValue={customization}
            type="text"
            name="customization"
            placeholder="Bat with extra grip, hit paper etc."
            className="input input-bordered w-full"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="label font-semibold text-white">Description</label>
          <textarea
            defaultValue={description}
            name="description"
            placeholder="Describe the item in detail..."
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="btn btn-warning px-8 text-lg font-semibold"
          >
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};


export default UpdateEquipment;           