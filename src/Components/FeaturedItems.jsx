import { Fade } from "react-awesome-reveal";
import femaleModelImg from "../../src/assets/images/female-model.png";
import cycleMale from "../../src/assets/images/male-cycle.png";
import bags from "../../src/assets/images/bags.png";

const featuredItems = [
  {
    id: 1,
    title: "Zuva x The 89 Club",
    description: "Collaboration between Zuva and The 89 Club for this spring.",
    image: cycleMale,
  },
  {
    id: 2,
    title: "Dice by Clara Nayez",
    description: "Dice special edition, designed by Clara Nayez. Out May 20th.",
    image: femaleModelImg,
  },
  {
    id: 3,
    title: "The Dots x Sun Society",
    description:
      "Collaboration between The Dots and Sun Society for outdoor collection.",
    image: bags,
  },
];

const FeaturedItems = () => {
  return (
    <section className=" text-white px-6 md:px-12 py-12 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl font-semibold tracking-wider">FEATURED</h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm">
          See All Featured
        </button>
      </div>

   
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-auto">
        {/* Left column  */}
        <div className="flex flex-col gap-6 ">
          {featuredItems.slice(0, 2).map((item) => (
            <Fade direction="up" triggerOnce key={item.id}>
              <div className="bg-[#1c1c1c] rounded-2xl px-16 py-10 h-[240px] flex justify-between items-center shadow-lg  ">
                <div className="max-w-[55%] ">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                    Shop Now
                  </button>
                </div>  
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-contain"
                />
              </div>
            </Fade>
          ))}
        </div>

        {/* Right column */}
        <Fade direction="up" triggerOnce>
          <div className="bg-[#1c1c1c] rounded-2xl px-6 py-4 flex flex-col justify-between shadow-lg h-[504px]">
            <img
              src={featuredItems[2].image}
              alt={featuredItems[2].title}
              className="w-82 h-70 object-contain self-center my-8"
            />
            <div className="py-6 mx-auto ">
              <h3 className="text-xl font-semibold mb-2">
                {featuredItems[2].title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                {featuredItems[2].description}
              </p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
                Shop Now
              </button>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default FeaturedItems;
