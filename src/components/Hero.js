import Footer from "./Footer";

function Hero() {
  return (
    <div className="hero">
      <h1> Hi, I'm Victoria</h1>
      <div>
        <img
          src="../images/victoria.jpg
                    "
          // className="img-fluid"
          // width="500px"
          // height='500px'
          alt="Victoria"
        />
      </div>
      <div className="hero__description">
        <p>Self-taught junior full-stack developer</p>
      </div>
      <Footer />
    </div>
  );
}

export default Hero;
