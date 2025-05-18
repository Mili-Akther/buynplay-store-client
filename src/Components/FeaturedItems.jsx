const featuredItems = [
  {
    id: 1,
    title: "Zuva x The 89 Club",
    description: "Collaboration between Zuva and The 89 Club for this spring.",
    image: "/images/cyclist.png",
  },
  {
    id: 2,
    title: "Dice by Clara Nayez",
    description: "Dice special edition, designed by Clara Nayez. Out May 20th.",
    image: "/images/model.png",
  },
  {
    id: 3,
    title: "The Dots x Sun Society",
    description:
      "Collaboration between The Dots and Sun Society for outdoor collection.",
    image: "/images/backpack.png",
  },
];

const FeaturedItems = () => {
  return (
    <section className="bg-black text-white px-10 py-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">FEATURED</h2>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
          See All Featured
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-[#1c1c1c] p-6 rounded-lg"
          >
            <div className="max-w-[60%]">
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{item.description}</p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded text-sm">
                Shop Now
              </button>
            </div>
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-32 object-contain ml-4"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedItems;
