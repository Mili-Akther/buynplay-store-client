import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CategorySidebar from "../Components/CategorySidebar";
import ProductGrid from "../Components/ProductGrid";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Sports");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = "http://localhost:5000/equipment";
        if (!selectedCategory.trim().toLowerCase().includes("all")) {
          url += `?category=${encodeURIComponent(selectedCategory)}`;
        }

        console.log("Fetching from URL:", url);
        const res = await fetch(url);
        const data = await res.json();
        setProducts(data);
        console.log("Fetching from URL:", url);

      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
        
      }
    };

    fetchProducts();
  }, [selectedCategory]);

  

  return (
    <div className=" mx-auto flex text-white">
      {/* Sidebar */}
      <aside className="w-[300px] bg-[#1c1c1c] p-6 rounded-xl">
        <CategorySidebar onCategorySelect={setSelectedCategory} />
      </aside>

      {/* Main content */}
      <main className="flex-2 p-4 w-full">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">EVERYTHING YOU NEED</h1>
          <Link to="/equipment">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm">
              See All Items
            </button>
          </Link>
        </div>
      
        {loading ? (
          <p className="text-white text-center py-6">Loading...</p>
        ) : (
          <ProductGrid products={products} />
        )}
      </main>
    </div>
  );
};

export default Shop;
