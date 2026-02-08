import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  return <div>
    <button onClick={toggleTheme}>toggleTheme</button>
  </div>;
}

export default ThemeToggle;
