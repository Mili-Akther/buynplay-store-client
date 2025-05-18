import CategorySidebar from "../Components/CategorySidebar";
import ProductGrid from "../Components/ProductGrid";


const Shop = () => {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <aside className="bg-[#1c1c1c] p-4">
        <CategorySidebar />
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">EVERYTHING YOU NEED</h1>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 text-sm">
            See All Items
          </button>
        </div>
        <ProductGrid />
      </main>
    </div>
  );
};

export default Shop;
