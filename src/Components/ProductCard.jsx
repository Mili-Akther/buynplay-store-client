import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {

  const { title, category, price, image, isNew, _id } = product;

  return (
    <div className="bg-[#1c1c1c] text-white rounded-lg p-4 relative shadow-md">
      {isNew && (
        <span className="absolute top-2 left-2 text-xs bg-white text-black px-2 py-1 rounded">
          NEW ENTRY
        </span>
      )}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-contain mx-auto"
      />
      <div className="mt-4">
        <h4 className="font-medium text-xl">{title}</h4>
        <p className="text-sm text-gray-400">{category}</p>
        <p className="font-semibold mt-1">{price}</p>
      </div>

      <Link to={`/equipment/${_id}`}>
        <button className="bg-orange-500 text-white px-2 py-2 hover:bg-orange-600 text-sm rounded-full flex mx-auto mt-2">
          View Details
        </button>
      </Link>

      <button className="absolute top-2 right-2 text-white text-3xl">♡</button>
    </div>
  );
};

export default ProductCard;
