import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

// src/components/Login.jsx
const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 text-black">
      <div className="w-full max-w-lg bg-white p-10 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-black">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-black">
            <label className="block mb-1 font-medium text-gray-700">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email "
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-6 text-black">
            <label className="block mb-1 font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {error.login && (
            <label className="label flex text-sm text-red-600">
              {error.login}
            </label>
          )}

          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot Password?
            </a>
          </label>

          <button
            type="submit"
            className="w-full bg-amber-500 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition"
          >
            Login
          </button>
          <p className="text-center text-sm mt-4">
            Don’t Have An Account?{" "}
            <Link to="/register" className="text-red-500 font-medium">
              Register
            </Link>
          </p>
        </form>

        <div className="flex items-center justify-center my-4">
          <span className="text-gray-400 text-sm">or</span>
        </div>

        <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
          <FaGoogle></FaGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  ); 
};

export default Login;
