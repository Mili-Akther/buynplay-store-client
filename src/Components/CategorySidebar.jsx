
const CategorySidebar = () => {
  return (
    <div className="w-full text-white p-2 py-12">
      <div className="mb-12">
        <h3 className="text-orange-400 font-bold text-2xl mb-2">SPORTS</h3>
        <ul className="space-y-1 text-md">
          <li>All Sports</li>
          <li>Basketball</li>
          <li>Cycling</li>
          <li>Football</li>
          <li>Golf</li>
          <li>Running</li>
          <li>Swim</li>
          <li>Tenis</li>
          <li>Training</li>
        </ul>
      </div>
      <div>
        <h3 className="text-orange-400 font-bold text-2xl mb-2">CLOTHING</h3>
        <ul className="space-y-1 text-md">
          <li>All Clothing</li>
          <li>Hoodies</li>
          <li>Jackets/Track Tops</li>
          <li>Jerseys</li>
          <li>Pants/Thighs</li>
          <li>Shirts/Tops</li>
          <li>Shorts/Bottoms</li>
          <li>Skirts</li>
          <li>Sports Bra</li>
        </ul>
        <p className="text-orange-400 text-sm mt-2 underline">
          See other categories...
        </p>
      </div>
    </div>
  );
};

export default CategorySidebar;
