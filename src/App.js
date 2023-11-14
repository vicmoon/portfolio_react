import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import NoPage from './pages/NoPage';


function App() {
    return (
            
            <BrowserRouter>
            <Routes>
            <Route index element= {<Home />}  />
            <Route path="/home" element= {<Home />} />
            <Route path="/about" element= {<About />} />
            <Route path="/contact" element= {<Contact />} />
            <Route path="/work" element= {<Work />} />
            <Route path="*" element= {<NoPage />} />
            </Routes>
            </BrowserRouter>
           
    );
}
export default App;