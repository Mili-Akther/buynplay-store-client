// src/components/sections/Collections.jsx
import React from "react";
import men from "../../../src/assets/Men/Sport-men.png";
import women from "../../../src/assets/woman/Sports-women.png";
import kids from "../../../src/assets/kids/kids.png";

const data = [
  { title: "Men", subtitle: "Collection", img: men },
  { title: "Women", subtitle: "Collection", img: women },
  { title: "Kids", subtitle: "Collection", img: kids },
];

const Collections = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-black">
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between items-center bg-base-200 rounded-lg p-6 h-96 shadow-lg"
          >
            {/* Title */}
            <div className="self-start">
              <h3 className="text-white text-2xl font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="text-white text-sm mt-1">{item.subtitle}</p>
            </div>

            {/* Button */}
            <button className="btn btn-warning w-40">Explore items</button>

            {/* Image */}
            <img
              src={item.img}
              alt={`${item.title} Collection`}
              className="w-40 h-40 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collections;
