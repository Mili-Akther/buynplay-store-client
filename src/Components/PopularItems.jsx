import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "The Guard Socks",
    category: "Accessories",
    price: "$27",
    image: "/images/socks.png",
    isNew: true,
  },
  {
    id: 2,
    title: "North River White",
    category: "Shoes Collection",
    price: "$165",
    image: "/images/shoes.png",
    isNew: true,
  },
  {
    id: 3,
    title: "Belle & Bell",
    category: "Sports Bra",
    price: "$90",
    image: "/images/bra2.png",
    isNew: false,
  },
  {
    id: 4,
    title: "Majestic Rocket",
    category: "Sport Gear",
    price: "$190",
    image: "/images/racket.png",
    isNew: false,
  },
];

const PopularItems = () => {
  return (
    <section className="bg-black text-white px-10 py-12">
      <h2 className="text-3xl font-bold mb-6">POPULAR ITEMS</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularItems;
