import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import shoe1 from "../../../src/assets/shoe1.png";
import shoe2 from "../../../src/assets/shoe2.png";


const slides = [
  {
    img: shoe1,
    title: "Gear Up. Game On.",
    desc: "Next Level Games",
    btn: "Explore Items",
  },
  {
    img: shoe2,
    title: "Train Harder.",
    desc: "Premium gear made for every sport",
    btn: "Shop Now",
  },
];

const Hero = () => (
  <section className="bg-black text-white py-10 animate-fadeIn">
    <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop>
      {slides.map((s, i) => (
        <SwiperSlide
          key={i}
          className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 gap-6"
        >
          <div className="max-w-md space-y-4">
            <h1 className="text-5xl font-bold">{s.title}</h1>
            <p>{s.desc}</p>
            <button className="btn btn-warning">{s.btn}</button>
          </div>
          <img src={s.img} alt={s.title} className="w-full max-w-sm" />
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);
export default Hero;