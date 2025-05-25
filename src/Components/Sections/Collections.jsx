import React from "react";
import { Fade } from "react-awesome-reveal";
import men from "../../../src/assets/Men/men-1.1.png";
import women from "../../../src/assets/woman/female-1.png";
import kids from "../../../src/assets/kids/kid-1.png";

const data = [
  { title: "Men", subtitle: "Collection", img: men },
  { title: "Women", subtitle: "Collection", img: women },
  { title: "Kids", subtitle: "Collection", img: kids },
];

const Collections = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-0 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
        {data.map((item, idx) => (
          <Fade triggerOnce direction="up" delay={idx * 100} key={idx}>
            <div className="  sm:w-80 md:w-96 lg:max-w-[500px] bg-[#1e1e1e] rounded-xl p-8 h-82 shadow-xl flex flex-col justify-between items-start relative overflow-hidden hover:scale-105 transition-transform duration-300 ">
              {/* Text */}
              <div>
                <h3 className="text-white text-4xl font-semibold ">
                  {item.title}
                </h3>
                <p className="text-white text-sm mt-1">{item.subtitle}</p>
              </div>

              {/* Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4  rounded-full font-semibold shadow-lg transition-all">
                Explore items
              </button>

              {/* Image */}
              <img
                src={item.img}
                alt={`${item.title} Collection`}
                className="absolute bottom-0 right-0 sm:w-8 md:w-12 lg:w-60  object-contain"
              />
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Collections;
