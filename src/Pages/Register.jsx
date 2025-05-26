import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import registerLottieData from "../../src/assets/lottie/Register-lottie.json";
import Lottie from "lottie-react";
const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    // console.log({ name, email, photo, password });
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          navigate("/");
          toast.success("Registration successful!");
        });
      })
      .catch((err) => {
        // console.log(err);
      })

      .catch((error) => {
        toast.error("Registration failed: " + error.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left px-12 ">
          <Lottie animationData={registerLottieData}></Lottie>
        </div>
        <div className="bg-stone-800 shadow-2xl rounded-lg p-10 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center mb-4 ">
            Register your account
          </h2>

          <form onSubmit={handleSubmit} action="">
            <div className="mb-4">
              <label className="block text-sm font-medium ">Your Name</label>
              <input
                name="name"
                type="text"
                className="w-full p-3 border rounded-md mt-1"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="w-full p-3 border rounded-md mt-1"
                placeholder="Enter your photo URL"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                className="w-full p-3 border rounded-md mt-1"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                name="password"
                type="password"
                className="w-full p-3 border rounded-md mt-1"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center gap-2 mb-6">
              <input type="checkbox" className="w-4 h-4" />
              <label className="text-sm ">
                Accept <span className="font-semibold">Term & Conditions</span>
              </label>
            </div>

            <button className="w-full bg-amber-500 text-black font-semibold py-2 rounded hover:bg-yellow-500 transition">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
