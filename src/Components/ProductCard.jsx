// src/components/ProductCard.jsx
const ProductCard = ({ title, category, price, img, isNew }) => {
  return (
    <div className="bg-[#1c1c1c] text-white rounded-lg p-4 relative shadow-md">
      {isNew && (
        <span className="absolute top-2 left-2 text-xs bg-white text-black px-2 py-1 rounded">
          NEW ENTRY
        </span>
      )}
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-contain mx-auto"
      />
      <div className="mt-4">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-400">{category}</p>
        <p className="font-semibold mt-1">${price}</p>
      </div>
      <button className="absolute top-2 right-2 text-white">♡</button>
    </div>
  );
};

export default ProductCard;
