import {} from "react";
import FeaturedItems from "../Components/FeaturedItems";
import Footer from "../Components/Footer";
import PopularItems from "../Components/PopularItems";
import Collections from "../Components/Sections/Collections";

import Shop from "./Shop";
import Hero from "../Components/Hero/Hero";


const Home = () => {
  return (
    <>
      {/* <div className="bg-black"> */}
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
      {/* </div> */}
    </>
  );
};

export default Home;
