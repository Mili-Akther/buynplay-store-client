import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

import skateboard from "../../src/assets/images/skateboard-popular.jpg";
import shoePopular from "../../src/assets/images/popular-shoe.jpg";
import badminton from "../../src/assets/images/badminton-popular.jpg";
import CyclePopular from "../../src/assets/images/cycle-popular.png";
import { Fade, Slide } from "react-awesome-reveal";

const products = [
  {
    id: 1,
    title: "Skera Fast Track Black Skull Skate Board 28",
    category: "sports",
    price: "$27",
    image: skateboard,
    isNew: true,
  },
  {
    id: 2,
    title: "Children Sports Shoe",
    category: "Shoes Collection",
    price: "$165",
    image: shoePopular,
    isNew: true,
  },
  {
    id: 3,
    title: "2 Aluminum Badminton Racket and 3 Pcs",
    category: "Sports",
    price: "$90",
    image: badminton,
    isNew: false,
  },
  {
    id: 4,
    title: "Cradiac Squad 21 Speed High Performance Steel Mountain Cycles",
    category: "Sport Gear",
    price: "$190",
    image: CyclePopular,
    isNew: false,
  },
];

const PopularItems = () => {
  return (
    <section className="  px-10 py-12 ">
      <h2 className="text-3xl font-bold mb-6">POPULAR ITEMS</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.map((product, index) => {
          const isEven = index % 2 === 0;
          return (
            <Slide
              key={product.id}
              direction={isEven ? "left" : "right"}
              duration={1500}
              triggerOnce
            >
              <ProductCard product={product} />
            </Slide>
          );
        })}
      </div>
    </section>
  );
};

export default PopularItems;
