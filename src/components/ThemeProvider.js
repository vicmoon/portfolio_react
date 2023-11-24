import React, { useState , useEffect} from 'react';
import ThemeContext from './ThemeContext';
import { lightTheme, darkTheme } from './themes';

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(lightTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    useEffect(() => {
    // Apply styles to the body or html element
    document.body.style.backgroundColor = theme.body;
    document.body.style.color = theme.text;
     }, [theme]);


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );  

};

export default ThemeProvider;
