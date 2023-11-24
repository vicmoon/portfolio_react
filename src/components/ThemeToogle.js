import React, { useContext, useState} from "react";
import ThemeContext from "./ThemeContext";



const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [isActive, setActive] = useState(false);


  const buttonStyle = {
    backgroundColor: isActive ? '#363062' : '#ffffff',
    color: isActive ? 'black' : '#000000',         // Set your preferred text color        // Set padding
    border: 'none',             // Remove border
    borderRadius: '20px',        // Add border radius
    cursor: 'pointer', 
    marginRight: '5px'
   
  };

 const handleClick = () => {
    toggleTheme();
    setActive(!isActive);
  };


  return (
   
    <button onClick={handleClick}  style= {buttonStyle} >
      🌞
    </button>
    
  );
};

export default ThemeToggle;