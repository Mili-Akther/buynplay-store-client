import React, { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      className="btn btn-ghost btn-circle p-2 hover:bg-base-200 transition"
    >
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
};
export default ThemeToggle;
