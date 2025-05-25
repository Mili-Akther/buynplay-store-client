import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../Pages/Loading";

const ProductGrid = ({ selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(products);

  useEffect(() => {
    setLoading(true);

    let url = "https://buy-n-play-server.vercel.app/equipment";
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
  }, [selectedCategory]);

  if (loading) {
    return (
      <p className="text-center text-white py-6">
        <Loading></Loading>
      </p>
    );
  }
  if (!products || products.length === 0) {
    return <p className="text-white py-6 text-center">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <ProductCard
          product={p}
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
