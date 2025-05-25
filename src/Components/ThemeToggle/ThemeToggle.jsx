import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import '../ThemeToggle/ThemeToggle.css'


const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle p-2 hover:bg-base-200 transition"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
