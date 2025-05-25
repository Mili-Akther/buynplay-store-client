import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const ViewDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://buy-n-play-server.vercel.app/equipment/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-10">
        <Loading></Loading>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 grid md:grid-cols-2 gap-10">
      {/* Left Images */}
      <div className="space-y-4">
        <img
          src={product.images?.[0] || product.image}
          alt={product.name}
          className="w-full h-full  rounded-md shadow"
        />
        <div className="flex space-x-2">
          {(product.images || [product.image]).map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              className="w-20 h-20 object-cover rounded cursor-pointer border hover:border-black"
            />
          ))}
        </div>
      </div>

      {/* Right Info */}
      <div className=" mt-12">
        <h3 className="text-gray-500 text-sm">
          {product.brand || "Generic Brand"}
        </h3>
        <h1 className="text-2xl md:text-3xl font-bold mt-1">{product.name}</h1>
        <div className="flex items-center gap-4 mt-3">
          {product.oldPrice && (
            <span className="line-through text-gray-400 text-lg">
              £{product.oldPrice}
            </span>
          )}
          <span className="text-2xl font-bold text-orange-600">
            ${product.price}
          </span>
          {product.sold && (
            <span className="text-sm text-gray-500">{product.sold} Sold</span>
          )}
          {product.rating && (
            <span className="ml-auto font-semibold">⭐ {product.rating}</span>
          )}
        </div>

        {/* Description */}
        {product.description && (
          <p className=" mt-6">
            Description: <br />
            {product.description}
          </p>
        )}

        {/* Colors */}
        {product.colors && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Color:</h4>
            <div className="flex gap-2">
              {product.colors.map((color, idx) => (
                <span
                  key={idx}
                  className="w-7 h-7 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        )}

        {/* Sizes */}
        {product.sizes && (
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Size:</h4>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="mt-12 flex gap-4 ">
          <button className="w-full font-bold text-xl bg-amber-500 text-white px-6 py-3 rounded hover:bg-orange-600">
            Add To Cart
          </button>
          <button className="w-full font-bold text-xl px-6 py-3 bg-amber-500  hover:bg-orange-600">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
