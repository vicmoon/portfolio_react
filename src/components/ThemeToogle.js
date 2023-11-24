import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";



const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const buttonStyle = {
    backgroundColor: 'black', // Set your preferred background color
    color: 'white',             // Set your preferred text color        // Set padding
    border: 'none',             // Remove border
    borderRadius: '20px',        // Add border radius
    cursor: 'pointer', 
    marginRight: '5px'
   
  };

  return (
    <button onClick={toggleTheme} style= {buttonStyle}>
      🌞/🌙
    </button>
  );
};

export default ThemeToggle;