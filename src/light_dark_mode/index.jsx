import React from "react";
import useLocalStorage from "./useLocalStorage"; // Custom hook for managing local storage
import "./theme.css"; // Import CSS file for styling

export default function LightDarkMode() {
  // Initialize theme state from local storage, default to "dark" if not found
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  // Function to toggle between "light" and "dark" themes
  function handleToggleTheme() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme); // Update the theme in local storage and state
  }

  // Debugging: Log current theme to console
  console.log(theme);

  return (
    <div className="light-dark-mode" data-theme={theme}>
      {/* Container for the content */}
      <div className="container">
        <p>Hello World!</p>
        {/* Button to change the theme */}
        <button variant="contained" onClick={handleToggleTheme}>
          Change theme
        </button>
      </div>
    </div>
  );
}
