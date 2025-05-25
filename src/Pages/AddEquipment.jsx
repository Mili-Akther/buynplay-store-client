import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const stock = form.stock.value;
    const customization = form.customization.value;
    const description = form.description.value;

    const newEquipment = {
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
    // console.log(newEquipment);

    //     send data to the server
    fetch("https://buy-n-play-server.vercel.app", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Equipment Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 bg-zinc-800  shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-bold mb-8 text-center">Add New Equipment</h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* name and email */}
        <input
          type="email"
          value={user?.email || ""}
          readOnly
          className="input input-bordered w-full bg-stone-950"
        />

        <input
          type="text"
          value={user?.displayName || ""}
          readOnly
          className="input input-bordered w-full bg-stone-950"
        />

        {/* Image URL */}
        <div>
          <label className="label font-semibold ">Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full bg-stone-950"
            required
          />
        </div>

        {/* Item Name */}
        <div>
          <label className="label font-semibold ">Item Name</label>
          <input
            type="text"
            name="name"
            placeholder="Cricket Bat"
            className="input input-bordered w-full bg-stone-950"
            required
          />
        </div>

        {/* Category */}
        <div>
          <select
            name="category"
            className="input input-bordered w-full bg-stone-950 mt-6"
            required
          >
            <option value="">Select Category</option>
            <option value="Basketball">Basketball</option>
            <option value="Cycling">Cycling</option>
            <option value="Football">Football</option>
            <option value="Golf">Golf</option>
            <option value="Running">Running</option>
            <option value="Swim">Swim</option>
            <option value="Tenis">Tenis</option>
            <option value="Training">Training</option>
            <option value="Hoodies">Hoodies</option>
            <option value="Jackets/Track Tops">Jackets/Track Tops</option>
            <option value="Jerseys">Jerseys</option>
            <option value="Pants/Thighs">Pants/Thighs</option>
            <option value="Shirts/Tops">Shirts/Tops</option>
            <option value="Shorts/Bottoms">Shorts/Bottoms</option>
            <option value="Skirts">Skirts</option>
            <option value="Sports Bra">Sports Bra</option>
          </select>
        </div>

        {/* Price */}
        <div>
          <label className="label font-semibold ">Price (USD)</label>
          <input
            type="number"
            name="price"
            placeholder="59.99"
            className="input input-bordered w-full bg-stone-950"
            step="0.01"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="label font-semibold ">Rating (0 - 5)</label>
          <input
            type="number"
            name="rating"
            placeholder="4.5"
            className="input input-bordered w-full bg-stone-950"
            step="0.1"
            min="0"
            max="5"
            required
          />
        </div>

        {/* Processing Time */}
        <div>
          <label className="label font-semibold ">
            Processing Time (Delivery)
          </label>
          <input
            type="text"
            name="processingTime"
            placeholder="3-5 business days"
            className="input input-bordered w-full bg-stone-950"
            required
          />
        </div>

        {/* Stock Status */}
        <div>
          <label className="label font-semibold ">Stock Quantity</label>
          <input
            type="number"
            name="stock"
            placeholder="100"
            className="input input-bordered w-full bg-stone-950"
            required
          />
        </div>

        {/* Customization */}
        <div>
          <label className="label font-semibold ">Customization</label>
          <input
            type="text"
            name="customization"
            placeholder="Bat with extra grip, hit paper etc."
            className="input input-bordered w-full bg-stone-950"
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="label font-semibold ">Description</label>
          <textarea
            name="description"
            placeholder="Describe the item in detail..."
            className="textarea textarea-bordered w-full bg-stone-950"
            rows="4"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="btn bg-orange-500 border-none px-8 text-lg font-semibold"
          >
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
