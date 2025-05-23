const CategorySidebar = ({ onCategorySelect }) => {
 

  const sportsCategories = [
    "All Sports",
    "Basketball",
    "Cycling",
    "Football",
    "Golf",
    "Running",
    "Swim",
    "Tenis",
    "Training",
  ];

  const clothingCategories = [
    "All Clothing",
    "Hoodies",
    "Jackets/Track Tops",
    "Jerseys",
    "Pants/Thighs",
    "Shirts/Tops",
    "Shorts/Bottoms",
    "Skirts",
    "Sports Bra",
  ];

  return (
    <div className="w-full text-white p-2 py-12">
      <div className="mb-12">
        <h3 className="text-orange-400 font-bold text-2xl mb-2">SPORTS</h3>
        <ul className="space-y-1 text-md">
          {sportsCategories.map((cat) => (
            <li
              key={cat}
              onClick={() => onCategorySelect(cat)}
              className="cursor-pointer hover:text-orange-400"
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-orange-400 font-bold text-2xl mb-2">CLOTHING</h3>
        <ul className="space-y-1 text-md">
          {clothingCategories.map((cat) => (
            <li
              key={cat}
              onClick={() => onCategorySelect(cat)}
              className="cursor-pointer hover:text-orange-400"
            >
              {cat}
            </li>
          ))}
        </ul>
        <p className="text-orange-400 text-sm mt-2 underline">
          See other categories...
        </p>
        
      </div>
    </div>
  );
};

export default CategorySidebar;
