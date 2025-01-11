import React from 'react';
import './Hero.css'; // Assuming the CSS is in Hero.css

function Hero() {
  return (
    <div className="hero">
      {/* <h1>Hi, I'm Victoria</h1> */}
      <div className="card-hero">
        <div className="card-inner-hero">
          {/* Front Side */}
          <div className="card-front-hero">
            <img
              src="../images/victoria.jpg"
              alt="Victoria"
              className="img-fluid round-image"
            />
          </div>
          {/* Back Side */}
          <div className="card-back-hero">
            <p>Hi there! I'm a self-taught developer 👩🏼‍💻</p>
          </div>
        </div>
      </div>
      {/* <div className="hero__description">
        <p>Self-taught full-stack developer</p>
      </div> */}
    </div>
  );
}

export default Hero;
