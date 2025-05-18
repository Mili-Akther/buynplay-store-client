
import FeaturedItems from "../Components/FeaturedItems";
import PopularItems from "../Components/PopularItems";
import Collections from "../Components/Sections/Collections";
import Hero from "../Components/Sections/Hero";
import Shop from "./Shop";



const Home = () => {
  return (
    <div className="">
      <Hero />
      <Collections />
      {/* Add more sections later like Features, Footer, etc */}
      <div className="">
        <Shop></Shop>
      </div>
      <PopularItems></PopularItems>
      <FeaturedItems></FeaturedItems>
    </div>
  );
};

export default Home;
