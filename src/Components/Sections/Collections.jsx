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
    <section className="py-16 px-6 md:px-16 bg-black">
      <div className="grid md:grid-cols-3">
        {data.map((item, idx) => (
          <Fade triggerOnce direction="up" delay={idx * 100} key={idx}>
            <div className="relative bg-[#1e1e1e] rounded-xl p-10  h-82 max-w-[480px] shadow-xl flex flex-col justify-between items-start overflow-hidden hover:scale-105 transition-transform duration-300 ">
              {/* Text */}
              <div>
                <h3 className="text-white text-4xl font-semibold ">
                  {item.title}
                </h3>
                <p className="text-white text-sm mt-1">{item.subtitle}</p>
              </div>

              {/* Button */}
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 mt-4 rounded-full font-semibold shadow-lg transition-all">
                Explore items
              </button>

              {/* Image */}
              <img
                src={item.img}
                alt={`${item.title} Collection`}
                className="absolute bottom-0 right-0 w-62 h-80 object-contain"
              />
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Collections;
