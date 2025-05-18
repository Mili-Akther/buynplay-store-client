import ProductCard from "./ProductCard";

const products = [
  {
    title: "Laura Sport Bra",
    category: "Sports Bra",
    price: 85,
    img: "https://via.placeholder.com/150x150?text=Bra",
  },
  {
    title: "Grey Star Duffle Bag",
    category: "Accessories",
    price: 119,
    img: "https://via.placeholder.com/150x150?text=Bag",
    isNew: true,
  },
  {
    title: "The Crave Red Block",
    category: "Shoes Collection",
    price: 150,
    img: "https://via.placeholder.com/150x150?text=Shoes",
    isNew: true,
  },
  {
    title: "Rodinson Blue",
    category: "Shirts/Tops",
    price: 75,
    img: "https://via.placeholder.com/150x150?text=Shirt",
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
};

export default ProductGrid;
