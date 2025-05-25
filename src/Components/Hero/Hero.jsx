import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./hero.css"

import shoe1 from "../../../src/assets/images/shoe1.png";
import cycle from "../../../src/assets/images/cycle.png";
import tennis from "../../../src/assets/images/tennis.2.png";
import basketball from "../../../src/assets/images/basketball.png";


const slides = [
  {
    img: shoe1,
    title: "GEAR UP. GAME ON.",
    desc: "Next Level Games.\nGet ready to train smarter,\nplay harder, and perform stronger.",
    btn: "Explore Items",
    priceCard: {
      name: "sneakers",
      price: "$125",
      img: shoe1,
    },
  },
  {
    img: cycle,
    title: "Ride Like the Wind.",
    desc: "High-performance cycles.\nBuilt for speed, comfort,\nand every kind of terrain.",
    btn: "Explore Cycles",
    priceCard: {
      name: "Cyclone R2",
      price: "$499",
      img: cycle,
    },
  },
  {
    img: tennis,
    title: "Smash the Court.",
    desc: "Smash your limits.\nPrecision rackets for\nwinning every match.",
    btn: "Shop Rackets",
    priceCard: {
      name: "Smash Pro 7",
      price: "$199",
      img: tennis,
    },
  },
  {
    img: basketball,
    title: "Play Like a Pro.",
    desc: "Dominate the court.\nEngineered basketballs for\npower, grip, and control.",
    btn: "Shop Balls",
    priceCard: {
      name: "Bounce X",
      price: "$89",
      img: basketball,
    },
  },
];

const Hero = () => (
  <section className="bg-black text-white py-16">
    <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop>
      {slides.map((s, i) => (
        <SwiperSlide
          key={i}
          className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 gap-8 "
        >
          {/* title */}
          <div className=" flex-1 relative flex justify-center items-center p-12 ">
            <h1
              style={{ zIndex: -1 }}
              className="absolute text-6xl md:text-8xl font-bold drop-shadow-[0_0_40px_rgba(255,140,0,0.6)] transition-transform z-[-1] select-none title-color  "
            >
              {s.title}
            </h1>
          </div>
          {/* Left Content */}
          <div className="flex-1 max-w-sm space-y-6 mt-22">
            <p className="text-lg text-gray-300 whitespace-pre-line">
              {s.desc}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-12 rounded-full font-semibold ">
              {s.btn}
            </button>
          </div>

          {/* Right Image with priceCard Card */}
          <div className="relative flex-1 flex justify-center items-center -mt-[315px] ">
            <img
              src={s.img}
              alt={s.title}
              className="w-full z-10 max-w-md drop-shadow-[0_0_40px_rgba(255,140,0,0.6)] transition-transform "
            />
          </div>
          <div className="-mb-12 p-2 absolute bottom-14 right-32 rounded-xl bg-[#1e1e1e] text-white max-w-md flex items-center justify-between space-x-4 space-y-6">
            <div className="m-4">
              <h3 className="text-lg font-semibold">
                {s.priceCard?.name || "priceCard Name"}
              </h3>
              <p className="text-sm text-gray-400">Popular Item</p>
              <p className="text-lg font-bold mt-1 ">
                {s.priceCard?.price || "$0"}
              </p>
            </div>
            <img
              src={s.priceCard?.img}
              alt={s.priceCard?.name || "priceCard"}
              className="w-20 h-auto object-contain rounded"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Hero;
