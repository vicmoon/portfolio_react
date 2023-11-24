import Header from '../components/Header';
import Hero from '../components/Hero';
import React, { useContext } from 'react';
import ThemeContext from '../components/ThemeContext';



const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={{ background: theme.body, color: theme.text }}>
      <Header />
      <Hero />
    </div>
  );
};


export default Home;