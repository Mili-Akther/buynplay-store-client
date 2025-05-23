// import { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";

// const ProductGrid = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch("http://localhost:5000/equipment")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching products:", err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) {
//     return <p className="text-center text-white py-6">Loading...</p>;
//   }


//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
//       {products.map((p, i) => (
//         <ProductCard
//           key={p._id}
//           title={p.name}
//           category={p.category}
//           price={p.price}
//           img={p.image}
//           isNew={p?.isNew}
//           id={p._id}
//         />
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;











// const ProductGrid = ({ products }) => {
//   return (
//     <div className="grid grid-cols-3 gap-6">
//       {products.map((product) => (
//         <div
//           key={product.title}
//           className="bg-[#2a2a2a] p-4 rounded-xl shadow-md"
//         >
//           <img
//             src={product.img}
//             alt={product.title}
//             className="w-full h-48 object-cover rounded"
//           />
//           <h3 className="text-lg font-bold mt-2">{product.title}</h3>
//           <p className="text-gray-300">${product.price}</p>
//           {product.isNew && (
//             <span className="text-green-400 text-xs">New!</span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductGrid;




import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    setLoading(true);

    let url = "http://localhost:5000/equipment";
    if (selectedCategory) {
      url += `?category=${selectedCategory}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, [selectedCategory]); // re-run on category change

  if (loading) {
    return <p className="text-center text-white py-6">Loading...</p>;
  }
  if (!products || products.length === 0) {
    return <p className="text-white py-6 text-center">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard
          key={p._id}
          title={p.name}
          category={p.category}
          price={p.price}
          img={p.image}
          isNew={p?.isNew}
          id={p._id}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
