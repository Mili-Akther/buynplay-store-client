import { } from "react";
import FeaturedItems from "../Components/FeaturedItems";
import Footer from "../Components/Footer";
import PopularItems from "../Components/PopularItems";
import Collections from "../Components/Sections/Collections";
import Hero from "../Components/Sections/Hero";
import Shop from "./Shop";
import CategorySidebar from "../Components/CategorySidebar";
import ProductGrid from "../Components/ProductGrid";

const Home = () => {
  return (
    <>
      <Hero />
      <Collections />

      <div>
        

        <div className="">
          <Shop></Shop>
        </div>
        <PopularItems></PopularItems>
        <FeaturedItems></FeaturedItems>

        <div className="">
          {/* footer */}
          <Footer></Footer>
        </div>
      </div>
    </>
  );
};

export default Home;
