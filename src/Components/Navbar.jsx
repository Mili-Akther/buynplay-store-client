import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { FaSearch, FaHeart, FaShoppingCart, FaBars } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import { AuthContext } from "../Providers/AuthProvider";
import ThemeToggle from "./ThemeToggle/ThemeToggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-10 py-3">
        <Link to="/" className="text-3xl font-extrabold">
          BuyNPlay
        </Link>

        <nav className="hidden lg:flex space-x-6 items-center">
          <NavLink to="/" end className="hover:text-warning">
            Home
          </NavLink>
          <NavLink to="/men" className="hover:text-warning">
            Men
          </NavLink>
          <NavLink to="/women" className="hover:text-warning">
            Women
          </NavLink>
          <NavLink to="/kids" className="hover:text-warning">
            Kids
          </NavLink>
          <NavLink to="/all-sports-equipment" className="hover:text-warning">
            All Sports Equipment
          </NavLink>

          {user && (
            <>
              <NavLink to="/add-equipment" className="hover:text-warning">
                Add Equipment
              </NavLink>
              <NavLink to="/my-equipment" className="hover:text-warning">
                My Equipment List
              </NavLink>
            </>
          )}
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

          {/* user profile  */}
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
              className="btn btn-warning px-4 py-2 text-sm font-semibold"
            >
              Logout
            </button>
          ) : (
            
              <NavLink
                to="/login"
                className="btn btn-warning px-4 py-2 text-sm font-semibold"
              >
                Login
              </NavLink>
        
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
