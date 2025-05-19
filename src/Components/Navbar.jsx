import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaHeart, FaBars } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";

const items = ["Home", "Men", "Women", "Kids", "All Sports Equipment"];


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-3">
        <Link to="/" className="text-3xl font-extrabold ">
          BuyNPlay
        </Link>
        <nav className="hidden lg:flex space-x-8">
          {items.map((i) => (
            <NavLink
              key={i}
              to={i === "Home" ? "/" : `/${i.toLowerCase()}`}
              end={i === "Home"}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors ${
                  isActive
                    ? "text-warning"
                    : "text-base-content hover:text-warning"
                }`
              }
            >
              {i}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          {[FaSearch, FaHeart, FaShoppingCart].map((Icon, idx) => (
            <button
              key={idx}
              className="btn btn-ghost btn-circle p-2 hover:bg-base-200 transition"
            >
              <Icon />
            </button>
          ))}
          <ThemeToggle />
          <div className="">
            {user && user?.email ? (
              <div>
                <img className="w-10 rounded-full" src={user?.photoURL} />
                <p>{user.displayName}</p>
              </div>
            ) : (
              <CgProfile className="text-3xl" />
            )}
          </div>

          {user && user?.email ? (
            <button
              onClick={logOut}
              className="btn btn-warning px-5 py-2 text-sm font-semibold"
            >
              Log-Out
            </button>
          ) : (
            <Link
              to="/login"
              className="btn btn-warning px-5 py-2 text-sm font-semibold"
            >
              Login
            </Link>
          )}

          <button className="lg:hidden btn btn-ghost btn-circle p-2 hover:bg-base-200 transition">
            <FaBars />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
