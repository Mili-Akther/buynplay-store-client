import ProductCard from "./ProductCard";

const products = [
  {
    title: "lightweight fitness jacket",
    category: "fitness jacket",
    price: 85,
    img: "https://i.ibb.co/c9JRgBJ/gym-jacket.png",
  },
  {
    title: "Running Belt",
    category: "Accessories",
    price: 119,
    img: "https://i.ibb.co/LDSm5Myw/Running-belt.png",
    isNew: true,
  },
  {
    title: "Handball Spezial Shoes",
    category: "Shoes Collection",
    price: 150,
    img: "https://i.ibb.co/Kxt0SphQ/Handball-Spezial-Shoes.png",
    isNew: true,
  },
  {
    title: "emirates",
    category: "Shirts/Tops",
    price: 75,
    img: "https://i.ibb.co/9kk2YSpX/Emirates-tshirt.png",
  },
  {
    title: "Cricket Bat ",
    category: "Cricket Sports Equipment",
    price: 75,
    img: "https://i.ibb.co/jXsJ3G8/cricket-item.png",
  },
  {
    title: "Dumbbells",
    category: "Gym Equipments",
    price: 75,
    img: "https://i.ibb.co/35G2WF1W/dumbbells.png",
  },
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p, i) => (
        <ProductCard key={i} {...p} />
      ))}
    </div>
  );
};

export default ProductGrid;
