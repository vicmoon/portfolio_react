import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="hero-container">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
