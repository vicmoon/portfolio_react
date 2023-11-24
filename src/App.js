import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import NoPage from '../src/pages/NoPage';
import ThemeProvider from './components/ThemeProvider';




function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
            <Routes>
            <Route  index element= {<Home />}  />
            <Route  path="/home" element= {<Home />} />
            <Route  path="/about" element= {<About />} />
            <Route  path="/work" element= {<Work />} />
            <Route  path="/contact" element= {<Contact />} />
            <Route  path="*" element= {<NoPage />} />
            </Routes>
            </BrowserRouter>
        </ThemeProvider>
           
    );
}
export default App;