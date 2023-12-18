import React, { useContext} from "react";
import ThemeContext from "./ThemeContext";
import "./ThemeToogle.css"

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);




  const buttonStyle = {
    // backgroundColor: isActive ? '#363062' : '#ffffff',
    // color: isActive ? '#363062' : '#000000',         // Set your preferred text color        // Set padding
    border: 'none',             // Remove border
    borderRadius: '20px',        // Add border radius
    cursor: 'pointer', 
    marginRight: '5px'
  };

 const handleClick = () => {
    toggleTheme();
  };



  return (
   
    <button onClick={handleClick}  style= {buttonStyle} >
      🌙
    </button>
    
  );
};

export default ThemeToggle;