import FeaturedItems from "../Components/FeaturedItems";
import Footer from "../Components/Footer";
import PopularItems from "../Components/PopularItems";
import Collections from "../Components/Sections/Collections";
import Hero from "../Components/Sections/Hero";
import Shop from "./Shop";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Collections />

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
  );
};

export default Home;
